package com.example.capstonebackend.model;

public class CarFilter {


    private String vin;
    private Double maxPrice;
    private Integer minYear;
    private Integer maxYear;
    private Boolean isNew;
    private Double minMileage;
    private Double maxMileage;
    private String model;
    private String color;

    private Double minevRange;
    private Double maxevRange;
    private String engineType;
    private String trim;

    private String drivetrain;

    private String interiorColor;

    public Boolean getReturnSold() {
        return returnSold;
    }

    public void setReturnSold(Boolean returnSold) {
        this.returnSold = returnSold;
    }

    private Boolean returnSold;

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }


    public String getEngineType() {
        return engineType;
    }

    public void setEngineType(String engineType) {
        this.engineType = engineType;
    }

    public String getTrim() {
        return trim;
    }

    public void setTrim(String trim) {
        this.trim = trim;
    }


    public Double getMinPrice() {
        return minPrice;
    }

    public void setMinPrice(Double minPrice) {
        this.minPrice = minPrice;
    }

    private Double minPrice;

    public Double getMaxPrice() {
        return maxPrice;
    }

    public void setMaxPrice(Double maxPrice) {
        this.maxPrice = maxPrice;
    }

    public Integer getMinYear() {
        return minYear;
    }

    public void setMinYear(Integer minYear) {
        this.minYear = minYear;
    }

    public Integer getMaxYear() {
        return maxYear;
    }

    public void setMaxYear(Integer maxYear) {
        this.maxYear = maxYear;
    }

    public Boolean getIsNew() {
        return isNew;
    }

    public void setIsNew(Boolean aNew) {
        isNew = aNew;
    }

    public Double getMinMileage() {
        return minMileage;
    }

    public void setMinMileage(Double minMileage) {
        this.minMileage = minMileage;
    }

    public Double getMaxMileage() {
        return maxMileage;
    }

    public void setMaxMileage(Double maxMileage) {
        this.maxMileage = maxMileage;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getDrivetrain() {
        return drivetrain;
    }

    public void setDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
    }
    public Double getMinevRange() {
        return minevRange;
    }

    public void setMinevRange(Double minevRange) {
        this.minevRange = minevRange;
    }

    public Double getMaxevRange() {
        return maxevRange;
    }

    public void setMaxevRange(Double maxevRange) {
        this.maxevRange = maxevRange;
    }
    public String getInteriorColor() {
        return interiorColor;
    }

    public void setInteriorColor(String interiorColor) {
        this.interiorColor = interiorColor;
    }

}