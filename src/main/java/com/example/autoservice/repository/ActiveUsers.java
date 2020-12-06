package com.example.autoservice.repository;

import com.example.autoservice.model.Client;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class ActiveUsers {
    private static ActiveUsers activeUsers;
    private Map<String, Client> authorizedUsers;

    private ActiveUsers() {
        authorizedUsers = new HashMap<>();
    }

    public static ActiveUsers getActiveUsersInstance() {
        if (activeUsers == null) {
            return new ActiveUsers();
        }
        return activeUsers;
    }

    public String putUser(Client client) {
        String token = UUID.randomUUID().toString();
        authorizedUsers.put(token, client);
        return token;
    }

    public void removeUser(String token) {
        authorizedUsers.remove(token);
    }

    public boolean isActive(String token) {
        if (authorizedUsers.get(token) == null) {
            return false;
        }
        return true;
    }
}
