import React from 'react'
import appDesign from '../Images/app-design.png';
import websiteDesign from '../Images/website-design.png';
import uiDesign from '../Images/ui-design.png';
function About() {
    return (
        <div className='col-md-10  offset-sm-1 offset-md-1  justify-content' style={{ 'color': 'white', 'padding': '20px' }}>
            <h1 className='section-head' >What I Do</h1>
            <p >I am a skilled web designer with experience in creating visually appearing and user friendly websites. I have a strong uderstanding of design and a keen eye for detail. I am proeficient in HTML, CSS, Javascript and ReactJs as well as design software.</p>
            <div className="container " style={{ 'marginTop': '80px' }}>
                <div className="row">
                    <div className="col-12 ">
                        <div className="card  text-white skill-card row" >
                            <div className="card-body" >
                                <div className="row">
                                    <div className="col-1 align-self-center "><img src={uiDesign} alt="" style={{ 'width': '40px' }} /></div>
                                    <div className="col-11">
                                        <h3 className="card-title">UI/UX design</h3>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of the
                                            card's content.
                                        </p>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="card  text-white skill-card row" >
                            <div className="card-body" >
                                <div className="row">
                                    <div className="col-1 align-self-center"><img src={websiteDesign} alt="" style={{ 'width': '40px' }} /></div>
                                    <div className="col-11">
                                        <h3 className="card-title">Website Design</h3>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of the
                                            card's content.
                                        </p>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="col-12 mt-3">
                        <div className="card  text-white skill-card row" >
                            <div className="card-body" >
                                <div className="row">
                                    <div className="col-1 align-self-center  "><img src={appDesign} alt="" style={{ 'width': '40px' }} /></div>
                                    <div className="col-11">
                                        <h3 className="card-title">App Design</h3>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of the
                                            card's content.
                                        </p>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
