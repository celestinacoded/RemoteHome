import React from 'react'
import styled from "styled-components";
// import vid from './Video/vid.mp4' 
import ContactAgent  from "./ContactAgent";
import img1 from "../../Image/sittingroom.jpg";
import img from "../../Image/bedroom.jpg";
import vid from "../../Image/ApartmentVideo.mp4";
import { Link } from "react-router-dom";


const HomeDetail = () => {
    return (
        <Container> 
            <Wrapper> 
               <View> 
               <ViewSection> 
                   <ViewThis> 
                   <Video src={vid} controls loops autoplay muted
                   /> 
                    <HomeImageContainer> 
                    <HomeImage src={img1}/> 
                    <HomeImage src={img}/>
                    </HomeImageContainer>
                    
                    <Div1>
        <Button1 to="/form"> Meet With Agent </Button1>
                   </Div1> 
                   <Div>                      
       <Tittle> Apartment.Ng Lagos Office</Tittle>
                    </Div>  
                   </ViewThis> 
                </ViewSection> 
                        <ContactAgent/>     
               </View>
               
            </Wrapper> 
        </Container> 
    );
}

export default HomeDetail

// const ButtonA = styled.div`
//   background: #000d6b;

//   border-radius: 50%;
//   width: fit-content;
//   padding: 20px;
//   font-size: 25px;
//   color: white;
//   font-weight: bold;
//   position: fixed;
//   bottom: 40px;
//   right: 30px;
//   z-index: 1;
//   cursor: pointer;
// `;

const Div1 = styled.div`
display: flex;
//   justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 50px;
  margin-left: -40px;
  transition: all 500ms ease-in-out;
  // background-color: blue;
    
}
  :hover {
    cursor: pointer;
    color: darkblue;
  }
  `;

const Div = styled.div`
display: flex;
//   justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 15px;
  margin-left: 450px;
  `;

  const Button1 = styled(Link)`
  width: 350px;
  height: 40px;
  background-color: blue ;
//   margin: 15px auto;
  font-size: 15px;
  border-radius: 30px;
  color: whitesmoke;
  font-weight: bold;
  display: flex;
  border: 1px solid lightgrey;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  
  :hover {
    cursor: pointer;
    // background-color: rgb(255,255,255);
    color:white;
    transform: scale(1.1);
    
  }
`;
 
const Tittle = styled.div`
color: black;
font-weight: bold;
justify-content: center;
  align-items: center;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    background: whitesmoke;
    

`;

const HomeImageContainer = styled.div` 
display:flex; 
` 
const ViewThis = styled.div` 
display : flex; 
flex-direction: column; 
` 
 
const HomeImage = styled.img` 
margin:5px 5px; 
width:420px; 
height:270px; 
background-color: blue; 
border-radius:5px 5px 0px 0px; 
 
` 
const View = styled.div` 
 
// display: flex; 
// justify-content: center; 
// flex-wrap: wrap; 
// background-color:#e6ebf3; 
display: flex;
// justify-content: space between;
// flex-direction: column;

` 
 
const Video = styled.video` 
width: 100%; 
height: 493px; 
background-color:white; 
border-radius:5px; 
` 
const ViewSection = styled.div` 
display:flex; 
flex-direction:column; 
flex:1; 
height: 100vh; 
/* min-height: 100vh; */ 
width: 900px; 
background-color: white; 
// overflow-y: scroll; 
` 
const Container = styled.div` 
width : 100%; 
height: 100%; 
min-height: 100vh; 
background-color: White; 
` 
const Wrapper = styled.div` 
padding-top: 50px; 
 display: flex;
 justify-content: space between;
 align-items: centre;
 margin-left: 60px;
 position: relative;
`;