import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="container-fluid app">
      <div className="row" style={{'position':'sticky','top':'0'}}>
        <Navbar></Navbar>
      </div>
      
      <div className="row mt-5">
       <Intro></Intro>
      </div>
      <div className="row" id='about' style={{'marginTop':'80px'}}>
          <About></About>
      </div>
      <div className="row" id='portfolio'style={{'marginTop':'50px'}}>
        <Portfolio></Portfolio>
      </div>

       <div className="row" id='projects'style={{'marginTop':'50px'}}>
        <Projects></Projects>
       </div>
      
      <div className='row' id='contact'style={{'marginTop':'50px'}}>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
