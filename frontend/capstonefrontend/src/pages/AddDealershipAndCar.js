import React, { useState, useEffect } from 'react';
import './AddDealershipAndCar.css';

function AddDealershipAndCar() {
    const [dealershipName, setDealershipName] = useState('');
    const [dealershipLocation, setDealershipLocation] = useState('');
    const [carVin, setCarVin] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carColor, setCarColor] = useState('');
    const [carInteriorColor, setCarInteriorColor] = useState('');
    const [carYear, setCarYear] = useState('');
    const [carPrice, setCarPrice] = useState('');
    const [carMileage, setCarMileage] = useState('');
    const [carIsNew, setCarIsNew] = useState(false);
    const [carEvRange, setCarEvRange] = useState('');
    const [carEngineType, setCarEngineType] = useState('');
    const [carTrim, setCarTrim] = useState('');
    const [carDrivetrain, setCarDrivetrain] = useState('');
    const [dealerships, setDealerships] = useState([]);
    const [selectedDealershipId, setSelectedDealershipId] = useState('');
    const [dealershipAdded, setDealershipAdded] = useState(false);
    const [carAdded, setCarAdded] = useState(false);

    const modelOptions = ['Model T', 'Model S', 'Model C'];
    const colorOptions = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Black'];
    const engineTypeOptions = ['Single', 'Double', 'Quad'];
    const trimOptions = ['Lx', 'LxS', 'Sx'];
    const drivetrainOptions = ['FWD', 'RWD', 'AWD', '4WD'];
    const interiorColorOptions = ['Black', 'Blue', 'Red', 'Gray'];

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

    const handleDealershipSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://backend-osvxzffehq-ue.a.run.app/api/dealerships', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: dealershipName,
                    location: dealershipLocation,
                }),
            });
            if (response.ok) {
                // Dealership created successfully
                setDealershipName('');
                setDealershipLocation('');
                // Fetch updated list of dealerships
                const dealershipsResponse = await fetch('https://backend-osvxzffehq-ue.a.run.app/api/dealerships');
                const dealershipsData = await dealershipsResponse.json();
                setDealerships(dealershipsData);
                setDealershipAdded(true);
                setTimeout(() => {
                    setDealershipAdded(false);
                }, 3000);
            } else {
                // Handle error case
            }
        } catch (error) {
            console.error('Error creating dealership:', error);
        }
    };

    const handleCarSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://backend-osvxzffehq-ue.a.run.app/api/cars/${selectedDealershipId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    vin: carVin,
                    model: carModel,
                    color: carColor,
                    interiorColor: carInteriorColor,
                    year: carYear,
                    price: carPrice,
                    mileage: carMileage,
                    isNew: carIsNew,
                    evRange: carEvRange,
                    engineType: carEngineType,
                    trim: carTrim,
                    drivetrain: carDrivetrain,
                }),
            });
            if (response.ok) {
                // Car created successfully
                setCarVin('');
                setCarModel('');
                setCarColor('');
                setCarInteriorColor('');
                setCarYear('');
                setCarPrice('');
                setCarMileage('');
                setCarIsNew(false);
                setCarEvRange('');
                setCarEngineType('');
                setCarTrim('');
                setCarDrivetrain('');
                setSelectedDealershipId('');
                setCarAdded(true);
                setTimeout(() => {
                    setCarAdded(false);
                }, 3000);
            } else {
                // Handle error case
            }
        } catch (error) {
            console.error('Error creating car:', error);
        }
    };

    return (
        <div className="add-dealership-and-car">
            <h2>Add Dealership</h2>
            {dealershipAdded && (
                <p className="success-message">Dealership added successfully!</p>
            )}
            <form onSubmit={handleDealershipSubmit}>
                <div>
                    <label htmlFor="dealershipName">Name:</label>
                    <input
                        type="text"
                        id="dealershipName"
                        value={dealershipName}
                        onChange={(e) => setDealershipName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dealershipLocation">Location:</label>
                    <input
                        type="text"
                        id="dealershipLocation"
                        value={dealershipLocation}
                        onChange={(e) => setDealershipLocation(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Dealership</button>
            </form>

            <h2>Add Car</h2>
            {carAdded && (
                <p className="success-message">Car added successfully!</p>
            )}
            <form onSubmit={handleCarSubmit}>
                <div>
                    <label htmlFor="dealershipSelect">Dealership:</label>
                    <select
                        id="dealershipSelect"
                        value={selectedDealershipId}
                        onChange={(e) => setSelectedDealershipId(e.target.value)}
                        required
                    >
                        <option value="">Select a dealership</option>
                        {dealerships.map((dealership) => (
                            <option key={dealership.id} value={dealership.id}>
                                {dealership.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="carVin">VIN:</label>
                    <input
                        type="text"
                        id="carVin"
                        value={carVin}
                        onChange={(e) => setCarVin(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="carModel">Model:</label>
                    <select
                        id="carModel"
                        value={carModel}
                        onChange={(e) => setCarModel(e.target.value)}
                        required
                    >
                        <option value="">Select a model</option>
                        {modelOptions.map((model) => (
                            <option key={model} value={model}>
                                {model}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="carColor">Color:</label>
                    <select
                        id="carColor"
                        value={carColor}
                        onChange={(e) => setCarColor(e.target.value)}
                        required
                    >
                        <option value="">Select a color</option>
                        {colorOptions.map((color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="carInteriorColor">Interior Color:</label>
                    <select
                        id="carInteriorColor"
                        value={carInteriorColor}
                        onChange={(e) => setCarInteriorColor(e.target.value)}
                        required
                    >
                        <option value="">Select an interior color</option>
                        {interiorColorOptions.map((interiorColor) => (
                            <option key={interiorColor} value={interiorColor}>
                                {interiorColor}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="carYear">Year:</label>
                    <input
                        type="number"
                        id="carYear"
                        value={carYear}
                        onChange={(e) => setCarYear(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="carPrice">Price:</label>
                    <input
                        type="number"
                        id="carPrice"
                        value={carPrice}
                        onChange={(e) => setCarPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="carMileage">Mileage:</label>
                    <input
                        type="number"
                        id="carMileage"
                        value={carMileage}
                        onChange={(e) => setCarMileage(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="carIsNew">Is New:</label>
                    <input
                        type="checkbox"
                        id="carIsNew"
                        checked={carIsNew}
                        onChange={(e) => setCarIsNew(e.target.checked)}
                    />
                </div>
                <div>
                    <label htmlFor="carEvRange">EV Range:</label>
                    <input
                        type="number"
                        id="carEvRange"
                        value={carEvRange}
                        onChange={(e) => setCarEvRange(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="carEngineType">Engine Type:</label>
                    <select
                        id="carEngineType"
                        value={carEngineType}
                        onChange={(e) => setCarEngineType(e.target.value)}
                        required
                    >
                        <option value="">Select an engine type</option>
                        {engineTypeOptions.map((engineType) => (
                            <option key={engineType} value={engineType}>
                                {engineType}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="carTrim">Trim:</label>
                    <select
                        id="carTrim"
                        value={carTrim}
                        onChange={(e) => setCarTrim(e.target.value)}
                        required
                    >
                        <option value="">Select a trim</option>
                        {trimOptions.map((trim) => (
                            <option key={trim} value={trim}>
                                {trim}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="carDrivetrain">Drivetrain:</label>
                    <select
                        id="carDrivetrain"
                        value={carDrivetrain}
                        onChange={(e) => setCarDrivetrain(e.target.value)}
                        required
                    >
                        <option value="">Select a drivetrain</option>
                        {drivetrainOptions.map((drivetrain) => (
                            <option key={drivetrain} value={drivetrain}>
                                {drivetrain}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add Car</button>
            </form>
        </div>
    );
}

export default AddDealershipAndCar;