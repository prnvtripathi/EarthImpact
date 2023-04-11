"use client"

import '../globals.css'
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
    { id: 3, label: "Food" },
    { id: 4, label: "Miscellaneous" }
];

const CarbonFootprintCalculator = () => {
    const [carbonFootprint, setCarbonFootprint] = useState(0);
    const [currentStep, setCurrentStep] = useState(1);
    const [transportationData, setTransportationData] = useState({
        milesDriven: 0,
        mpg: 0,
        milesPerWeek: 0
    });
    const [housingData, setHousingData] = useState({
        electricityUsage: 0,
        gasUsage: 0,
        squareFootage: 0
    });
    const [foodData, setFoodData] = useState({
        meatConsumption: 0,
        dairyConsumption: 0,
        produceConsumption: 0
    });
    const [miscData, setMiscData] = useState({
        airTravel: 0,
        wasteProduction: 0
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
            transportationData.milesDriven * transportationData.milesPerWeek * 52 * 0.000825 +
            housingData.electricityUsage * 0.00000000016666667 +
            housingData.gasUsage * 0.00000000013095238 +
            housingData.squareFootage * 0.00000000028846154 +
            (foodData.meatConsumption + foodData.dairyConsumption + foodData.produceConsumption) * 0.0025 +
            miscData.airTravel * 0.000000040185 +
            miscData.wasteProduction * 0.0000000011
        );
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <label>Miles driven per week:</label>
                        <input
                            type="number"
                            value={transportationData.milesPerWeek}
                            onChange={(e) =>
                                setTransportationData({
                                    ...transportationData,
                                    milesPerWeek: e.target.value
                                })
                            }
                        />
                        <br />
                        <label>Miles per gallon:</label>
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
                        <br />
                        <label>Miles driven per year:</label>
                        <input
                            type="number"
                            value={transportationData.milesDriven}
                            onChange={(e) =>
                                setTransportationData({
                                    ...transportationData,
                                    milesDriven: e.target.value
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
                        <label>Natural gas usage in therms per year:</label>
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
                        <br />
                        <label>Square footage of your home:</label>
                        <input
                            type="number"
                            value={housingData.squareFootage}
                            onChange={(e) =>
                                setHousingData({
                                    ...housingData,
                                    squareFootage: e.target.value
                                })
                            }
                        />
                    </div>
                );
            case 3:
                return (
                    <div>
                        <label>Meat consumption in grams per day:</label>
                        <input
                            type="number"
                            value={foodData.meatConsumption}
                            onChange={(e) =>
                                setFoodData({
                                    ...foodData,
                                    meatConsumption: e.target.value
                                })
                            }
                        />
                        <br />
                        <label>Dairy consumption in grams per day:</label>
                        <input
                            type="number"
                            value={foodData.dairyConsumption}
                            onChange={(e) =>
                                setFoodData({
                                    ...foodData,
                                    dairyConsumption: e.target.value
                                })
                            }
                        />
                        <br />
                        <label>Produce consumption in grams per day:</label>
                        <input
                            type="number"
                            value={foodData.produceConsumption}
                            onChange={(e) =>
                                setFoodData({
                                    ...foodData,
                                    produceConsumption: e.target.value
                                })
                            }
                        />
                    </div>
                );
            case 4:
                return (
                    <div>
                        <label>Number of air miles flown per year:</label>
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
                        <br />
                        <label>Waste produced in pounds per week:</label>
                        <input
                            type="number"
                            value={miscData.wasteProduction}
                            onChange={(e) =>
                                setMiscData({
                                    ...miscData,
                                    wasteProduction: e.target.value
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
        <div>
            <h1>Carbon Footprint Calculator</h1>
            <p>
                Step {currentStep} of {steps.length}
            </p>
            {renderStep()}
            <button disabled={currentStep === 1} onClick={handleBack}>
                Back
            </button>
            <button onClick={handleNext}>
                {currentStep === steps.length ? "Calculate" : "Next"}
            </button>

            <h3>Your carbon footprints are: {carbonFootprint.toFixed(2)}</h3>
        </div>
    );
};

export default CarbonFootprintCalculator;