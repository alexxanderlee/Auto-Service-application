package com.example.autoservice.service;

import com.example.autoservice.dao.OrderDao;
import com.example.autoservice.model.Order;
import com.example.autoservice.repository.ActiveUsers;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class OrderService {
    @Autowired
    private OrderDao orderDao;

    public Order save(Order order) {
        return orderDao.save(order);
    }

    public List<Order> getByToken(String token) {
        return orderDao.getAllByClient(ActiveUsers.getActiveUsersInstance()
                                                  .getUser(token));
    }
}
