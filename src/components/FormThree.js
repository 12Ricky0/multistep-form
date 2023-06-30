import React from "react";
import MediaQuery from 'react-responsive'

function FormThree({ onClick, onMouseDown, custProfile, onlineService, largStorage, osChecked, lsChecked, cpChecked }) {
    const yearlyPlan = localStorage.getItem("selectedPlan");
    const addon1 = localStorage.getItem("addon1");
    const addon2 = localStorage.getItem("addon2");
    const addon3 = localStorage.getItem("addon3");

    return (
        <section >
            <div className="main-container">
                <MediaQuery maxWidth={500}>
                    <div className="steps-container">
                        <span className="step ">1</span>
                        <span className="step">2</span>
                        <span className="step active">3</span>
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
                                <span className="step ">2 </span>
                                <div className="child">
                                    <p className="child-1">STEP 2</p>
                                    <span className="child-2">SELECT PLAN</span>
                                </div>
                            </div>
                            <div className=" steps-child-1">
                                <span className="step active">3 </span>
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
                        <h1>Pick add-ons</h1>
                        <p> Add-ons help enhance your gaming experience.</p>

                        <form>
                            <div className={`tab card card-container ${addon1 === "true" && "active"} `} >
                                <div className="p-container">
                                    <input className="checkbox" id="myCheckbox" type="checkbox" onChange={onlineService} checked={osChecked} />
                                    <h3 className="" style={{ fontSize: "15px" }}>Online service <br /> <span className="highlight">Access to multiplayer games</span></h3>
                                </div>
                                {yearlyPlan === "false" ? <span className="p-2 price"> +$1/mo </span> : <span className="p-2 price"> +$10/yr</span>}
                            </div>
                            <div className={`tab card card-container ${addon2 === "true" && "active"} `}>
                                <div className="p-container">
                                    <input className="checkbox" type="checkbox" onChange={largStorage} checked={lsChecked} />
                                    <h3 className="" style={{ fontSize: "15px" }}>Larger storage <br /><span className="highlight">  Extra 1TB of cloud save</span></h3>
                                </div>
                                {yearlyPlan === "false" ? <span className="p-2 price"> +$2/mo</span> : <span className="p-2 price"> +$20/yr</span>}
                            </div>
                            <div className={`tab card card-container ${addon3 === "true" && "active"} `}>
                                <div className="p-container">
                                    <input className="checkbox" type="checkbox" onChange={custProfile} checked={cpChecked} />
                                    <h3 className="" style={{ fontSize: "15px" }}> Customizable Profile<br /><span className="highlight"> Custom theme on your profile</span></h3>
                                </div>
                                {yearlyPlan === "false" ? <span className="p-2 price"> +$2/mo</span> : <span className="p-2 price"> +$20/yr</span>}
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

export default FormThree