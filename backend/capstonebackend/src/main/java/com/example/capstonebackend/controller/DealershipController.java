package com.example.capstonebackend.controller;

import com.example.capstonebackend.exception.DealershipNotFoundException;
import com.example.capstonebackend.model.Dealership;
import com.example.capstonebackend.service.DealershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/dealerships")
public class DealershipController {

    private final DealershipService dealershipService;

    @Autowired
    public DealershipController(DealershipService dealershipService) {
        this.dealershipService = dealershipService;
    }

    @PostMapping
    public ResponseEntity<Dealership> addDealership(@RequestBody Dealership dealership) {
        Dealership newDealership = dealershipService.addDealership(dealership);
        return ResponseEntity.ok(newDealership);
    }

    @GetMapping
    public ResponseEntity<List<Dealership>> getAllDealerships() {
        List<Dealership> dealerships = dealershipService.getAllDealerships();
        return ResponseEntity.ok(dealerships);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDealershipById(@PathVariable Long id) {
        try {
            Dealership dealership = dealershipService.getDealershipById(id);
            return ResponseEntity.ok(dealership);
        } catch (DealershipNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Dealership> updateDealership(@PathVariable Long id, @RequestBody Dealership dealershipDetails) {
        Dealership updatedDealership = dealershipService.updateDealership(id, dealershipDetails);
        return ResponseEntity.ok(updatedDealership);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDealership(@PathVariable Long id) {
        dealershipService.deleteDealership(id);
        return ResponseEntity.ok().build();
    }
}