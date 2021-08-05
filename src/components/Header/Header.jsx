import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Input from '../Header/Input';
import Icons from '../Header/Icons';

const BodyHeader = styled.div`
position:fixed;
z-index:1;
display:flex;
justify-content:space-evenly;
align-items:center;
width:100%;
height:60px;
border:1px solid rgb(219,219,219);
background-color:rgb(255,255,255);
@media screen and (max-width: 600px){
  background-color:rgb(60,60,60);
  border:none;
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
`


function Header() {
    return (
      <>
        <BodyHeader>
            <Logo/>
            <Input/>
            <Icons/>
        </BodyHeader>
      </>
    );
  }
  
  export default Header;