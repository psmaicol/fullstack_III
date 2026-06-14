package com.shopsmart.shopsmart.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public abstract class BaseController {

    protected <T> ResponseEntity<T> buildResponse(T data, HttpStatus status) {
        return new ResponseEntity<>(data, status);
    }

    protected ResponseEntity<String> buildError(String message, HttpStatus status) {
        return new ResponseEntity<>(message, status);
    }
}