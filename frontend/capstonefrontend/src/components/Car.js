import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Car.css';
import Filter from "./Filter.js";

import carImage from './images/car.png';
import suvImage from './images/suv.png';
import truckImage from './images/truck.png';

function Car() {
    const [cars, setCars] = useState([]);
    const { dealershipId } = useParams();

    useEffect(() => {

        const defaultFilters = {};

        handleFilter(defaultFilters);
    }, [dealershipId]);
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

    const handleFilter = (filters) => {
        const fetchCars = async () => {
            try {
                const response = await fetch(`https://backend-osvxzffehq-ue.a.run.app/api/cars/filter/${dealershipId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(filters),
                });
                const data = await response.json();
                setCars(data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    };



    return (
        <div className="car-container">
            <div className="filter-container">
                <Filter onFilter={handleFilter} />
            </div>
            <div className="recently-viewed-container">
                <h3>Matching cars</h3>
                <div className="cars-container">
                    {cars.map((car, index) => (
                        <Card key={index} className="car-card">
                            <Card.Img variant="top" src={getCarImage(car.model)}/>
                            <Card.Body>
                                <Card.Title>{car.model}</Card.Title>
                                <Card.Text>
                                    <p>{car.year} Select</p>
                                    <p>Est. Net Price: ${car.price}</p>
                                    <p>VIN: {car.vin}</p>
                                </Card.Text>
                                <Button variant="primary" as={Link} to={`/cars/${car.vin}`}>View Details</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Car;