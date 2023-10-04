import React, { useState } from 'react'
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';
import twitter from '../Images/twitter.png';
import facebook from '../Images/facebook-icon.png'

function Contact() {
    const [userdata, setUserData] = useState({});

    function handleMessageChange(e) {
        setUserData({ ...userdata, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userdata);
    }

    return (
        <div className='col-md-10  offset-sm-1 ' style={{ 'color': 'white' }}>
            <h2 className='section-head'>Contact Me</h2>
            <p style={{ 'text-align': 'center', 'marginTop': '20px','marginBottom':'40px' }}>Please fill out the form below to discuss any Work Opportunity</p>
            <form className="contact-form" method='POST' onSubmit={(e) => handleSubmit(e)}  >
                 <div className="container" style={{ 'text-align': 'center' }}>
                <input className=" contact-input" type="text" name='name' value={userdata.name} onChange={(e) => { handleMessageChange(e) }} placeholder='Your Name' style={{ 'color': 'white' }} />
                <input className="contact-input" type="text" name='email' value={userdata.email} onChange={(e) => { handleMessageChange(e) }} placeholder='Your Email'></input>


                <div className="shadow-textarea ">
                    <textarea className=" contact-input-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..." name='message' value={userdata.message} onChange={(e) => { handleMessageChange(e) }}></textarea>
                </div>
                </div>

                <input type="submit" className="btn btn-primary" value={'Send'} style={{'marginLeft':'13%','borderRadius':'5px','width':'100px'}} ></input>
            </form>

            
            <div className='logoContainer' style={{ 'text-align': 'center', 'marginTop':'50px' }}>
                    
                    <a href="https://www.linkedin.com/in/ravi-kr-bhagat/" target="_blank" rel="noopener noreferrer"><img className='logos' src={linkedin} style={{'width':'40px'}}></img></a>
                    <a href="https://github.com/ravi18477" target="_blank" rel="noopener noreferrer"><img className='logos' src={github}></img></a>
                    <a ><img className='logos' src={twitter}></img></a>
                    <a  ><img className='logos' src={facebook}></img></a>
                    <ul></ul>
            </div>
        



        </div>
    )
}

export default Contact
