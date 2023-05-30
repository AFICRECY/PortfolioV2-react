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
function Portfolio() {
    return (
        <div>
            <h1 class="text-center">Portfolio</h1>
        <MDBRow className='Card' >
        <MDBCol size='4'>
                <MDBCardImage className='CardBody' src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                <MDBCardBody className='CardBody'>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
        </MDBCol>
        <MDBCol size='4'>
                
                <MDBCardImage className='CardBody' src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                <MDBCardBody className='CardBody'>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
        </MDBCol>
        <MDBCol size='4'>
                
                <MDBCardImage className='CardBody' src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                <MDBCardBody className='CardBody'>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
        </MDBCol>
        
        
        </MDBRow>
        <MDBRow className='Card' >
        <MDBCol size='4'>
                <MDBCardImage className='CardBody' src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                <MDBCardBody className='CardBody'>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
        </MDBCol>
        <MDBCol size='4'>
                
                <MDBCardImage className='CardBody' src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                <MDBCardBody className='CardBody'>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
        </MDBCol>
        <MDBCol size='4'>
                
                <MDBCardImage className='CardBody' src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                <MDBCardBody className='CardBody'>
                    <MDBCardTitle>Card title</MDBCardTitle>
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