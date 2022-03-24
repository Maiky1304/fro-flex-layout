import React from 'react';
import styled from "styled-components";

const NavbarElement = styled.div`
  height: 10vh;
  
  padding: 0 2rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  box-shadow: 0 0.5px 10px rgba(0,0,0,0.3);
  
  > h2 {
    font-size: 150%;
  }
  
  > span {
    font-size: 100%;
  }
`

const Navbar = () => {
    return (
        <NavbarElement>
            <h2>Simple Dashboard</h2>
            <span>By Maiky Perlee</span>
        </NavbarElement>
    );
};

export default Navbar;
