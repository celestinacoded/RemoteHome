import React from "react";
import styled from "styled-components";
import { data } from "./TinaData";
import Toggle from "../ApartmentHome/toggle";
import PartDetail from "../TobiDetails/PartDetail";

// import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Container>
      <Wrapper>
      <View>
        <Content>
          {data?.map((prop) => {
            const {
              id,
              time,
              open,
              img,
              price,
              bd,
              ba,
              sq,
              address,
              squareFeet,
              details,
            } = prop;
            return (
              <Card key={id}>
                <Image src={img} />
                <Time>New {time} Hours</Time>
                <Open>Open {open}</Open>
                <Toggle />
                <Price>₦ {price} </Price>
                <Details>
                  <p>
                    {bd} <small>Bd</small>
                  </p>
                  <p>
                    {ba} <small>Ba</small>
                  </p>
                  <p>
                    {sq} <small>Sqft</small>
                  </p>
                  <span>{squareFeet}</span>
                  <span>{details}</span>
                </Details>
                <Address>{address}</Address>
              </Card>
            );
          })}
        </Content>
        <PartDetail/>
       </View>
      </Wrapper>
    </Container>
  );
};

export default LandingPage;

const View = styled.div` 
 
display: flex; 
flex-wrap: wrap; 
background-color:#e6ebf3; 

` 

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction:column;
  
`;

const Wrapper = styled.div`
  display: flex;
  // flex-wrap: wrap;
  background: #ffffff;
  flex-direction:column;
  align-items: center;
  justify-content: space between;
`;
const Card = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 10px;
  border: solid 1px #dddddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  overflow: hidden;
  :hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 65%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;

`;
const Time = styled.button`
  position: absolute;
  width: 90px;
  height: 20px;
  border-radius: 10px;
  background: #01a5d7;
  color: white;
  border: none;
  font-size: 12px;
  outline: 0;
  margin: 5px 0 0 5px;

  :hover {
    cursor: pointer;
  }
`;

const Open = styled.button`
  position: absolute;
  left: 95px;
  width: 90px;
  height: 20px;
  border-radius: 10px;
  background: #01a5d7;
  color: white;
  border: none;
  font-size: 12px;
  outline: 0;
  margin: 5px 0 0 5px;

  :hover {
    cursor: pointer;
  }
`;

const Price = styled.div`
  position: absolute;
  bottom: 40px;
  font-weight: bold;
  font-size: 20px;
  padding-left: 5px;
  padding-top: 10px;
`;

const Details = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 8px;

  p {
    font-weight: bold;
    padding: 0 5px;

    small {
      font-weight: normal;
      color: grey;
      font-size: 12px;
    }
  }

  span {
    color: grey;
    font-size: 12px;
    padding-left: 10px;
  }
`;

const Address = styled.div`
  position: absolute;
  bottom: 10px;
  font-size: 12px;
  padding-left: 5px;
  color: grey;
`;
