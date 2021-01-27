import React, { useEffect, useState } from 'react'
import {  Link } from "react-router-dom";
import  Button  from './Button';
import './Navbar.css';
export default function Navbar() {
     const [click, setClick] = useState(false);
     const handleClick =()=>setClick(!click);
     const closeNavMenu = ()=>setClick(false);
     const [button, setButton]= useState(true);
     const checkButton =()=>{
         if(window.innerWidth <= 960){
             setButton(false)
         }
         else setButton(true);
     }
     useEffect(() => {
        checkButton();
     }, [])
     window.addEventListener('resize', checkButton);
    return (
        <>
            <nav className="navbar">
                <nav className="navbar-container ">
                    <Link to="/" className="navbar-logo" onClick={closeNavMenu}>
                        TRVL <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>d
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeNavMenu}>
                            Home
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Services" className="nav-links" onClick={closeNavMenu}>
                            Services
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Products" className="nav-links" onClick={closeNavMenu}>
                            Products
                        </Link>
                        </li>
                       <li>
                       <Link to="/Sign-up" className="nav-links-mobie" onClick={closeNavMenu}>
                            Sign Up
                        </Link> 
                       </li>
                    </ul>  
                    {button&&<Button ButtonStyle="btn-outline">SIGN UP</Button>}
                </nav>
            </nav>
        </>
    )
}
