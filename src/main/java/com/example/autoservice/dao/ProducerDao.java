package com.example.autoservice.dao;

import com.example.autoservice.model.Producer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProducerDao extends JpaRepository<Producer, Long> {
}