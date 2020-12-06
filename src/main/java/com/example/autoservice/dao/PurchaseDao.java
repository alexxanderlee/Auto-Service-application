package com.example.autoservice.dao;

import com.example.autoservice.model.Client;
import com.example.autoservice.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseDao extends JpaRepository<Purchase, Long> {
    List<Purchase> getAllByClient(Client client);
}