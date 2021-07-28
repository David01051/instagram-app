import React from 'react';
import styled from 'styled-components';

const LogoImg = styled.div`
img{
  
    width:120px;
    height:40px;
}
`


function ShowLogo() {
    return (
      <>
        <LogoImg>
            <img src="InstagramLogo.svg" alt="Logo"/>
        </LogoImg>
      </>
    );
  }
  
  export default ShowLogo;