package com.example.capstonebackend.service;

import com.example.capstonebackend.model.Dealership;
import java.util.List;

public interface DealershipService {
    List<Dealership> getAllDealerships();
    Dealership getDealershipById(Long id);
    Dealership addDealership(Dealership dealership);
    Dealership updateDealership(Long id, Dealership updatedDealership);
    void deleteDealership(Long id);
}