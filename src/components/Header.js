import React, { useState } from 'react';
import './Header.css';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

import PortfolioLogo from '../images/PortfolioLogo.png';
import NavTabs from './NavTabs';
export default function Header({currentPage,handlePageChange}) {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar className='navbar' expand='lg' light bgColor='warning'>
      <MDBContainer fluid>
        <img src={PortfolioLogo} 
        alt="not found"
        width="250px auto"
        />
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
          
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}