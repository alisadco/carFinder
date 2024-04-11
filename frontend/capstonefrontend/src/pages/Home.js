// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import carImage from './images/car.png';
import suvImage from './images/suv.png';
import truckImage from './images/truck.png';

function Home() {
    return (
        <div className="home">
            <div className="background-images">
                <img src={carImage} alt="Car" />
                <img src={suvImage} alt="SUV" />
                <img src={truckImage} alt="Truck" />
            </div>
            <div className="content">
                <h1>Time to Step up Your EV Game</h1>
                <div className="buttons">
                    <Link to="/dealerships">
                        <button className="bronco-btn">Find Your EV</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;