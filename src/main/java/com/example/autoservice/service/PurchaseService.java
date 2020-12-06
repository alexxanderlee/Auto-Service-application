package com.example.autoservice.service;

import com.example.autoservice.dao.PurchaseDao;
import com.example.autoservice.model.Purchase;
import com.example.autoservice.repository.ActiveUsers;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class PurchaseService {
    @Autowired
    private PurchaseDao purchaseDao;

    public Purchase save(Purchase purchase) {
        return purchaseDao.save(purchase);
    }

    public List<Purchase> getByToken(String token) {
        return purchaseDao.getAllByClient(ActiveUsers.getActiveUsersInstance()
                                                     .getUser(token));
    }
}
