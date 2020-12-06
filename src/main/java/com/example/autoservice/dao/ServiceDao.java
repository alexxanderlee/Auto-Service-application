package com.example.autoservice.dao;

import com.example.autoservice.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceDao extends JpaRepository<Service, Long> {
}