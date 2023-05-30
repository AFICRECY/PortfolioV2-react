import React from "react";
import "./Contact.css";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBTextArea } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import linkedInLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import mediumLogo from "../../images/medium.png";

function Contact() {
  return (
    <div style={{ backgroundColor: '#fdedb3'}}>
      <div>
        <MDBContainer className="contact">
          <MDBRow>
            <MDBCol size="7" className="pt-5 pb-3 backgroundcard">
            <h1 className="textcenter me-2" style={{ fontSize: "55px" }}>Contact Me:</h1>
              <div className="contactForm">
                <div className="pb-4">
                <h3>Name:</h3>
                <MDBInput label="Name" id="typeText" type="text" />
                </div>
                <div className="pb-4">
                <h3>Email:</h3>
                <MDBInput label="Email" id="typeEmail" type="email" />
                </div>
                <div className="pb-4">
                <h3>Message:</h3>
                <MDBTextArea label="Message" id="textAreaExample" rows={4} />
                </div>
                <MDBBtn className="contactBtn"type="submit">SEND</MDBBtn>
              </div>
            </MDBCol>
            <MDBCol size="1"></MDBCol>
            <MDBCol size="4" className="pt-5">
              
                <MDBCol size="8" className="border border-3 rounded pt-3 pb-3 border-warning">
                <h2>Reach Out!</h2>
                <p >
                  {" "}
                  Whether you want to get in touch, talk about a project
                  collaboration, or just say hi, I'd love to hear from you.
                </p>
                <div className="image-icons-container text-center">
                  <a
                    href="https://www.linkedin.com/in/afi-nkhume-crecy-932862128/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={linkedInLogo}
                      alt="logo"
                      className="stacked-icon"
                    />
                  </a>
                  <div class="icon"></div>
                  
                  <a
                    href="https://medium.com/@aficrecy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={mediumLogo} alt="logo" className="stacked-icon" />
                  </a>
                  <div class="icon"></div>
                  <a
                    href="https://github.com/AFICRECY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={githubLogo} alt="logo" className="stacked-icon" />
                  </a>
                </div>
                </MDBCol>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Contact;
