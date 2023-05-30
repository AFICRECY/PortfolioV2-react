import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import Footer from '../Footer';
import './Portfolio.css';
import cinexplorerImg from "../../images/Cinexplorer.png";
import featherPadImg from "../../images/FeatherPad-image.png";
import hopsHavenImg from "../../images/Hops-Haven-Logo.png";
import theBloggersDenImg from "../../images/TheBloggersDen-image.png";
import workDayPlannerImg from "../../images/WorkDayPlanner-image.png";
import weatherProImg from "../../images/WeatherPro-image.png";



function Portfolio() {
    return (
        <div>
            <h1 style={{ fontSize: "55px" }}>Portfolio</h1>
            <h2 class="text-center">Previous projects I've worked on...</h2>
        <MDBRow className='Card' >
        <MDBCol size='4'>
            <a href="https://codenamenoah.github.io/Movie-Indexer/" target="_blank"
                    rel="noreferrer">
                <MDBCardImage className='CardBody' src={cinexplorerImg} position='top' alt='...' />
            </a>
                <MDBCardBody className='CardBody'>
                    <MDBCardTitle>Cinexplorer Movie Search</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
        </MDBCol>
        <MDBCol size='4'>
        <a href="https://feather-pad-texteditor.herokuapp.com/" target="_blank"
                    rel="noreferrer">
                <MDBCardImage className='CardBody' src={featherPadImg} position='top' alt='...' />
            </a>
                <MDBCardBody className='CardBody'>
                    <MDBCardTitle>Feather Pad Text Editor</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
        </MDBCol>
        <MDBCol size='4'>
        <a href="https://hops-haven.herokuapp.com/" target="_blank"
                    rel="noreferrer">
                <MDBCardImage className='CardBody' src={hopsHavenImg} position='top' alt='...' />
            </a>
                <MDBCardBody className='CardBody'>
                    <MDBCardTitle>Hops Haven</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
        </MDBCol>
        
        
        </MDBRow>
        <MDBRow className='Card' >
        <MDBCol size='4'>
        <a href="https://the-bloggers-den.herokuapp.com/" target="_blank"
                    rel="noreferrer">
                <MDBCardImage className='CardBody' src={theBloggersDenImg} position='top' alt='...' />
            </a>
                <MDBCardBody className='CardBody'>
                    <MDBCardTitle>The Bloggers Den</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
        </MDBCol>
        <MDBCol size='4'>
        <a href="https://aficrecy.github.io/daily-timeline-pro/" target="_blank"
                    rel="noreferrer">
                <MDBCardImage className='CardBody' src={workDayPlannerImg} position='top' alt='...' />
            </a>
                <MDBCardBody className='CardBody'>
                    <MDBCardTitle>Daily Timeline Work Planner</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
        </MDBCol>
        <MDBCol size='4'>
        <a href="https://aficrecy.github.io/weather-pro/" target="_blank"
                    rel="noreferrer">
                <MDBCardImage className='CardBody' src={weatherProImg} position='top' alt='...' />
            </a>
                <MDBCardBody className='CardBody'>
                    <MDBCardTitle>Weather Pro 5 Day Forecast</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
        </MDBCol>
        
        
        </MDBRow>
        <Footer/>
        </div>
        )
}

export default Portfolio;