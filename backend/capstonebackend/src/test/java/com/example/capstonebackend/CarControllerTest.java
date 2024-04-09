package com.example.capstonebackend;

import com.example.capstonebackend.controller.CarController;
import com.example.capstonebackend.model.Car;
import com.example.capstonebackend.model.CarFilter;
import com.example.capstonebackend.model.Dealership;
import com.example.capstonebackend.service.CarService;
import com.example.capstonebackend.service.DealershipService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

class CarControllerTest {

    @Mock
    private CarService carService;

    @Mock
    private DealershipService dealershipService;

    @InjectMocks
    private CarController carController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void addCar_ShouldReturnNewCar() {
        Long dealershipId = 1L;
        Car car = new Car();
        Dealership dealership = new Dealership();
        when(dealershipService.getDealershipById(dealershipId)).thenReturn(dealership);
        when(carService.addCar(any(Car.class))).thenReturn(car);

        ResponseEntity<Car> response = carController.addCar(dealershipId, car);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(car, response.getBody());
    }

    @Test
    void updateCar_ShouldReturnUpdatedCar() {
        Car carDetails = new Car();
        Car updatedCar = new Car();
        when(carService.updateCar(carDetails)).thenReturn(updatedCar);

        ResponseEntity<Car> response = carController.updateCar(carDetails);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(updatedCar, response.getBody());
    }

    @Test
    void findCarsByFilter_ShouldReturnFilteredCars() {
        Long id = 1L;
        CarFilter carFilter = new CarFilter();
        List<Car> filteredCars = new ArrayList<>();
        when(carService.findCarsByFilter(id, carFilter)).thenReturn(filteredCars);

        ResponseEntity<List<Car>> response = carController.findCarsByFilter(carFilter, id);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(filteredCars, response.getBody());
    }

    @Test
    void findCarByVin_ShouldReturnCar() {
        String vin = "ABC123";
        Car car = new Car();
        when(carService.findCarByVin(vin)).thenReturn(car);

        Car result = carController.findCarByVin(vin);

        assertEquals(car, result);
    }

    @Test
    void sellCarByVin_ShouldReturnUpdatedCar() {
        String vin = "ABC123";
        Car car = new Car();
        Car updatedCar = new Car();
        updatedCar.setSellDate(new Date());
        when(carService.findCarByVin(vin)).thenReturn(car);
        when(carService.addCar(car)).thenReturn(updatedCar);

        ResponseEntity<Car> response = carController.sellCarByVin(vin);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(updatedCar, response.getBody());
    }
}