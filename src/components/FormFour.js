import React, { useState, useEffect } from "react";
import MediaQuery from 'react-responsive'


function FormFour({ onClick, onSubmit, onMouseDown }) {

    const plan = localStorage.getItem('plan');
    const yearlyPlan = localStorage.getItem("selectedPlan");
    const addon1 = localStorage.getItem('addon1');
    const addon2 = localStorage.getItem('addon2');
    const addon3 = localStorage.getItem('addon3');
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let sum = 0;
        if (plan === "Arcade") {
            sum += yearlyPlan === "true" ? 90 : 9
        }
        if (plan === "Advanced") {
            sum += yearlyPlan === "true" ? 120 : 12
        }
        if (plan === "Pro") {
            sum += yearlyPlan === "true" ? 150 : 15
        }
        if (addon1 === "true") {
            sum += yearlyPlan === "true" ? 10 : 1;
        }
        if (addon2 === "true") {
            sum += yearlyPlan === "true" ? 20 : 2;
        }
        if (addon3 === "true") {
            sum += yearlyPlan === "true" ? 20 : 2;
        }
        setTotalAmount(sum);
    }, [addon1, addon2, addon3, yearlyPlan, plan]);


    return (
        <section >
            <div className="main-container">
                <MediaQuery maxWidth={500}>
                    <div className="steps-container">
                        <span className="step ">1</span>
                        <span className="step">2</span>
                        <span className="step">3</span>
                        <span className="step active">4</span>
                    </div>
                </MediaQuery>
                <div className="info-container">
                    <MediaQuery minWidth={768}>
                        <img className="bg-img" src="images/bg-sidebar-desktop.svg" alt=".." />
                    </MediaQuery>
                    <MediaQuery minWidth={768}>
                        <div className="steps-container">
                            <div className=" steps-child-1">
                                <span className="step">1 </span>
                                <div className="child">
                                    <p className="child-1">STEP 1 </p>
                                    <span className="child-2">YOUR INFO</span>
                                </div>
                            </div>
                            <div className=" steps-child-1">
                                <span className="step ">2 </span>
                                <div className="child">
                                    <p className="child-1">STEP 2</p>
                                    <span className="child-2">SELECT PLAN</span>
                                </div>
                            </div>
                            <div className=" steps-child-1">
                                <span className="step ">3 </span>
                                <div className="child">
                                    <p className="child-1">STEP 3</p>
                                    <span className="child-2">ADD-ONS</span>
                                </div>
                            </div>
                            <div className=" steps-child-1">
                                <span className="step active">4 </span>
                                <div className="child">
                                    <p className="child-1">STEP 4</p>
                                    <span className="child-2">SUMMARY</span>
                                </div>
                            </div>

                        </div>
                    </MediaQuery>


                    <article className="personal-info">
                        <h1>Finishing up</h1>
                        <p> Double-check everything looks OK before confirming.</p>


                        <div className=" toggle-container-2">
                            <div className="plan-card">
                                <span className="margin">{plan} ({yearlyPlan === "true" ? "Yearly" : "Monthly"}) <br /><span onClick={onMouseDown} className="highlight change">Change</span>
                                </span>

                                {plan === "Arcade" && <span style={{ fontWeight: "700" }} className="addon-card">{yearlyPlan === "true" ? "$90/yr" : "$9/mo"}</span>}
                                {plan === "Advanced" && <span style={{ fontWeight: "700" }} className="addon-card">{yearlyPlan === "true" ? "$120/yr" : "$12/mo"}</span>}
                                {plan === "Pro" && <span style={{ fontWeight: "700" }} className="addon-card">{yearlyPlan === "true" ? "$150/yr" : "$15/mo"}</span>}

                            </div>

                            <hr />
                            {addon1 === "true" &&
                                <div>
                                    <span className="highlight margin">Online service</span>
                                    <span className="addon-card">{yearlyPlan === "true" ? "+$10/yr" : "+$1/mo"}</span>
                                </div>
                            }
                            {addon2 === "true" &&
                                <div>
                                    <span className="highlight margin">Larger storage</span>
                                    <span className="addon-card">{yearlyPlan === "true" ? "+$20/yr" : "+$2/mo"}</span>
                                </div>
                            }
                            {addon3 === "true" &&
                                <div>
                                    <span className="highlight margin">Customizable profile</span>
                                    <span className="addon-card">{yearlyPlan === "true" ? "+$20/yr" : "+$2/mo"}</span>
                                </div>
                            }
                        </div>
                        <div className="margin-2">
                            <span className="highlight margin">Total (per {yearlyPlan === "true" ? "year" : "month"})</span>
                            <span className="sum-total">+${totalAmount}/{yearlyPlan === "true" ? "yr" : "mo"}</span>
                        </div>
                        <MediaQuery minWidth={768}>
                            <div className="btn-container">
                                <button type="button" id="prevBtn" onClick={onClick}>Go Back</button>
                                <button style={{ backgroundColor: "hsl(243, 100%, 62%)" }} type="submit" value="submit" id="nextBtn" onClick={onSubmit}>Confirm</button>
                            </div>
                        </MediaQuery>

                    </article>
                </div>
            </div>
            <MediaQuery maxWidth={500}>
                <div className="btn-container">
                    <button type="button" id="prevBtn" onClick={onClick}>Go Back</button>
                    <button style={{ backgroundColor: "hsl(243, 100%, 62%)" }} type="submit" value="submit" id="nextBtn" onClick={onSubmit}>Confirm</button>
                </div>
            </MediaQuery>
        </section>
    )
}

export default FormFour