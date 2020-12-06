package com.example.autoservice.dao;

import com.example.autoservice.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseDao extends JpaRepository<Purchase, Long> {
}