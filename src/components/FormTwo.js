import React from "react";
import MediaQuery from 'react-responsive'


function FormTwo({ onClick, onMouseDown, onMouseUp, checked, onChange, arcSelected, advSelected, proSelected }) {

    const yearlyPlan = localStorage.getItem("selectedPlan");
    const plan = localStorage.getItem("plan");


    return (
        <section >
            <div className="main-container">
                <MediaQuery maxWidth={500}>
                    <div className="steps-container">
                        <span className="step ">1</span>
                        <span className="step active">2</span>
                        <span className="step">3</span>
                        <span className="step">4</span>
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
                                <span className="step active">2 </span>
                                <div className="child">
                                    <p className="child-1">STEP 2</p>
                                    <span className="child-2">SELECT PLAN</span>
                                </div>
                            </div>
                            <div className=" steps-child-1">
                                <span className="step">3 </span>
                                <div className="child">
                                    <p className="child-1">STEP 3</p>
                                    <span className="child-2">ADD-ONS</span>
                                </div>
                            </div>
                            <div className=" steps-child-1">
                                <span className="step">4 </span>
                                <div className="child">
                                    <p className="child-1">STEP 4</p>
                                    <span className="child-2">SUMMARY</span>
                                </div>
                            </div>

                        </div>
                    </MediaQuery>



                    <article className="personal-info">
                        <h1>Select your plan</h1>
                        <p> You have the option of monthly or yearly billing.</p>

                        <form >
                            <div className="parent-container">
                                <div onMouseUp={onMouseUp} className={`tab card ${plan === "Arcade" ? "active" : ""}`} onClick={arcSelected}>
                                    <img className="arcade" src="images/icon-arcade.svg" alt="img" />
                                    <h3 className="h-3">Arcade</h3>
                                    {yearlyPlan === "true" ?
                                        <div className="h-3">
                                            <span className="price">$90/yr</span><br />
                                            <span className="yearly-price"> 2 months free</span>
                                        </div> :
                                        <span className="price h-3">$9/mo</span>
                                    }
                                </div>
                                <div onMouseUp={onMouseUp} className={`tab card ${plan === "Advanced" ? "active" : ""}`} onClick={advSelected}>
                                    <img className="arcade" src="images/icon-advanced.svg" alt="img" />
                                    <h3 className="h-3">Advanced</h3>
                                    {yearlyPlan === "true" ?
                                        <div className="h-3">
                                            <span className="price">$120/yr</span><br />
                                            <span className="yearly-price"> 2 months free</span>
                                        </div> :
                                        <span className="price h-3">$12/mo</span>
                                    }

                                </div>
                                <div onMouseUp={onMouseUp} className={`tab card ${plan === "Pro" ? "active" : ""}`} onClick={proSelected}>
                                    <img className="arcade" src="images/icon-pro.svg" alt="img" />
                                    <h3 className="h-3">Pro</h3>
                                    {yearlyPlan === "true" ?
                                        <div className="h-3">
                                            <span className="price">$150/yr</span><br />
                                            <span className="yearly-price"> 2 months free</span>
                                        </div> :
                                        <span className="price h-3">$15/mo</span>
                                    }
                                </div>
                            </div>
                            <div className=" toggle-container">
                                <span className={`plan ${yearlyPlan === "false" ? "active-plan" : ""}`}>Monthly</span>

                                <label className="switch">
                                    <input checked={checked} onChange={onChange} type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                                <span className={`plan ${yearlyPlan === "true" ? "active-plan" : ""}`}>Yearly</span>


                            </div>

                        </form>
                        <MediaQuery minWidth={768}>
                            <div className="btn-container">
                                <button type="button" id="prevBtn" onClick={onClick}>Go Back</button>
                                <button type="button" id="nextBtn" onMouseDown={onMouseDown}>Next Step</button>
                            </div>
                        </MediaQuery>

                    </article>
                </div>
            </div>
            <MediaQuery maxWidth={500}>
                <div className="btn-container">
                    <button type="button" id="prevBtn" onClick={onClick}>Go Back</button>
                    <button type="button" id="nextBtn" onMouseDown={onMouseDown}>Next Step</button>
                </div>
            </MediaQuery>
        </section>

    )
}

export default FormTwo