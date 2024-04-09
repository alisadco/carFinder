package com.example.capstonebackend.controller;

import com.example.capstonebackend.exception.DealershipNotFoundException;
import com.example.capstonebackend.model.Dealership;
import com.example.capstonebackend.service.DealershipService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class DealershipControllerTest {

    @Mock
    private DealershipService dealershipService;

    @InjectMocks
    private DealershipController dealershipController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void addDealership_ShouldReturnNewDealership() {
        Dealership dealership = new Dealership();
        Dealership newDealership = new Dealership();
        when(dealershipService.addDealership(dealership)).thenReturn(newDealership);

        ResponseEntity<Dealership> response = dealershipController.addDealership(dealership);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(newDealership, response.getBody());
    }

    @Test
    void getAllDealerships_ShouldReturnListOfDealerships() {
        List<Dealership> dealerships = new ArrayList<>();
        when(dealershipService.getAllDealerships()).thenReturn(dealerships);

        ResponseEntity<List<Dealership>> response = dealershipController.getAllDealerships();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(dealerships, response.getBody());
    }

    @Test
    void getDealershipById_ShouldReturnDealership_WhenDealershipExists() {
        Long id = 1L;
        Dealership dealership = new Dealership();
        when(dealershipService.getDealershipById(id)).thenReturn(dealership);

        ResponseEntity<?> response = dealershipController.getDealershipById(id);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(dealership, response.getBody());
    }

    @Test
    void getDealershipById_ShouldReturnNotFound_WhenDealershipDoesNotExist() {
        Long id = 1L;
        when(dealershipService.getDealershipById(id)).thenThrow(new DealershipNotFoundException());

        ResponseEntity<?> response = dealershipController.getDealershipById(id);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void updateDealership_ShouldReturnUpdatedDealership() {
        Long id = 1L;
        Dealership dealershipDetails = new Dealership();
        Dealership updatedDealership = new Dealership();
        when(dealershipService.updateDealership(id, dealershipDetails)).thenReturn(updatedDealership);

        ResponseEntity<Dealership> response = dealershipController.updateDealership(id, dealershipDetails);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(updatedDealership, response.getBody());
    }

    @Test
    void deleteDealership_ShouldReturnOk() {
        Long id = 1L;

        ResponseEntity<Void> response = dealershipController.deleteDealership(id);

        verify(dealershipService, times(1)).deleteDealership(id);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}