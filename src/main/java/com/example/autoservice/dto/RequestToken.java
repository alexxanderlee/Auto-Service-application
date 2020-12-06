package com.example.autoservice.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class RequestToken {
    private String token;
}
