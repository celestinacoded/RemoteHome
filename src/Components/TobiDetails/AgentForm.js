import React from 'react'
import styled from "styled-components";
import PartDetail from "./PartDetail";
import { Link } from "react-router-dom";

const AgentForm = () => {
    return (
        <Container>
            <Wrapper>
            <FormSection> 
                    <Form> 
                            <Title> Schedule a Viewing </Title> 
                            <InputHold> 
                            <Input placeholder="Name" /> 
                            </InputHold> 
                            <InputHold> 
                            <Input placeholder="Email" /> 
                            </InputHold> 
                            <InputHold> 
                            <Input placeholder="Phone Number" /> 
                            </InputHold> 
                            <InputHold> 
                            <Input placeholder="Comments or Questions" /> 
                            </InputHold> 
                             
                            <Button to="/user"> 
                                <span>  Go</span> 
                            </Button> 
                    </Form> 
                    </FormSection> 
                    <PartDetail/>
            </Wrapper>
        </Container>
    )
}

export default AgentForm

const Container = styled.div`
width : 100%; 
height: 100%; 
min-height: 100vh; 
background-color: rgb(230,235,243); 
`;

const Wrapper =  styled.div`
display: flex;
margin-left: 100px;
 
`;


const Title = styled.div` 
font-size: 30px; 
margin: 15px 0; 
`; 
const InputHold = styled.div` 
 
`; 
 
const Input = styled.input` 
width: 350px; 
height: 40px; 
outline: none; 
border: 1px solid lightgray; 
padding-left: 8px; 
`; 
 
const Form = styled.div` 
display: flex; 
flex-direction: column; 
align-items: center;
padding-top: -50px; 

`; 
// const Dummy = styled.div` 
// color:blue; 
// font-size: 30px; 
// font-weight: bold; 
 
// ` 
 
// const DetailText6 = styled.div` 
// display:flex; 
// font-size: 13px; 
// color:black; 
// ` 
 
const Button = styled(Link)` 
  width:250px; 
  height: 40px; 
  background-color:#0561eb; 
  border-radius: 20px 20px; 
  border-color: none; 
  align-items: center;
  display: flex;
  justify-content: centre;
  border: 0; 
  font-weight: bold; 
  font-size:18px; 
  cursor: pointer; 
  outline: none; 
  color:white; 
  margin-top: 20px; 
  transition: all 350ms; 
 
  :hover { 
      background-color:#021b42 
    transform: scale(1.5);
 
  } 

}

span {
  display: flex;
  justify-content: centre;
 align-items: centre;
  margin-left: 120px;
}
`; 
 
 
 
const FormSection = styled.div` 
width : 856px; 
background-color:#e6ebf3; 
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
` 