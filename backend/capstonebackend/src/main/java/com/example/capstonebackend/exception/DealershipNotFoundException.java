package com.example.capstonebackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class DealershipNotFoundException extends RuntimeException {

    public DealershipNotFoundException() {
        super();
    }

    public DealershipNotFoundException(String message) {
        super(message);
    }

    public DealershipNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}