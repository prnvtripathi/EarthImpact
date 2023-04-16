"use client"

import { useState } from 'react';
import { Montserrat } from 'next/font/google';
import { FaDiscord } from 'react-icons/fa';

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['100', '300', '400', '600', '900'],
    style: ["italic", "normal"],
});

const CarbonFootprint = () => {
    const [emissions, setEmissions] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        const energyConsumption = event.target.elements.energyConsumption.valueAsNumber;
        const fuelConsumption = event.target.elements.fuelConsumption.valueAsNumber;
        const numEmployees = event.target.elements.numEmployees.valueAsNumber;
        const productionVolume = event.target.elements.productionVolume.valueAsNumber;
        const distanceTraveled = event.target.elements.distanceTraveled.valueAsNumber;

        // Conversion factors for calculating carbon emissions
        const ENERGY_CONVERSION_FACTOR = 0.5;
        const FUEL_CONVERSION_FACTOR = 2.5;
        const EMPLOYEE_EMISSIONS_FACTOR = 5;
        const PRODUCTION_EMISSIONS_FACTOR = 0.2;
        const TRANSPORTATION_EMISSIONS_FACTOR = 0.1;
        const VEHICLE_EFFICIENCY = 0.1;

        // Calculate carbon emissions from energy consumption
        const energyEmissions = energyConsumption * ENERGY_CONVERSION_FACTOR;

        // Calculate carbon emissions from fuel consumption
        const fuelEmissions = fuelConsumption * FUEL_CONVERSION_FACTOR;

        // Calculate carbon emissions from employees
        const employeeEmissions = numEmployees * EMPLOYEE_EMISSIONS_FACTOR;

        // Calculate carbon emissions from production volume
        const productionEmissions = productionVolume * PRODUCTION_EMISSIONS_FACTOR;

        // Calculate carbon emissions from transportation
        const transportationEmissions = distanceTraveled * VEHICLE_EFFICIENCY * TRANSPORTATION_EMISSIONS_FACTOR;

        // Calculate total carbon emissions
        const totalEmissions = energyEmissions + fuelEmissions + employeeEmissions + productionEmissions + transportationEmissions;

        setEmissions(totalEmissions);
    };

    return (
        <div className={montserrat.className}>
            <form onSubmit={handleSubmit} className='form-box'>
                <h1 className='industry-head'>Carbon Footprint Calculator</h1>
                <hr />
                <label
                    htmlFor="energyConsumption"
                    title="The total energy consumption of the company's offices, warehouses, and data centers for a year.">
                    Energy consumption (kWh):
                    <input type="number" id="energyConsumption" name="energyConsumption" required />
                </label>
                <br />
                <label
                    htmlFor="fuelConsumption"
                    title="The total fuel consumption of the company's vehicles and shipping partners for a year.">
                    Fuel consumption (liters):
                    <input type="number" id="fuelConsumption" name="fuelConsumption" required />
                </label>
                <br />
                <label
                    htmlFor="numEmployees"
                    title="The average number of employees over the year.">
                    Number of employees:
                    <input type="number" id="numEmployees" name="numEmployees" required />
                </label>
                <br />
                <label
                    htmlFor="productionVolume"
                    title="The total number of products sold and shipped by the company for a year.">
                    Production volume (units):
                    <input type="number" id="productionVolume" name="productionVolume" required />
                </label>
                <br />
                <label
                    htmlFor="distanceTraveled"
                    title="The total distance traveled by the company's vehicles and shipping partners for a year.">
                    Distance traveled in transportation (km):
                    <input type="number" id="distanceTraveled" name="distanceTraveled" required />
                </label>
                <br />
                <button type="submit" >Calculate</button>
                <h3 style={{ color: emissions < 272 ? "green" : emissions >= 272 && emissions < 725.75 ? "yellow" : "red" }}>{emissions ? `Your carbon footprints are: ${emissions.toFixed(2)} kg CO2` : ""}</h3>
            </form>
            <Link href='https://bit.ly/3GOCHEK'>
                <div className='discord-btn' style={emissions ? { opacity: 1 } : { opacity: 0 }}>
                    <FaDiscord />Link our Discord bot in your servers
                </div>
            </Link>
        </div >
    );
};

export default CarbonFootprint;
