import React from 'react';
import styled from 'styled-components';

const BodyStor = styled.div`
display:flex;
align-items:center;
background-color:white;
margin-top:80px;
width:600px;
height:100px;
border: 1px solid rgb(219,219,219);
border-radius:4px;
@media screen and (max-width: 600px){
  background-color:rgb(24,24,24);
  border:none;
  width:100%;
}
`
const UserStory = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
/* border:1px solid; */
width:100px;
height:100px;
span{
    font-size:12px;
}
@media screen and (max-width: 600px){
  color:white;
  width:100px;
height:100px;
}
`
const UserImg = styled.div`
border:2px solid #d6249f;
width:60px;
height:60px;
border-radius:50%;
`


function Story() {
    return (
      <>
        <BodyStor>

        <UserStory>
    < UserImg>
    </UserImg>
    <span>user name</span>
        </UserStory>

        </BodyStor>
       

        
      </>
    );
  }
  
  export default Story;