import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
const navigate = useNavigate()

    return (
          
        <section class="hero">
        {/* <nav>
          <img
            class="logo"
            alt="Erik Widell´s logga"
            src={logo}
          />
          <ul>         
             <li>About me</li>
            <li>Projects</li>
            <li>contacts</li> 
          </ul>
        </nav> */}
        <div class="hero-area">
          <div class="hero-text">
            <h1> Erik Widell</h1>
            <p>Full Stack Developer</p>
            <div class="button">About me</div>
          </div>
          <div class="socials">
            <div>
              <a href="https://www.twitter.com" class="social">
                <img src={twitter} class="twitter" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com" class="social">
                <img src={linkedin} class="linkedin" />
              </a>
            </div>
            <div>
              <a href="https://www.github.com" class="social">
                <img src={github} class="github" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Header;
