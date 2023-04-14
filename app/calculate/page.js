"use client"

import '../globals.css'
import Head from 'next/head'
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
        kilometersDriven: 0,
        mpg: 0,
        kilometersPerWeek: 0
    });
    const [housingData, setHousingData] = useState({
        electricityUsage: 0,
        gasUsage: 0,
        squareMeters: 0
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
            transportationData.kilometersDriven * transportationData.kilometersPerWeek * 52 * 0.00000211888 +
            housingData.electricityUsage * 0.00000004166667 +
            housingData.gasUsage * 0.00000003263098 +
            housingData.squareMeters * 0.00000000283333 +
            (foodData.meatConsumption + foodData.dairyConsumption + foodData.produceConsumption) * 0.0025 +
            miscData.airTravel * 0.000000064747 +
            miscData.wasteProduction * 0.00000000030103
        );
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
                        <label>Kilometeres per litre:</label>
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
                        <label>Kilometers driven per year:</label>
                        <input
                            type="number"
                            value={transportationData.kilometersDriven}
                            onChange={(e) =>
                                setTransportationData({
                                    ...transportationData,
                                    kilometersDriven: e.target.value
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
                        <br />
                        <label>Area of your home in squaremeters:</label>
                        <input
                            type="number"
                            value={housingData.squareMeters}
                            onChange={(e) =>
                                setHousingData({
                                    ...housingData,
                                    squareMeters: e.target.value
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
                        <br />
                        <label>Waste produced in kgs per week:</label>
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
        <div className={montserrat.className} style={{ textAlign: 'center' }}>
            <Head>
                <title>Calculate your carbon footprints</title>
            </Head>
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

                <h3 style={{ color: carbonFootprint < 2721 ? "green" : carbonFootprint >= 2721 && carbonFootprint < 7257.5 ? "yellow" : "red" }}>{carbonFootprint ? `Your carbon footprints are: ${carbonFootprint.toFixed(2)}` : ""}</h3>
            </div>
        </div>

    );
};

export default CarbonFootprintCalculator;