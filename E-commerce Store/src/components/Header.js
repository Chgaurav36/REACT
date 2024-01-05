import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav"

const Header = () => {
  return ( 
    <MainHeader>
        <NavLink to="/">
            <img className='image-logo' src="./images/logo.png" alt=""  />
        </NavLink>
        <Nav/>
    </MainHeader>
  )
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;


.logo {
height: 4rem;

}

.image-logo{
  width: 200px;
}


`;

export default Header;
