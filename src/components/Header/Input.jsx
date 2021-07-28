import React from 'react';
import styled from 'styled-components';

const BodyInput = styled.div`

`
const Input = styled.input`
width:250px;
height:30px;
border-radius:4px;
border: 1px solid rgb(219,219,219);
background-color:rgb(240,240,240);
@media screen and (max-width: 600px){
  display:none;
}
`


function SearchUser() {
    return (
      <>
        <BodyInput>
            <Input type="text" name="Search" ></Input>

            
        </BodyInput>
       

        
      </>
    );
  }
  
  export default SearchUser;