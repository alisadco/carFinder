package com.example.capstonebackend.controller;

import com.example.capstonebackend.model.Car;
import com.example.capstonebackend.model.CarFilter;
import com.example.capstonebackend.model.Dealership;
import com.example.capstonebackend.service.CarService;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

import com.example.capstonebackend.service.DealershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/api/cars")
public class CarController {

    private final CarService carService;
    private final DealershipService dealershipService;

    @Autowired
    public CarController(CarService carService, DealershipService dealershipService) {
        this.carService = carService;
        this.dealershipService = dealershipService;
    }

    @PostMapping("/{dealershipId}")
    public ResponseEntity<Car> addCar(@PathVariable Long dealershipId,@RequestBody Car car) {
        Date now = new Date();
        car.setBuyDate(now);
        Dealership dealership = dealershipService.getDealershipById(dealershipId);
        car.setDealership(dealership);
        Car newCar = carService.addCar(car);
        return ResponseEntity.ok(newCar);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCar(@RequestBody Car carDetails) {
        Car updatedCar = carService.updateCar(carDetails);
        return ResponseEntity.ok(updatedCar);
    }

    @PostMapping("/filter/{id}")
    public ResponseEntity<List<Car>> findCarsByFilter(@RequestBody CarFilter carFilter,@PathVariable Long id) {

        List<Car> filteredCars = carService.findCarsByFilter(id,carFilter);

        return ResponseEntity.ok(filteredCars);
    }
    @GetMapping("/{vin}")
    public Car findCarByVin(@PathVariable String vin) {

        Car car = carService.findCarByVin(vin);
        return car;
    }
    @PostMapping("/sell/{vin}")
    public ResponseEntity<Car> sellCarByVin(@PathVariable String vin) {

        Car car = carService.findCarByVin(vin);
        car.setSellDate(new Date());
        Car newCar = carService.addCar(car);
        return ResponseEntity.ok(newCar);
    }
}
