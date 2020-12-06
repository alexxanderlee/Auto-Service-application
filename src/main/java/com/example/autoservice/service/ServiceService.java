package com.example.autoservice.service;

import com.example.autoservice.dao.ServiceDao;
import com.example.autoservice.model.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ServiceService {
    @Autowired
    private ServiceDao serviceDao;

    public List<Service> getAll() {
        return serviceDao.findAll();
    }

    public Service getById(Long id) {return serviceDao.getOne(id);}
}
