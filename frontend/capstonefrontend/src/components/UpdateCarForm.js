import React, { useState } from 'react';
import './UpdateCarForm.css';

function UpdateCarForm({ car, dealershipId, onUpdate, onCancel }) {
    const [updatedCar, setUpdatedCar] = useState({
        model: car.model,
        color: car.color,
        year: car.year,
        price: car.price,
        mileage: car.mileage,
        isNew: car.isNew,
        evRange: car.evRange,
        engineType: car.engineType,
        trim: car.trim,
        drivetrain: car.drivetrain,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setUpdatedCar((prevCar) => ({
            ...prevCar,
            [name]: newValue,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(`https://backend-osvxzffehq-ue.a.run.app/api/cars/${dealershipId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...updatedCar, vin: car.vin }),
            });
            onUpdate({ ...updatedCar, vin: car.vin });
        } catch (error) {
            console.error('Error updating car:', error);
        }
    };

    return (
        <div className="update-car-form">
            <h3>Update Car</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="model">Model:</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        value={updatedCar.model}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="color">Color:</label>
                    <input
                        type="text"
                        id="color"
                        name="color"
                        value={updatedCar.color}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        value={updatedCar.year}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={updatedCar.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mileage">Mileage:</label>
                    <input
                        type="number"
                        id="mileage"
                        name="mileage"
                        value={updatedCar.mileage}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="isNew">Is New:</label>
                    <input
                        type="checkbox"
                        id="isNew"
                        name="isNew"
                        checked={updatedCar.isNew}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="evRange">EV Range:</label>
                    <input
                        type="number"
                        id="evRange"
                        name="evRange"
                        value={updatedCar.evRange}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="engineType">Engine Type:</label>
                    <input
                        type="text"
                        id="engineType"
                        name="engineType"
                        value={updatedCar.engineType}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="trim">Trim:</label>
                    <input
                        type="text"
                        id="trim"
                        name="trim"
                        value={updatedCar.trim}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="drivetrain">Drivetrain:</label>
                    <input
                        type="text"
                        id="drivetrain"
                        name="drivetrain"
                        value={updatedCar.drivetrain}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type="submit">Update</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateCarForm;