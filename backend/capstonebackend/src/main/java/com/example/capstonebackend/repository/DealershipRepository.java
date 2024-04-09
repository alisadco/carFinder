package com.example.capstonebackend.repository;

import com.example.capstonebackend.model.Dealership;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DealershipRepository extends JpaRepository<Dealership, Long> {
    Optional<Dealership> findById(Long Id);
}