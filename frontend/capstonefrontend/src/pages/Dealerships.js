// Dealership.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dealership.css';

function Dealership() {
    const [dealerships, setDealerships] = useState([]);

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

    return (
        <div className="dealership-list">
            <h1>Dealerships</h1>
            {dealerships.map((dealership) => (
                <Link
                    key={dealership.id}
                    to={`/dealerships/${dealership.id}`}
                    className="dealership-item"
                >
                    <div className="dealership-info">
                        <h2>{dealership.name}</h2>
                        <p>{dealership.location}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Dealership;