package com.shopsmart.shopsmart.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public abstract class BaseController {

    // Método genérico para construir respuestas exitosas
    protected <T> ResponseEntity<T> buildResponse(T data, HttpStatus status) {
        return new ResponseEntity<>(data, status);
    }

    // Método genérico para construir respuestas de error
    protected ResponseEntity<String> buildError(String message, HttpStatus status) {
        return new ResponseEntity<>(message, status);
    }
}