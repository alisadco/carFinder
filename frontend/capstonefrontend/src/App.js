import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dealerships from './pages/Dealerships';
import Car from './components/Car';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Nav from './components/Nav';
import CarDetails from './pages/CarDetails';
import Filter from './components/Filter';
import './App.css';
import ManageCars from './pages/ManageCars';
import AddDealershipAndCar from "./pages/AddDealershipAndCar";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <Nav />
                <div className="content-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dealerships" element={<Dealerships />} />
                    <Route path="/dealerships/:dealershipId" element={
                        <div className="filter-and-car">
                            <Car />
                        </div>
                    } />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/cars/:vin" element={<CarDetails />} />
                    <Route path="/add" element={<AddDealershipAndCar/>} />
                    <Route path="/manage" element={<ManageCars/>} />
                </Routes></div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;