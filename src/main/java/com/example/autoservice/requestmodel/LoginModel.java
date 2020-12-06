package com.example.autoservice.requestmodel;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class LoginModel {
    private String email;
    private String pswd;
}
