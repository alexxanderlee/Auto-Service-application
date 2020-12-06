package com.example.autoservice.dao;

import com.example.autoservice.model.Spare;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpareDao extends JpaRepository<Spare, Long> {
}