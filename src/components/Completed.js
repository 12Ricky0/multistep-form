import React from "react";
import MediaQuery from 'react-responsive'


function CompletedForm() {

    const name = localStorage.getItem('name');
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
                        <img className="complete-img" src="images/icon-thank-you.svg" alt="img" />

                        <h1 className="complete-p">Thank you!</h1>
                        <p className="complete-p"> Thanks {<strong data-testid="name">{name}</strong>} for confirming your subscription! We hope you have fun
                            using our platform. If you ever need support, please feel free
                            to email us at support@loremgaming.com.</p>


                    </article>
                </div>
            </div>

        </section>
    )
}

export default CompletedForm