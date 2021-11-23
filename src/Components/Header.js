import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import BuyItems from "./BuyItems";
import logo from "../Image/log.jpg.png";
import {FaBars, FaTimes} from "react-icons/fa";

const Header = () => {

  const [toggle, setToggle] = useState(false)
  const handleMenu = () => {
      setToggle(!toggle)
  }

  const closeMenu = () => {
    setToggle(false)
}

  // const [dropDown, setDropDown] = useState(false);

  const onHandle = () => {
    // setDropDown(!dropDown);
  };
  return (
    <Container>
      <Top>
        <Logo src={logo} />
        <MobileMenu onClick={handleMenu}> 
                        {
                           toggle ? <FaTimes/>:<FaBars/>

                        }
                         </MobileMenu>
        <Navigation toggle={toggle} onClick={closeMenu}
          // onClick={() => {
          //   console.log(dropDown);
          //   onHandle();
          // }}
        >
          
          <Nav2 onClick={closeMenu} to="/home">Home</Nav2>
          <Nav3  onClick={closeMenu}to="/buy">Buy</Nav3>
          <Nav4  onClick={closeMenu}to="/rent">Rent</Nav4>
          <Nav6  onClick={closeMenu}to="/user">Sell</Nav6>
          
          <Nav  onClick={closeMenu} to="/moge">Mortgage</Nav>
          <Nav5  onClick={closeMenu}to="/user">Agent</Nav5>
          <Nav1  onClick={closeMenu}to="/user">
            Sign in / <span>Join</span>
          </Nav1>
                         
        </Navigation>
      </Top>
      <Wrapper>
        <Content>
          <Text onClick={closeMenu}><span> No1 Remote Property Search Engine </span></Text>

          <Home>
            <Div>Search Homes</Div>
            <Div>Price My Home</Div>
          </Home>
        </Content>

        <Input placeholder="City, ZIP, School, Address, Neighborhood" />
        <Desc>Expert guidance for your home journey</Desc>
      </Wrapper>
    </Container>
  );
};

export default Header;

const MobileMenu = styled.div`
display: none;
color: white;

@media screen and (max-width: 768px) {
  
    display: flex;
    align-items: center;
    top: 30px;
    right: 20px;
    font-size: 40px;
    position: absolute;
}

`;

const Home = styled.div`
  width: 600px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  font-weight: 600;
  margin-bottom: 30px;
  letter-spacing: 1px;

  :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 50%;
  height: 60px;
  border-radius: 50px;
  background-color: white;
  padding-left: 20px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  font-size: 23px;
  color: lightgray;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Desc = styled.div`
  font-size: 22px;
  letter-spacing: 1px;
  color: white;
  font-weight: 600;
  margin: 5px;
`;

const Div = styled.div`
font-size:25px;
line-height32px;
`;

const Content = styled.div`
  width: 650px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Text = styled.div`
  font-size: 55px;
  line-height: 55px;
  color: white;
  margin-bottom: 13px;
  color: blue;

  :span: {
    margin-top: 100px;
  }
  
`;


const Nav5 = styled(Link)`
  font-size: 22px;
  color: white;
  font-weight: 600;
  margin: 0 35px;
  font-family: MovotoDMSans, Calibri, Arial, sans-serif;
  letter-spacing: 1px;

  :hover {
    cursor: pointer;
    background-color: rgb(126, 151, 201);
  }

`;

const Nav6 = styled(Link)`
  font-size: 22px;
  color: white;
  font-weight: 600;
  margin: 0 35px;
  font-family: MovotoDMSans, Calibri, Arial, sans-serif;
  letter-spacing: 1px;

  :hover {
    cursor: pointer;
    background-color: rgb(126, 151, 201);
  }

`;

const Nav1 = styled(Link)`
  font-size: 22px;
  color: white;
  font-weight: 600;
  margin: 0 35px;
  font-family: MovotoDMSans, Calibri, Arial, sans-serif;
  letter-spacing: 1px;

  :hover {
    cursor: pointer;
    background-color: rgb(126, 151, 201);
  }

`;


const Nav3 = styled(Link)`
  font-size: 22px;
  color: white;
  font-weight: 600;
  margin: 0 35px;
  font-family: MovotoDMSans, Calibri, Arial, sans-serif;
  letter-spacing: 1px;
  :hover {
    cursor: pointer;
    background-color: rgb(126, 151, 201);
  }

`;

const Nav4 = styled(Link)`
  font-size: 22px;
  color: white;
  font-weight: 600;
  margin: 0 35px;
  font-family: MovotoDMSans, Calibri, Arial, sans-serif;
  letter-spacing: 1px;
  :hover {
    cursor: pointer;
    background-color: rgb(126, 151, 201);
  }

`;


const Nav = styled(Link)`
  font-size: 22px;
  color: white;
  font-weight: 600;
  margin: 0 35px;
  font-family: MovotoDMSans, Calibri, Arial, sans-serif;
  letter-spacing: 1px;
  :hover {
    cursor: pointer;
    background-color: rgb(126, 151, 201);
  }

`;

const Nav2 = styled(Link)`
  font-size: 22px;
  color: white;
  font-weight: 600;
  margin: 0 35px;
  font-family: MovotoDMSans, Calibri, Arial, sans-serif;
  letter-spacing: 1px;
  // text-decoration: none;

  :hover {
    cursor: pointer;
    background-color: rgb(126, 151, 201);
  }

`;



const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 15px;

  :hover {
    cursor: pointer;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
// margin-right: 30px;


@media screen and (max-width: 768px) {
    display: flex;
    align-items:center;
    flex-direction: column;
    position:absolute;
    top: 5px;
    width: 100%;
    height: 50vh;
    left: ${({toggle}) => (toggle ? "0":"-100%")};
    background-color: rgb(126, 151, 201);
    color: white;
    transition: all 500ms ease-in-out;
    
}
  :hover {
    cursor: pointer;
    color: darkblue;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: rgb(126, 151, 201);
  background-image: url("/tinaHeader.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
\
 

  
`;