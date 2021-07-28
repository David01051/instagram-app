import React from 'react';
import styled from 'styled-components';
import Story from '../Story/Story';
import User from '../User/User';
import Footer from '../Footer/Footer';


const Body = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100vw;
height:100vh;
background-color:rgb(240,240,240);
@media screen and (max-width: 600px){
  background-color:rgb(24,24,24);
  width:100%;
  height:100%;
}

`

function Continer() {
    return (
      <>
      <Body>
       <Story/>
       <User/>
       <User/>
       <User/>
      <Footer/>
       </Body>
      </>
    );
  }
  
  export default Continer;