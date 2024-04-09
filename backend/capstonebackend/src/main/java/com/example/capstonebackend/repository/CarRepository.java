package com.example.capstonebackend.repository;

import com.example.capstonebackend.model.Car;
import com.example.capstonebackend.model.Dealership;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface CarRepository extends JpaRepository<Car, Long>, JpaSpecificationExecutor<Car> {

    Optional<Car> findByVin(String vin);

    void deleteByVin(String vin);
}