package com.example.autoservice.response;

import lombok.Data;

@Data
public class Response {
    private ResultType responseType;
    private String message;
}
