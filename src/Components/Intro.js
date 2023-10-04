import React from 'react';
import profileimg from '../Images/profileimg.jpg';
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';

function Intro() {
  return (
    <>
    <div className="col-sm-5 align-self-center order-sm-last" style={{'text-align': 'center'}}>
<img  src={profileimg} alt=""  style={{ 'margin':'auto','width':'60%',}}/>
    </div>
    <div className='col-sm-6 align-self-center offset-1' style={{'color':'white'}}>
    <div className='row' style={{'marginTop':'auto','marginBottom':'auto'}}>
      <h2>Front-End React Developer,</h2>
      <h1>I'am <span style={{'color':'yellow'}}>Ravi Kr Bhagat</span></h1>
      <h2> <i class="bi bi-wallet-fill"></i></h2>
      <p>I am a skilled and passionate web designer with experience in creating visually appealing ans user-friendly websites </p>
     
       <span> <a href="https://www.linkedin.com/in/ravi-kr-bhagat/" target="_blank" rel="noopener noreferrer"><img className='logos' src={linkedin} style={{'width':'40px'}}></img></a>
                    <a href="https://github.com/ravi18477" target="_blank" rel="noopener noreferrer"><img className='logos' src={github}></img></a><input  value={`   Hire Me`} style={{'marginLeft':'10px','borderRadius':'100px','fontWeight':'500','width':'100px','height':'45px'}}/></span>
    </div>
    </div>

    
    </>
  )
}

export default Intro
