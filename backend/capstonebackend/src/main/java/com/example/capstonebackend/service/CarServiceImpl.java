package com.example.capstonebackend.service;

import com.example.capstonebackend.model.Car;
import com.example.capstonebackend.model.CarFilter;
import com.example.capstonebackend.model.CarSpecifications;
import com.example.capstonebackend.repository.CarRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class CarServiceImpl implements CarService {

    private final CarRepository carRepository;

    @Autowired
    public CarServiceImpl(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public Car addCar(Car car) {
        // Additional validation or business logic can be added here
        return carRepository.save(car);
    }

    @Override
    public Car updateCar(Car carDetails) {
        // Check if the car with the given ID exists
        Optional<Car> existingCarOptional = carRepository.findByVin(carDetails.getVin());

        if (existingCarOptional.isPresent()) {
            Car existingCar = existingCarOptional.get();

            // Update the existing car with the details provided
            existingCar.setVin(carDetails.getVin());
            existingCar.setModel(carDetails.getModel());
            existingCar.setColor(carDetails.getColor());
            existingCar.setYear(carDetails.getYear());
            existingCar.setPrice(carDetails.getPrice());
            existingCar.setMileage(carDetails.getMileage());
            existingCar.setIsNew(carDetails.getIsNew());
            existingCar.setEvRange(carDetails.getEvRange());
            existingCar.setEngineType(carDetails.getEngineType());
            existingCar.setTrim(carDetails.getTrim());
            existingCar.setDrivetrain(carDetails.getDrivetrain());

            // Save the updated car
            return carRepository.save(existingCar);
        } else {
            // Throw an exception or handle the case where the car is not found
            // For simplicity, we are returning null here; you may want to throw a custom exception
            return null;
        }
    }

    @Override
    public List<Car> findCarsByFilter(Long id,CarFilter carFilter) {
        Specification<Car> specification = CarSpecifications.filterByCarAttributes(id,carFilter);
        return carRepository.findAll(specification);
    }

    @Override
    public Car findCarByVin(String vin) {
        // Check if the car with the given VIN exists
        Optional<Car> carOptional = carRepository.findByVin(vin);

        if (carOptional.isPresent()) {
            return carOptional.get();
        } else {
            // Throw an exception or handle the case where the car is not found
            // For simplicity, we are returning null here; you may want to throw a custom exception
            return null;
        }
    }
    public void deleteCarByVin(String vin) {
        carRepository.deleteByVin(vin);
    }
    // Other service methods...
}