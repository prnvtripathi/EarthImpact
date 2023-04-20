"use client"

import { useState } from "react";

const Form = () => {
    const [transportationData, setTransportationData] = useState({
        kilometersDriven: 0,
        mpg: 0,
    });
    const [housingData, setHousingData] = useState({
        electricityUsage: 0,
        gasUsage: 0,
    });
    const [miscData, setMiscData] = useState({
        airTravel: 0,
    });

    const handleSubmit = () => {
        // converting input to JSON
        const form = document.getElementById("cf-form");
        const data = new FormData(form);
        const json = JSON.stringify(Object.fromEntries(data.entries()));

        console.log(json);

        // sending JSON to server
    }
    
    return (
        <>
            <form id="cf-form">
                <label>Kilometers driven per week:</label>
                <input
                    name="kmpw"
                    type="number"
                    value={transportationData.kilometersPerWeek}
                    onChange={(e) =>
                        setTransportationData({
                            ...transportationData,
                            kilometersPerWeek: e.target.value
                        })
                    }
                />
                <br />
                <label>Mileage of your car:</label>
                <input
                    name="mileage"
                    type="number"
                    value={transportationData.mpg}
                    onChange={(e) =>
                        setTransportationData({
                            ...transportationData,
                            mpg: e.target.value
                        })
                    }
                />
                <br />
                <label>Electricity usage in kWh per year:</label>
                <input
                    name="electricity"
                    type="number"
                    value={housingData.electricityUsage}
                    onChange={(e) =>
                        setHousingData({
                            ...housingData,
                            electricityUsage: e.target.value
                        })
                    }
                />
                <br />
                <label>Natural gas usage in units per year:</label>
                <input
                    name="gas"
                    type="number"
                    value={housingData.gasUsage}
                    onChange={(e) =>
                        setHousingData({
                            ...housingData,
                            gasUsage: e.target.value
                        })
                    }
                />
                <br />
                <label>Number of air Kilometers flown per year:</label>
                <input
                    name="aeroplanekms"
                    type="number"
                    value={miscData.airTravel}
                    onChange={(e) =>
                        setMiscData({
                            ...miscData,
                            airTravel: e.target.value
                        })
                    }
                />


            </form>

            <button onClick={handleSubmit}>
                Calculate
            </button>
        </>
    )
}

export default Form