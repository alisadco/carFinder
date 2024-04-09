package com.example.capstonebackend.service;

import com.example.capstonebackend.model.Car;
import com.example.capstonebackend.model.CarFilter;
import com.example.capstonebackend.repository.CarRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class CarServiceImplTest {

    @Mock
    private CarRepository carRepository;

    @InjectMocks
    private CarServiceImpl carService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void addCar_ShouldReturnNewCar() {
        Car car = new Car();
        when(carRepository.save(car)).thenReturn(car);

        Car result = carService.addCar(car);

        assertEquals(car, result);
    }

    @Test
    void updateCar_ShouldReturnUpdatedCar_WhenCarExists() {
        String vin = "ABC123";
        Car carDetails = new Car();
        carDetails.setVin(vin);
        Car existingCar = new Car();
        when(carRepository.findByVin(vin)).thenReturn(Optional.of(existingCar));
        when(carRepository.save(existingCar)).thenReturn(existingCar);

        Car result = carService.updateCar(carDetails);

        assertEquals(existingCar, result);
    }

    @Test
    void updateCar_ShouldReturnNull_WhenCarDoesNotExist() {
        String vin = "ABC123";
        Car carDetails = new Car();
        when(carRepository.findByVin(vin)).thenReturn(Optional.empty());

        Car result = carService.updateCar(carDetails);

        assertNull(result);
    }

    @Test
    void findCarsByFilter_ShouldReturnFilteredCars() {
        Long id = 1L;
        CarFilter carFilter = new CarFilter();
        List<Car> filteredCars = new ArrayList<>();
        when(carRepository.findAll(any(Specification.class))).thenReturn(filteredCars);

        List<Car> result = carService.findCarsByFilter(id, carFilter);

        assertEquals(filteredCars, result);
    }

    @Test
    void findCarByVin_ShouldReturnCar_WhenCarExists() {
        String vin = "ABC123";
        Car car = new Car();
        when(carRepository.findByVin(vin)).thenReturn(Optional.of(car));

        Car result = carService.findCarByVin(vin);

        assertEquals(car, result);
    }

    @Test
    void findCarByVin_ShouldReturnNull_WhenCarDoesNotExist() {
        String vin = "ABC123";
        when(carRepository.findByVin(vin)).thenReturn(Optional.empty());

        Car result = carService.findCarByVin(vin);

        assertNull(result);
    }

    @Test
    void deleteCarByVin_ShouldDeleteCar() {
        String vin = "ABC123";

        carService.deleteCarByVin(vin);

        verify(carRepository, times(1)).deleteByVin(vin);
    }
}