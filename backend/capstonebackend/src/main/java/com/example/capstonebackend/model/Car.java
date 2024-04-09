package com.example.capstonebackend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.Date;


@Entity
public class Car {


    @Id
    @NotBlank(message = "VIN cannot be blank")
    private String vin;

    @NotBlank(message = "Model cannot be blank")
    private String model;

    @NotBlank(message = "Color cannot be blank")
    private String color;

    @NotBlank(message = "Interior color cannot be blank")
    private String interiorColor;

    @NotNull
    @Min(value = 1886, message = "Year should not be less than 1886")
    @Max(value = 2099, message = "Year should not be greater than 2099")
    private Integer year;

    @NotNull
    @DecimalMin(value = "0.0", inclusive = false, message = "Price should be greater than 0")
    private Double price;

    @NotNull
    @DecimalMin(value = "0.0", inclusive = true, message = "Mileage should not be less than 0")
    private Double mileage;

    @NotNull
    private Boolean isNew;

    @NotBlank(message = "EV range cannot be blank")
    private Double evRange;

    @NotBlank(message = "Engine type cannot be blank")
    private String engineType;

    @NotBlank(message = "Trim cannot be blank")
    private String trim;

    @NotBlank(message = "Drivetrain cannot be blank")
    private String drivetrain;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "dealership_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Dealership dealership;



    private Date buyDate;

    private Date sellDate;


    public Dealership getDealership() {
        return dealership;
    }

    public void setDealership(Dealership dealership) {
        this.dealership = dealership;
    }




    public Car() {
    }

    public Car(String vin,String model, String color, Integer year, Double price, Double mileage, Boolean isNew,
               Double evRange, String engineType, String trim, String transmission,Dealership dealership) {
        this.vin = vin;
        this.model = model;
        this.color = color;
        this.year = year;
        this.price = price;
        this.mileage = mileage;
        this.isNew = isNew;
        this.evRange = evRange;
        this.engineType = engineType;
        this.trim = trim;
        this.drivetrain = transmission;
        this.dealership = dealership;
    }



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

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getMileage() {
        return mileage;
    }

    public void setMileage(Double mileage) {
        this.mileage = mileage;
    }

    public Boolean getIsNew() {
        return isNew;
    }

    public void setIsNew(Boolean aNew) {
        isNew = aNew;
    }

    public Double getEvRange() {
        return evRange;
    }

    public void setEvRange(Double evRange) {
        this.evRange = evRange;
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



    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getInteriorColor() {
        return interiorColor;
    }

    public void setInteriorColor(String interiorColor) {
        this.interiorColor = interiorColor;
    }

    public String getDrivetrain() {
        return drivetrain;
    }

    public void setDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
    }
    public Date getBuyDate() {
        return buyDate;
    }

    public void setBuyDate(Date buyDate) {
        this.buyDate = buyDate;
    }

    public Date getSellDate() {
        return sellDate;
    }

    public void setSellDate(Date sellDate) {
        this.sellDate = sellDate;
    }
}