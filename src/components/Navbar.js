import React from 'react'

export default function Navbar() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand mx-3" href="#">RHINO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbar-1" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-1">
        <li className="nav-item">
          <a className="nav-link active home-about mx-4" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link home-about mx-4" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link home-about mx-4" href="#">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link home-about mx-4" href="#">Staff</a>
        </li>
        <li className="nav-item">
          <a className="nav-link home-about mx-4" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
