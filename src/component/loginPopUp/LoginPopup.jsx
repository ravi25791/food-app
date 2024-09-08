import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './loginpopup.css'

const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Login")

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='your name' required />}
                    <input type="email" placeholder='Email' required />
                    <input type="password" placeholder='password' required />
                </div>
                <button>{currentState === "Sin Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the term of use and privacy.</p>
                </div>
                {currentState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrentState("Sin Up")}>Click Here</span></p>
                    : <p>Already have an account <span onClick={() => setCurrentState("Login")}>Login Here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
