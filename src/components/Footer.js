import React from 'react';
import "./Footer.css";
import linkedInLogo from "../images/linkedin.png";
import githubLogo from "../images/github.png";
import mediumLogo from "../images/medium.png";

function Footer() {
    return (
        <div className='footer'>
            <p className='footer_text'>Dedicated to making impactful solutions!</p>
            <div className="image-icons-container text-center">
                  <a
                    href="https://www.linkedin.com/in/afi-nkhume-crecy-932862128/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedInLogo} alt="logo" className="icon"
                    />
                  </a>

                  <a
                    href="https://medium.com/@aficrecy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={mediumLogo} alt="logo" className="icon" />
                  </a>
                  <a
                    href="https://github.com/AFICRECY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={githubLogo} alt="logo" className="icon" />
                  </a>
                </div>      
                  
                
        </div>
    )
}
export default Footer;