// CarDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CarDetails.css';
import carImage from './images/car.png';
import suvImage from "./images/suv.png";
import truckImage from "./images/truck.png";

function CarDetails() {
    const [car, setCar] = useState(null);
    const { vin } = useParams();
    const [showFinance, setShowFinance] = useState(false);
    const [downPayment, setDownPayment] = useState('0');
    const [tradeInValue, setTradeInValue] = useState('0');
    const [loanTerm, setLoanTerm] = useState(36);
    const [interestRate, setInterestRate] = useState('7');

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await fetch(`https://backend-osvxzffehq-ue.a.run.app/api/cars/${vin}`);
                const data = await response.json();
                setCar(data);
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        };

        fetchCar();
    }, [vin]);

    if (!car) {
        return <div>Loading...</div>;
    }
    const getCarImage = (model) => {
        switch (model) {
            case 'Model S':
                return carImage;
            case 'Model C':
                return suvImage;
            case 'Model T':
                return truckImage;
            default:
                return carImage;
        }
    };
    const baseMSRP = car.price;
    const destinationCharges = 1100;
    const taxes = baseMSRP * 0.06;
    const registration = 120;
    const totalMSRP = baseMSRP + destinationCharges + taxes + registration;

    const formatPrice = (price) => {
        return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const calculateMonthlyPayment = () => {
        const principal = totalMSRP - parseFloat(downPayment) - parseFloat(tradeInValue);
        const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
        const numberOfPayments = loanTerm;

        const monthlyPayment =
            (principal * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

        return monthlyPayment.toFixed(2);
    };


    return (
        <div className="car-details">
            <h2>{car.year}-{car.model} {car.trim}</h2>
            <div className="car-info">
                <div className="car-image">
                    <img src={getCarImage(car.model)} alt={car.model} />
                </div>
                <div className="car-specs">
                    <h3>Your Vehicle</h3>
                    <p>Engine: {car.engineType}</p>
                    <p>Trim: {car.trim}</p>
                    <p>Color: {car.color}</p>
                    <p>Range: {car.evRange}</p>
                    <p>Interior: {car.interiorColor}</p>
                    <p>Trim: {car.trim}</p>
                </div>
                <div className="pricing-summary">
                    <h3>Pricing Summary</h3>
                    <p>Base MSRP: {formatPrice(baseMSRP)}</p>
                    <p>Destination Charges: +{formatPrice(destinationCharges)}</p>
                    <p>Taxes: +{formatPrice(taxes)}</p>
                    <p>Registration: +{formatPrice(registration)}</p>
                    <p>Total MSRP: {formatPrice(totalMSRP)}</p>
                    <button className="monthly-price-btn" onClick={() => setShowFinance(true)}>
                        Click to See Monthly Price
                    </button>
                    <div className="dealer-links">
                        <a href="#">Schedule a Test Drive</a>
                        <a href="#">Dealer Website</a>
                    </div>
                </div>
            </div>

            {showFinance && (
                <div className="finance-section">
                    <h3>Payment Estimator</h3>
                    <div className="loan-details">
                        <div className="detail">
                            <p>Interest rate</p>
                            <input
                                type="number"
                                step="0.01"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                            />
                        </div>
                        <div className="detail">
                            <p>Loan term (months)</p>
                            <select value={loanTerm} onChange={(e) => setLoanTerm(parseInt(e.target.value))}>
                                <option value={36}>36</option>
                                <option value={48}>48</option>
                                <option value={60}>60</option>
                            </select>
                        </div>
                        <div className="detail">
                            <p>Down payment</p>
                            <input
                                type="number"
                                value={downPayment}
                                onChange={(e) => setDownPayment(e.target.value)}
                            />
                        </div>
                        <div className="detail">
                            <p>Trade-in value</p>
                            <input
                                type="number"
                                value={tradeInValue}
                                onChange={(e) => setTradeInValue(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="loan-estimate">
                        <h4>Your loan estimate</h4>

                            <div className="estimate-detail">
                                <p>Monthly payment</p>
                                <p>{formatPrice(parseFloat(calculateMonthlyPayment()))}</p>
                            </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CarDetails;