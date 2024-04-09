package com.example.capstonebackend.model;

import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class CarSpecifications {

    public static Specification<Car> filterByCarAttributes(Long id, CarFilter carFilter) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (carFilter.getVin() != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("vin"), carFilter.getVin()));
            }
            if (carFilter.getMaxPrice() != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("price"), carFilter.getMaxPrice()));
            }
            if (carFilter.getMinYear() != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("year"), carFilter.getMinYear()));
            }
            if (carFilter.getMaxYear() != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("year"), carFilter.getMaxYear()));
            }
            if (carFilter.getIsNew() != null) {
                predicates.add(criteriaBuilder.equal(root.get("isNew"), carFilter.getIsNew()));
            }
            if (carFilter.getMinMileage() != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("mileage"), carFilter.getMinMileage()));
            }
            if (carFilter.getMaxMileage() != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("mileage"), carFilter.getMaxMileage()));
            }
            if (carFilter.getModel() != null && !carFilter.getModel().isEmpty()) {
                predicates.add(criteriaBuilder.like(root.get("model"), "%" + carFilter.getModel() + "%"));
            }
            if (carFilter.getColor() != null && !carFilter.getColor().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("color"), carFilter.getColor()));
            }
            if (carFilter.getEngineType() != null && !carFilter.getEngineType().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("engineType"), carFilter.getEngineType()));
            }
            if (carFilter.getTrim() != null && !carFilter.getTrim().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("trim"), carFilter.getTrim()));
            }
            if (carFilter.getDrivetrain() != null && !carFilter.getDrivetrain().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("transmission"), carFilter.getDrivetrain()));
            }
            if (carFilter.getMinevRange() != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("evRange"), carFilter.getMinevRange()));
            }
            if (carFilter.getMaxevRange() != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("evRange"), carFilter.getMaxevRange()));
            }
            if (carFilter.getInteriorColor() != null&& !carFilter.getInteriorColor().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("interiorColor"), carFilter.getInteriorColor()));
            }
                predicates.add(criteriaBuilder.equal(root.get("dealership").get("id"), id));

            if (carFilter.getReturnSold() == null || !carFilter.getReturnSold()){
                predicates.add(criteriaBuilder.isNull(root.get("sellDate")));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}