import React from 'react';
import styled from 'styled-components';
import { FaHome, FaSearch, FaHistory, FaStore } from 'react-icons/fa';

const Body = styled.div`
@media screen and (max-width: 600px){
position:absolute;
position:fixed;
display:flex;
align-items:center;
background-color:rgb(0,0,0);
  border:none;
/* border: 1px solid;
background-color:white; */
width:100vw;
height:50px;
bottom:0;
/* border-radius: 4px 4px 0px 0px */
}
`
const Icons = styled.div`
display:none;
@media screen and (max-width: 600px){
  display:flex;
justify-content:space-around;
align-items:center;
/* border: 1px solid; */
width:300px;
height:50px;
font-size:22px;
color:white;
}

`



function Footer() {
    return (
        <>
            <Body>
                <Icons>
<FaHome/>
<FaSearch/>
<FaHistory/>
<FaStore/>
                </Icons>
            </Body>

        </>
    );
}

export default Footer;