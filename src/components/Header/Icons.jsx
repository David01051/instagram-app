import React from 'react';
import styled from 'styled-components';
import { FaFacebookMessenger, FaPlus,FaHeart, FiSend } from 'react-icons/fa';

const BodyIcons = styled.div`
/* border:1px solid; */
width:200px;
height:35px;
display:flex;
justify-content:space-around;
align-items:center;
flex-direction:row;
font-size:20px;
@media screen and (max-width: 600px){
  width:100px;
  
}

`
const User = styled.div`
border:1px solid;
width:25px;
height:25px;
border-radius:50%;
@media screen and (max-width: 600px){
  display:none;
}
`



function Icon() {
    return (
        <>
            <BodyIcons>
                <div><FaPlus /></div>
                <div> <FaHeart/></div>
                <div><FaFacebookMessenger /></div>
                          
                <User></User>
                   
            </BodyIcons>



        </>
    );
}

export default Icon;