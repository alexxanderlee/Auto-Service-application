package com.example.autoservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginModel {
    private String email;
    private String pswd;
}
