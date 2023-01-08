import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
    
        return (
            <nav class={`navbar navbar-light bg-${props.mode} `}>
                <div class="container-fluid">

                    <ul className= "nav nav-pills" >

                        <li className="nav-item">
                            <a className={`nav-link text-${props.mode==='dark'?'light':'primary'} `}  href="/">{props.title}</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className={`nav-link text-${props.mode==='dark'?'light':'primary'} `} href="/">Home</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className={`nav-link text-${props.mode==='dark'?'light':'primary'} `}  href="/about">About</a>
                        </li> */}
                    </ul>

                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
                        <label className={`form-check-label text-${props.mode==='dark'?'light':'primary'} `} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?'light':'dark'} mode</label>
                    </div>


                </div >
            </nav>
        )
    
        

}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: 'Set Title Here'
}
