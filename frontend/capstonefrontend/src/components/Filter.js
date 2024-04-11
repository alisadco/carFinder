import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';

const Filter = ({ onFilter }) => {
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 100000,
        minYear: 2000,
        maxYear: 2025,
        isNew: false,
        isUsed: false,
        minMileage: 0,
        maxMileage: 300000,
        model: '',
        color: '',
        minevRange: 150,
        maxevRange: 600,
        engineType: '',
        trim: '',
        driveTrain: '',
        interiorColor: '', // Add interiorColor filter
    });

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
        onFilter({
            ...filters,
            [filterName]: value,
        });
    };

    const models = ['Model C', 'Model S', 'Model T'];
    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Black'];
    const engineTypes = ['Single motor', 'Double motor', 'Quad motor'];
    const trims = ['Lx', 'LxS', 'Sx'];
    const driveTrains = ['AWD', 'FWD', 'RWD', '4WD'];
    const interiorColors = ['Black', 'Blue', 'Gray', 'Red'];

    return (
        <div className="filter-component">
            <h3>Filter Cars</h3>

            <div className="filter-section">
                <h4>Price</h4>
                <div className="price-slider">
                    <Slider
                        range
                        min={0}
                        max={100000}
                        value={[filters.minPrice, filters.maxPrice]}
                        onChange={([min, max]) => {
                            handleFilterChange('minPrice', min);
                            handleFilterChange('maxPrice', max);
                        }}
                    />
                    <div className="price-range">
                        <span>Min: ${filters.minPrice}</span>
                        <span>Max: ${filters.maxPrice}</span>
                    </div>
                </div>
            </div>

            <div className="filter-section">
                <h4>Year</h4>
                <div className="year-slider">
                    <Slider
                        range
                        min={2000}
                        max={2025}
                        value={[filters.minYear, filters.maxYear]}
                        onChange={([min, max]) => {
                            handleFilterChange('minYear', min);
                            handleFilterChange('maxYear', max);
                        }}
                    />
                    <div className="year-range">
                        <span>Min: {filters.minYear}</span>
                        <span>Max: {filters.maxYear}</span>
                    </div>
                </div>
            </div>

            <div className="filter-section">
                <h4>New/Used</h4>
                <label>
                    <input
                        type="checkbox"
                        checked={filters.isNew}
                        onChange={(e) => handleFilterChange('isNew', e.target.checked)}
                    />
                    New
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={filters.isUsed}
                        onChange={(e) => handleFilterChange('isUsed', e.target.checked)}
                    />
                    Used
                </label>
            </div>

            <div className="filter-section">
                <h4>Mileage</h4>
                <div className="mileage-slider">
                    <Slider
                        range
                        min={0}
                        max={300000}
                        value={[filters.minMileage, filters.maxMileage]}
                        onChange={([min, max]) => {
                            handleFilterChange('minMileage', min);
                            handleFilterChange('maxMileage', max);
                        }}
                    />
                    <div className="mileage-range">
                        <span>Min: {filters.minMileage}</span>
                        <span>Max: {filters.maxMileage}</span>
                    </div>
                </div>
            </div>

            <div className="filter-section">
                <h4>Model</h4>
                <select
                    value={filters.model}
                    onChange={(e) => handleFilterChange('model', e.target.value)}
                >
                    <option value="">All Models</option>
                    {models.map((model) => (
                        <option key={model} value={model}>
                            {model}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-section">
                <h4>Color</h4>
                <select
                    value={filters.color}
                    onChange={(e) => handleFilterChange('color', e.target.value)}
                >
                    <option value="">All Colors</option>
                    {colors.map((color) => (
                        <option key={color} value={color.toLowerCase()}>
                            {color}
                        </option>
                    ))}
                </select>
            </div>
            <div className="filter-section">
                <h4>Interior Color</h4>
                <select
                    value={filters.interiorColor}
                    onChange={(e) => handleFilterChange('interiorColor', e.target.value)}
                >
                    <option value="">All Interior Colors</option>
                    {interiorColors.map((interiorColor) => (
                        <option key={interiorColor} value={interiorColor.toLowerCase()}>
                            {interiorColor}
                        </option>
                    ))}
                </select>
            </div>
            <div className="filter-section">
                <h4>EV Range</h4>
                <div className="ev-range-slider">
                    <Slider
                        range
                        min={150}
                        max={600}
                        value={[filters.minevRange, filters.maxevRange]}
                        onChange={([min, max]) => {
                            handleFilterChange('minevRange', min);
                            handleFilterChange('maxevRange', max);
                        }}
                    />
                    <div className="ev-range-values">
                        <span>Min: {filters.minevRange}</span>
                        <span>Max: {filters.maxevRange}</span>
                    </div>
                </div>
            </div>

            <div className="filter-section">
                <h4>Engine Type</h4>
                <select
                    value={filters.engineType}
                    onChange={(e) => handleFilterChange('engineType', e.target.value)}
                >
                    <option value="">All Engine Types</option>
                    {engineTypes.map((engineType) => (
                        <option key={engineType} value={engineType.toLowerCase()}>
                            {engineType}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-section">
                <h4>Trim</h4>
                <select
                    value={filters.trim}
                    onChange={(e) => handleFilterChange('trim', e.target.value)}
                >
                    <option value="">All Trims</option>
                    {trims.map((trim) => (
                        <option key={trim} value={trim.toLowerCase()}>
                            {trim}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-section">
                <h4>Drive Train</h4>
                <select
                    value={filters.driveTrain}
                    onChange={(e) => handleFilterChange('driveTrain', e.target.value)}
                >
                    <option value="">All Drive Trains</option>
                    {driveTrains.map((driveTrain) => (
                        <option key={driveTrain} value={driveTrain.toLowerCase()}>
                            {driveTrain}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filter;