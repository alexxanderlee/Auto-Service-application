package com.example.autoservice.service;

import com.example.autoservice.dao.ClientDao;
import com.example.autoservice.model.Client;
import com.example.autoservice.repository.ActiveUsers;
import com.example.autoservice.requestmodel.LoginModel;
import com.example.autoservice.requestmodel.RequestToken;
import com.example.autoservice.response.Response;
import com.example.autoservice.response.ResultType;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import org.springframework.beans.factory.annotation.Autowired;

public class ClientService {
    private Gson gson;
    private final ClientDao clientDao;
    private ActiveUsers activeUsers;

    @Autowired
    public ClientService(ClientDao clientDao) {
        this.clientDao = clientDao;
        gson = new Gson();
        activeUsers = ActiveUsers.getActiveUsersInstance();
    }


    public String registrationUser(String userJson) {
        Client client;
        try {
            client = gson.fromJson(userJson, Client.class);
            Client client1 = clientDao.save(client);
        } catch (JsonSyntaxException ex) {
            return gson.toJson(new Response(ResultType.ERROR, ex.getMessage()));
        }
        String token = activeUsers.putUser(client);
        return gson.toJson(new Response(ResultType.SUCCESSFUL, token));
    }

    public String loginUser(String loginDataJson) {
        LoginModel loginModel = gson.fromJson(loginDataJson, LoginModel.class);
        Client client = clientDao.findByEmailAndPswd(loginModel.getEmail(), loginModel.getPswd());
        if (client == null) {
            return gson.toJson(new Response(ResultType.ERROR, "wrong login or password"));
        }
        String token = activeUsers.putUser(client);
        return gson.toJson(new Response(ResultType.SUCCESSFUL, token));
    }

    public String logoutUser(String tokenJson) {
        RequestToken requestToken;
        try {
            requestToken = gson.fromJson(tokenJson, RequestToken.class);
        } catch (JsonSyntaxException ex) {
            return gson.toJson(new Response(ResultType.ERROR, ex.getMessage()));
        }
        activeUsers.removeUser(requestToken.getToken());
        return gson.toJson(new Response(ResultType.SUCCESSFUL, ""));
    }
}
