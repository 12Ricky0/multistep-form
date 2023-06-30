import React from "react";
import MediaQuery from 'react-responsive'


function FormOne({ onChange, onClick, name, email, phone, nameError, phoneError, emailError }) {


    return (
        <section >
            <div className="main-container">
                <MediaQuery maxWidth={500}>
                    <div className="steps-container">
                        <span className="step active">1</span>
                        <span className="step">2</span>
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
                                <span className="step active">1 </span>
                                <div className="child">
                                    <p className="child-1">STEP 1 </p>
                                    <span className="child-2">YOUR INFO</span>
                                </div>
                            </div>
                            <div className=" steps-child-1">
                                <span className="step">2 </span>
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
                        <h1>Personal info</h1>
                        <p> Please provide your name, email address, and phone number.</p>

                        <form name="myForm">
                            <div className="tab">
                                <p className="p">Name <span className="validation">{nameError}</span><input className={`input ${nameError && nameError.length > 1 ? "input-error" : ""}`} name="name" type="text" placeholder="e.g. Stephen King" onChange={onChange} value={name} /></p>
                                <p className="p">Email Address <span className="validation">{emailError}</span><input className={`input ${emailError && emailError.length > 1 ? "input-error" : ""}`} name="email" placeholder="e.g. stephenking@lorem.com" onChange={onChange} value={email} /></p>
                                <p className="p">Phone Number <span className="validation">{phoneError}</span><input className={`input ${phoneError && phoneError.length > 1 ? "input-error" : ""}`} name="phone" placeholder=" e.g. +1 234 567 890" onChange={onChange} value={phone} /></p>
                            </div>

                        </form>
                        <MediaQuery minWidth={768}>
                            <div className="btn-container">
                                <button style={{ visibility: "hidden" }} type="button" id="prevBtn" onClick={onClick}>Go Back</button>

                                <button type="button" id="nextBtn" onClick={onClick}>Next Step</button>
                            </div>
                        </MediaQuery>

                    </article>
                </div>
            </div>
            <MediaQuery maxWidth={500}>
                <div className="btn-container">
                    <button style={{ visibility: "hidden" }} type="button" id="prevBtn" onClick={onClick}>Go Back</button>

                    <button type="button" id="nextBtn" onClick={onClick}>Next Step</button>
                </div>
            </MediaQuery>
        </section>

    )

}

export default FormOne