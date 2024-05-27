import React from "react";
import './CSS/Loginsignup.css'

const LoginSignUp = () =>{
    return(
        <div className="login">
            <div className="login-container">
                <h1>Sign Up</h1>
                <div className="login-fields">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="email" placeholder="Enter Your Email address"/>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <button>Continue</button>
                <p className="loginsignup">Already have an account? <span>Login here</span></p>
                <div className="agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms and conditions</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignUp;