import React from 'react';
import portfolio1 from '../Images/portfolio-1.png';
import portfolio2 from '../Images/portfolio-2.png';
import portfolio3 from '../Images/portfolio-3.png';
import portfolio4 from '../Images/portfolio-4.png';
import portfolio5 from '../Images/portfolio-5.png';
import portfolio6 from '../Images/portfolio-6.png';

function Portfilio() {
  return (
    <div className='col-md-10  offset-sm-1 offset-md-1 ' style={{'color':'white',}}>
    <h1 className='section-head'>Portfolio</h1>  
    <p>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills ans experience to help bussiness achieve their goals and create a strong online presence0</p>
    <div className="row" style={{'marginTop':'50px'}}>
      <div className="col-md-4 col-sm-6 " style={{'text-align': 'center'}}><img src={portfolio1} alt="" style={{'width':'200px'}}/></div>
      <div className="col-md-4 col-sm-6" style={{'text-align': 'center'}}><img src={portfolio2} alt="" style={{'width':'200px'}}/></div>
      <div className="col-md-4 col-sm-6" style={{'text-align': 'center'}}><img src={portfolio3} alt="" style={{'width':'200px'}}/></div>
      <div className="col-md-4 col-sm-6" style={{'text-align': 'center'}}><img src={portfolio4} alt="" style={{'width':'200px'}}/></div>
      <div className="col-md-4 col-sm-6" style={{'text-align': 'center'}}><img src={portfolio5} alt="" style={{'width':'200px'}}/></div>
      <div className="col-md-4 col-sm-6" style={{'text-align': 'center'}}><img src={portfolio6} alt="" style={{'width':'200px'}}/></div>
    </div>
           
    </div>
  )
}

export default Portfilio
