import React from 'react';
import styled from 'styled-components';


const Body = styled.div`
margin-top:20px;
background-color:white;
width:600px;
height:500px;
border: 1px solid rgb(219,219,219);
border-radius:4px;
@media screen and (max-width: 600px){
  border: 1px solid rgb(100,100,100);
  background-color: rgb(30,30,30);
  width:100%;
  margin-top:10px;
}

`
const Header = styled.div`
@media screen and (max-width: 600px){
  background-color:rgb(40,40,40);
border:1px solid rgb(40,40,40);
width:100%;
height:50px;
}
`
const Footer = styled.div`
@media screen and (max-width: 600px){
  position:absolute;
border:1px solid blue;
width:100%;
height:50px;

}
`

function Continer() {
    return (
      <>
      <Body>
  <Header></Header>
  {/* <Footer></Footer> */}

      </Body>
       
       
      </>
    );
  }
  
  export default Continer;