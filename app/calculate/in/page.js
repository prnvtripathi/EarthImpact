"use client"

import '../../globals.css'
import { Montserrat } from 'next/font/google'
import { useState } from 'react'


const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['100', '300', '400', '600', '900'],
    style: ["italic", "normal"],
})

const steps = [
    { id: 1, label: "Transportation" },
    { id: 2, label: "Housing" },
    { id: 3, label: "Miscellaneous" }
];

const CarbonFootprintCalculator = () => {
    const [carbonFootprint, setCarbonFootprint] = useState(0);
    const [currentStep, setCurrentStep] = useState(1);
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

    const handleNext = () => {
        if (currentStep === steps.length) {
            // Calculate carbon footprint
            setCarbonFootprint(calculateCarbonFootprint());
        } else {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const calculateCarbonFootprint = () => {
        // Calculate carbon footprint based on user input data
        return (
            transportationData.kilometersDriven * transportationData.kilometersPerWeek * 52 * 0.00000211888 +
            housingData.electricityUsage * 0.004166667 +
            housingData.gasUsage * 0.003263098 * 234 +
            miscData.airTravel * 0.064747
        )
    };


    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <label>Kilometers driven per week:</label>
                        <input
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
                            type="number"
                            value={transportationData.mpg}
                            onChange={(e) =>
                                setTransportationData({
                                    ...transportationData,
                                    mpg: e.target.value
                                })
                            }
                        />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <label>Electricity usage in kWh per year:</label>
                        <input
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
                            type="number"
                            value={housingData.gasUsage}
                            onChange={(e) =>
                                setHousingData({
                                    ...housingData,
                                    gasUsage: e.target.value
                                })
                            }
                        />
                    </div>
                );
            case 3:
                return (
                    <div>
                        <label>Number of air Kilometers flown per year:</label>
                        <input
                            type="number"
                            value={miscData.airTravel}
                            onChange={(e) =>
                                setMiscData({
                                    ...miscData,
                                    airTravel: e.target.value
                                })
                            }
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={montserrat.className} style={{ textAlign: 'center' }}>
            <div className='form-box'>
                <h1>Carbon Footprint Calculator</h1>
                <div className='progress-bar' style={{ width: currentStep === 1 ? "25%" : currentStep === 2 ? "50%" : currentStep === 3 ? "75%" : "100%" }}></div>
                {renderStep()}
                <button disabled={currentStep === 1} onClick={handleBack}>
                    Back
                </button>
                <button onClick={handleNext}>
                    {currentStep === steps.length ? "Calculate" : "Next"}
                </button>

                <h3 style={{ color: carbonFootprint < 272 ? "green" : carbonFootprint >= 272 && carbonFootprint < 725.75 ? "yellow" : "red" }}>{carbonFootprint ? `Your carbon footprints are: ${carbonFootprint.toFixed(2)} kg CO2` : ""}</h3>
            </div>
        </div>

    );
};

export default CarbonFootprintCalculator;