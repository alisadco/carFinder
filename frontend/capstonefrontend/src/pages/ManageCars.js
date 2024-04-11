import React, { useState, useEffect } from 'react';
import './ManageCars.css';
import UpdateCarForm from '../components/UpdateCarForm';

function ManageCars() {
    const [dealerships, setDealerships] = useState([]);
    const [selectedDealershipId, setSelectedDealershipId] = useState('');
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [filter, setFilter] = useState({
        minPrice: 0,
        maxPrice: 1000000,
        minYear: 2000,
        maxYear: 2025,
        minMileage: 0,
        maxMileage: 300000,
        model: '',
        color: '',
        minevRange: 1,
        maxevRange: 200000,
        engineType: '',
        trim: '',
        driveTrain: '',
        returnSold: true,
    });

    useEffect(() => {
        const fetchDealerships = async () => {
            try {
                const response = await fetch('https://backend-osvxzffehq-ue.a.run.app/api/dealerships');
                const data = await response.json();
                setDealerships(data);
            } catch (error) {
                console.error('Error fetching dealerships:', error);
            }
        };

        fetchDealerships();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await fetch(`https://backend-osvxzffehq-ue.a.run.app/api/cars/filter/${selectedDealershipId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filter),
            });
            const data = await response.json();
            setCars(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching cars:', error);
            setCars([]);
        }
    };

    useEffect(() => {
        if (selectedDealershipId) {
            fetchCars();
        } else {
            setCars([]);
        }
    }, [selectedDealershipId, filter]);

    const handleDealershipChange = (e) => {
        setSelectedDealershipId(e.target.value);
    };

    const handleDeleteCar = async (vin) => {
        try {
            await fetch(`https://backend-osvxzffehq-ue.a.run.app/api/cars/sell/${vin}`, {
                method: 'POST',
            });
            fetchCars(); // Fetch updated car data after selling a car
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };

    const handleUpdateCar = (car) => {
        setSelectedCar(car);
    };

    const handleUpdateSubmit = (updatedCar) => {
        setCars(cars.map((car) => (car.vin === updatedCar.vin ? updatedCar : car)));
        setSelectedCar(null);
    };

    const handleUpdateCancel = () => {
        setSelectedCar(null);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value,
        }));
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const calculateDaysSinceBuyDate = (buyDate) => {
        const currentDate = new Date();
        const purchaseDate = new Date(buyDate);
        const timeDiff = currentDate.getTime() - purchaseDate.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return daysDiff;
    };

    const soldCars = cars.filter((car) => car.sellDate);
    const unsoldCars = cars.filter((car) => !car.sellDate);

    return (
        <div className="manage-cars">
            <h2>Manage Cars</h2>
            <div>
                <label htmlFor="dealershipSelect">Select Dealership:</label>
                <select
                    id="dealershipSelect"
                    value={selectedDealershipId}
                    onChange={handleDealershipChange}
                >
                    <option value="">Choose a dealership</option>
                    {dealerships.map((dealership) => (
                        <option key={dealership.id} value={dealership.id}>
                            {dealership.name}
                        </option>
                    ))}
                </select>
            </div>
            {selectedCar && (
                <UpdateCarForm
                    car={selectedCar}
                    dealershipId={selectedDealershipId}
                    onUpdate={handleUpdateSubmit}
                    onCancel={handleUpdateCancel}
                />
            )}
            {selectedDealershipId && (
                <div>
                    <h3>Filter Cars</h3>
                    <div>
                        <label>
                            Min Price:
                            <input
                                type="number"
                                name="minPrice"
                                value={filter.minPrice}
                                onChange={handleFilterChange}
                            />
                        </label>
                        <label>
                            Max Price:
                            <input
                                type="number"
                                name="maxPrice"
                                value={filter.maxPrice}
                                onChange={handleFilterChange}
                            />
                        </label>
                        <label>
                            Min Year:
                            <input
                                type="number"
                                name="minYear"
                                value={filter.minYear}
                                onChange={handleFilterChange}
                            />
                        </label>
                        <label>
                            Max Year:
                            <input
                                type="number"
                                name="maxYear"
                                value={filter.maxYear}
                                onChange={handleFilterChange}
                            />
                        </label>
                        {/* Add more filter inputs as needed */}
                    </div>
                    <h3>Sold Cars</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Model</th>
                            <th>Color</th>
                            <th>Year</th>
                            <th>Buy Date</th>
                            <th>Sell Date</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {soldCars.map((car) => (
                            <tr key={car.vin}>
                                <td>{car.vin}</td>
                                <td>{car.model}</td>
                                <td>{car.color}</td>
                                <td>{car.year}</td>
                                <td>{formatDate(car.buyDate)}</td>
                                <td>{formatDate(car.sellDate)}</td>
                                <td>${car.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <h3>Unsold Cars</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Model</th>
                            <th>Color</th>
                            <th>Year</th>
                            <th>Buy Date</th>
                            <th>Days Since Buy Date</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {unsoldCars.map((car) => (
                            <tr key={car.vin}>
                                <td>{car.vin}</td>
                                <td>{car.model}</td>
                                <td>{car.color}</td>
                                <td>{car.year}</td>
                                <td>{formatDate(car.buyDate)}</td>
                                <td>{calculateDaysSinceBuyDate(car.buyDate)}</td>
                                <td>${car.price}</td>
                                <td>
                                    <button onClick={() => handleDeleteCar(car.vin)}>Sell</button>
                                    <button onClick={() => handleUpdateCar(car)}>Update</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ManageCars;