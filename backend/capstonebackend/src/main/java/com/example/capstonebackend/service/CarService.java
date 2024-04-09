package com.example.capstonebackend.service;

import com.example.capstonebackend.model.Car;
import com.example.capstonebackend.model.CarFilter;
import java.util.List;

public interface CarService {
    Car addCar(Car car);

    Car updateCar(Car carDetails);

    List<Car> findCarsByFilter(Long dealer_id,CarFilter carFilter);
    Car findCarByVin(String vin);
    void deleteCarByVin(String vin);
}