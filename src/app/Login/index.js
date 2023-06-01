import React from 'react'
import './Login.css'
import Axios from 'axios'
import { Link } from 'react-router-dom';



function Login() {

    document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
	    container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
	    container.classList.remove("right-panel-active");
    });
});



    return (

        <div class="container" id="container">
	        <div class="form-container sign-up-container">
		        <form action="">
					
			        <h1>Create Account</h1>
			        <input type="text" placeholder="Name" />
			        <input type="email" placeholder="Email" />
			        <input type="password" placeholder="Password" />
			        <button type="submit">Sign Up</button>

		        </form>
	        </div>

	        <div class="form-container sign-in-container">
		        <form action="" >

			        <h1>Sign in</h1>
			        <input type="email" placeholder="Email"  name='email' />
			        <input type="password" placeholder="Password"  name='password' />
			        <a href="#">Forgot your password?</a>
			        <button type="submit">Sign In</button>

    		    </form>
	        </div>

    	    <div class="overlay-container">
	    	    <div class="overlay">
		    	    <div class="overlay-panel overlay-left">
			    	    <h1>Welcome Back!</h1>
				        <p>To keep connected with us please login with your personal info</p>
				        <button class="ghost" id="signIn">Sign In</button>
			        </div>
    			    <div class="overlay-panel overlay-right">
	    			    <h1>Hello, Friend!</h1>
		    		    <p>Enter your personal details and start reviewing your school</p>
			    	    <button class="ghost" id="signUp">Sign Up</button>
    			    </div>
	    	    </div>
	        </div>

			<div>
				<button class="return-btn">
					<Link to="/"> <i class="fa-solid fa-arrow-left"></i> </Link> 
				</button>
			</div>
        </div>


  )
}

 
export default Login