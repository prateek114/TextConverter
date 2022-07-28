import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* <a className="navbar-brand" href="#">{props.title}</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link>
                    {/* <a className="nav-link active" aria-current="page" href="#">{props.aboutText}</a> */}
                    </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form> */}
                <div className="d-flex">
                    <div className="bg-primary rounded mx-2" onClick={()=>{props.enable('primary')}} style={{width:'25px',height:'25px',cursor:'pointer'}}></div>
                    <div className="bg-danger rounded mx-2" onClick={()=>{props.enable('danger')}} style={{width:'25px',height:'25px',cursor:'pointer'}}></div>
                    <div className="bg-warning rounded mx-2" onClick={()=>{props.enable('warning')}} style={{width:'25px',height:'25px',cursor:'pointer'}}></div>
                    <div className="bg-success rounded mx-2" onClick={()=>{props.enable('success')}} style={{width:'25px',height:'25px',cursor:'pointer'}}></div>
                    <div className="bg-white rounded mx-2" onClick={()=>{props.enable('white')}} style={{width:'25px',height:'25px',cursor:'pointer',border:'1px solid black'}}></div>
                    <div className="bg-black rounded mx-2" onClick={()=>{props.enable('black')}} style={{width:'25px',height:'25px',cursor:'pointer',border:'1px solid white'}}></div>
                </div>
                {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.enable} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?"Dark":"Light"} Mode</label>
                </div> */}
                </div>
            </div>
        </nav>
    </div>
  )
}

Navbar.propTypes={
    title:PropTypes.string,
    aboutText:PropTypes.string,
}

Navbar.defaultProps={
    title:"Prateek",
    aboutText:"About",
}
