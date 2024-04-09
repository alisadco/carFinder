package com.example.capstonebackend.service;

import com.example.capstonebackend.model.Dealership;
import com.example.capstonebackend.repository.DealershipRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.*;

class DealershipServiceImplTest {

    @Mock
    private DealershipRepository dealershipRepository;

    @InjectMocks
    private DealershipServiceImpl dealershipService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllDealerships_ShouldReturnListOfDealerships() {
        List<Dealership> dealerships = new ArrayList<>();
        when(dealershipRepository.findAll()).thenReturn(dealerships);

        List<Dealership> result = dealershipService.getAllDealerships();

        assertEquals(dealerships, result);
    }

    @Test
    void getDealershipById_ShouldReturnDealership_WhenDealershipExists() {
        Long id = 1L;
        Dealership dealership = new Dealership();
        when(dealershipRepository.findById(id)).thenReturn(Optional.of(dealership));

        Dealership result = dealershipService.getDealershipById(id);

        assertEquals(dealership, result);
    }

    @Test
    void getDealershipById_ShouldReturnNull_WhenDealershipDoesNotExist() {
        Long id = 1L;
        when(dealershipRepository.findById(id)).thenReturn(Optional.empty());

        Dealership result = dealershipService.getDealershipById(id);

        assertNull(result);
    }

    @Test
    void addDealership_ShouldReturnNewDealership() {
        Dealership dealership = new Dealership();
        when(dealershipRepository.save(dealership)).thenReturn(dealership);

        Dealership result = dealershipService.addDealership(dealership);

        assertEquals(dealership, result);
    }

    @Test
    void deleteDealership_ShouldDeleteDealership() {
        Long id = 1L;

        dealershipService.deleteDealership(id);

        verify(dealershipRepository, times(1)).deleteById(id);
    }

    @Test
    void updateDealership_ShouldReturnUpdatedDealership_WhenDealershipExists() {
        Long id = 1L;
        Dealership updatedDealership = new Dealership();
        when(dealershipRepository.existsById(id)).thenReturn(true);
        when(dealershipRepository.save(updatedDealership)).thenReturn(updatedDealership);

        Dealership result = dealershipService.updateDealership(id, updatedDealership);

        assertEquals(updatedDealership, result);
    }

    @Test
    void updateDealership_ShouldReturnNull_WhenDealershipDoesNotExist() {
        Long id = 1L;
        Dealership updatedDealership = new Dealership();
        when(dealershipRepository.existsById(id)).thenReturn(false);

        Dealership result = dealershipService.updateDealership(id, updatedDealership);

        assertNull(result);
    }
}