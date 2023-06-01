import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
  return (
    
    <div>
        <nav class="navbar background">
            <ul class="nav-list">
                <div class="logo">
                    <img src="https://i.ibb.co/XFtZ590/logo.png" alt=''/>
                </div>
                
                <li><a href="#rankings_page">Rankings</a></li>
                <li><a href="#review_page">Review</a></li>
                <li><a href='#profile_page'>Profile</a></li>
                <li><Link to="/login">Login</Link></li>
                
            </ul>

            <div class="rightNav">
                <input type="text" name="search" id="search" />
                <button class="search-btn">
                <i class="fas fa-magnifying-glass"></i>
                </button>
                
            </div>
        </nav>
    </div>
  )
}

export default Home