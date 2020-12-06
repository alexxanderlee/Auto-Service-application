package com.example.autoservice.dao;

import com.example.autoservice.model.Client;
import com.example.autoservice.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderDao extends JpaRepository<Order, Long> {
    List<Order> getAllByClient(Client client);
}
