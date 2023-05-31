import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Footer from "../Footer";
import "./Portfolio.css";
import cinexplorerImg from "../../images/Cinexplorer.png";
import featherPadImg from "../../images/FeatherPad-image.png";
import hopsHavenImg from "../../images/Hops-Haven-Logo.png";
import theBloggersDenImg from "../../images/TheBloggersDen-image.png";
import workDayPlannerImg from "../../images/WorkDayPlanner-image.png";
import weatherProImg from "../../images/WeatherPro-image.png";

function Portfolio() {
  return (
    <div style={{ backgroundColor: '#fdedb3'}}>
      <h1 style={{ fontSize: "55px"}}>Portfolio</h1>
      <h2 className="text-center pb-4">Previous projects I've worked on...</h2>
      <MDBRow className="Card">
        <MDBCol size="4">
          <a
            href="https://codenamenoah.github.io/Movie-Indexer/"
            target="_blank"
            rel="noreferrer"
          >
            <MDBCardImage
              className="CardBody"
              src={cinexplorerImg}
              position="top"
              alt="..."
            />
          </a>
          <MDBCardBody className="CardBody">
           <MDBCardTitle className='pt-4'>Cinexplorer Movie Search</MDBCardTitle>
            <MDBCardText>
            <a href="https://github.com/CodeNameNoah/Movie-Indexer" target="_blank"
            rel="noreferrer">(Link to repository)</a>  
            <br/>
            I am excited to tell you about the application my team and I made for movie enthusiasts. Our application is designed to provide users with an easy and efficient way to search for information about their favorite movies. This application utilizes OMDb's Movie API.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol size="4">
          <a
            href="https://feather-pad-texteditor.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <MDBCardImage
              className="CardBody"
              src={featherPadImg}
              position="top"
              alt="..."
            />
          </a>
          <MDBCardBody className="CardBody">
            <MDBCardTitle className='pt-4'>Feather Pad Text Editor</MDBCardTitle>
            <MDBCardText>
            <a href="https://github.com/AFICRECY/Feather-Pad-texteditor" target="_blank"
            rel="noreferrer">(Link to repository)</a>  
            <br/>
            This installable digital notebook appplication serves as a modern counterpart to traditional paper notebooks, enabling users to conveniently organize their notes and information and auto save on the go.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol size="4">
          <a
            href="https://hops-haven.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <MDBCardImage
              className="CardBody"
              src={hopsHavenImg}
              position="top"
              alt="..."
            />
          </a>
          <MDBCardBody className="CardBody">
            <MDBCardTitle className='pt-4'>Hops Haven</MDBCardTitle>
            <MDBCardText>
            <a href="https://github.com/CodeNameNoah/Hops-Haven" target="_blank"
            rel="noreferrer">(Link to repository)</a>  
            <br/>
              My Team and I created a web application allows access to a beer API that provides users with a comprehensive resource for exploring the world of beer and discovering new and exciting options. Click the link and make an account to see some hop options and even make a favorites lists.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      <MDBRow className="Card">
        <MDBCol size="4">
          <a
            href="https://the-bloggers-den.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <MDBCardImage
              className="CardBody"
              src={theBloggersDenImg}
              position="top"
              alt="..."
            />
          </a>
          <MDBCardBody className="CardBody">
            <MDBCardTitle className='pt-4'>The Bloggers Den</MDBCardTitle>
            <MDBCardText>
            <a href="https://github.com/AFICRECY/The-Bloggers-Den" target="_blank"
            rel="noreferrer">(Link to repository)</a>  
            <br/>
              The Bloggers Den  is a dynamic user-friendly blogging App which allows users to create an account in which
              they can read, update, and delete their own blog posts, as well as
              comment on friends posts.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol size="4">
          <a
            href="https://aficrecy.github.io/daily-timeline-pro/"
            target="_blank"
            rel="noreferrer"
          >
            <MDBCardImage
              className="CardBody"
              src={workDayPlannerImg}
              position="top"
              alt="..."
            />
          </a>
          <MDBCardBody className="CardBody">
            <MDBCardTitle className='pt-4'>Daily Timeline Work Planner</MDBCardTitle>
            <MDBCardText>
            <a href="https://github.com/AFICRECY/daily-timeline-pro" target="_blank"
            rel="noreferrer">(Link to repository)</a>  
            <br/>
            With Daily Timeline Pro, a user can save events for each hour of the day as well as insert them into easily distinguishable time blocks. Time management can be made easy, the user simply clicks into the time block they would like to add an event/task to, and click save, edit, or even delete.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol size="4">
          <a
            href="https://aficrecy.github.io/weather-pro/"
            target="_blank"
            rel="noreferrer"
          >
            <MDBCardImage
              className="CardBody"
              src={weatherProImg}
              position="top"
              alt="..."
            />
          </a>
          <MDBCardBody className="CardBody">
            <MDBCardTitle className='pt-4'>Weather Pro 5 Day Forecast</MDBCardTitle>
            <MDBCardText>
            <a href="https://github.com/AFICRECY/weather-pro" target="_blank"
            rel="noreferrer">(Link to repository)</a>  
            <br/>
            Weather Pro is a user-friendly weather app that displays daily weather information --temperature, wind, humidity-- and a 5-day forecast for any city entered in the search input. Try out this appealing and easy-to-use weather app!
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
}

export default Portfolio;
