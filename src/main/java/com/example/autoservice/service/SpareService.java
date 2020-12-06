package com.example.autoservice.service;

import com.example.autoservice.dao.SpareDao;
import com.example.autoservice.model.Spare;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class SpareService {
    @Autowired
    private SpareDao spareDao;

    public List<Spare> getAll() {
        return spareDao.findAll();
    }

    public Spare getById(Long id) {
        return spareDao.getOne(id);
    }
}
