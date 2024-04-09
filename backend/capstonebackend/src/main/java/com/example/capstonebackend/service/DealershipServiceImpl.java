package com.example.capstonebackend.service;

import com.example.capstonebackend.model.Dealership;
import com.example.capstonebackend.repository.DealershipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DealershipServiceImpl implements DealershipService {

    @Autowired
    private DealershipRepository dealershipRepository;

    @Override
    public List<Dealership> getAllDealerships() {
        return dealershipRepository.findAll();
    }

    @Override
    public Dealership getDealershipById(Long id) {
        return dealershipRepository.findById(id).orElse(null);
    }

    @Override
    public Dealership addDealership(Dealership dealership) {
        return dealershipRepository.save(dealership);
    }

    @Override
    public void deleteDealership(Long id) {
        dealershipRepository.deleteById(id);
    }

    @Override
    public Dealership updateDealership(Long id, Dealership updatedDealership) {
        if (dealershipRepository.existsById(id)) {
            updatedDealership.setId(id);
            return dealershipRepository.save(updatedDealership);
        } else {
            // Handle not found scenario, throw an exception or return an appropriate response
            return null;
        }
    }
}