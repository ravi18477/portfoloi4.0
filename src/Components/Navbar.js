import React from 'react'

function Navbar() {
  return (
    <div className='col' style={{'hight':'5rem','backgroundColor':'black'}}>
        <nav className="navbar navbar-dark navbar-expand-lg  "  >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://tse4.mm.bing.net/th?id=OIF.4o5RJVR7JYqsrB%2bV80n92g&pid=Api&P=0&h=180" alt="" style={{'width':'40px'}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{'marginRight':'auto','marginLeft':'auto'}}>
        <li className="nav-item">
          <a className="nav-link active navLinkItems" aria-current="page" href="#" style={{'fontWeight':'700'}} >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navLinkItems" href="#about" style={{'fontWeight':'700'}}>About</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link navLinkItems" href="#portfolio" aria-disabled="true" style={{'fontWeight':'700'}}>Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navLinkItems" href="#projects" aria-disabled="true" style={{'fontWeight':'700'}}>Projects</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <a href="#contact" style={{'textDecoration':'none'}}><input className="form-control me-2"  value={'Contact'} aria-label="Search"/></a>
        
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
