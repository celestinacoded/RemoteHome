import React from "react";
import styled from "styled-components";
import { RiHome2Fill } from "react-icons/ri";
import { data } from "./AgentData2";
import { BsChat } from "react-icons/bs";

const Agent1 = () => {
  return (
    <Container>
      <Wrapper>
      <Button2>
          <BsChat />
        </Button2>
        <WrapperContent>
          {data?.map((prop) => {
            const { id, agentName, agentCompany, img, agentRating } = prop;
            return (
              <Card key={id}>
                <AgentInfo>
                  <Image src={img} />
                  <AgentContact>
                    <AgentCompany>
                      <span>{<RiHome2Fill />}</span>
                      {agentCompany}
                    </AgentCompany>
                    <AgentName>{agentName}</AgentName>
                    <AgentRating>{agentRating}</AgentRating>
                  </AgentContact>
                </AgentInfo>
                <Button>Ask Question</Button>
              </Card>
            );
          })}
        </WrapperContent>
      </Wrapper>
    </Container>
  );
};
export default Agent1;



const Button2 = styled.div`
  background: #000d6b;

  border-radius: 50%;
  width: fit-content;
  padding: 20px;
  font-size: 25px;
  color: white;
  font-weight: bold;
  position: fixed;
  bottom: 40px;
  right: 30px;
  z-index: 1;
  cursor: pointer;
`;

const WrapperContent = styled.div`
//   display: flex;
  justify-content: center;
  align-items: center;
 
`;
const AgentContact = styled.div`
  // width: 150px;
  margin: 0 10px;
 
`;

const Button = styled.div`
  width: 200px;
  height: 30px;
  background: #0561eb;
  margin: 10px auto;
  font-size: 18px;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    background: #1b3154;
  }
`;
const AgentName = styled.div`
  width: 100px;
  margin: 5px 0;
  font-size: 25px;
  font-weight: 500;
`;
const AgentCompany = styled.div`
  font-size: 12px;

  span {
    margin-right: 5px;
    color: #0561eb;
  }
`;

const AgentRating = styled.div`
  color: #0561eb;
  font-size: 12px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;

  margin: 0 10px;
`;
const AgentInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 350px;
  height: 25vh;
  border: 1px solid lightgray;
  background: whitesmoke;
  padding: 20px;
  border-radius: 7px;
  margin: 0 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  // min-height: 50vh;
//   display: flex;
  justify-content: center;
  align-items: center;
//   flex-direction: column;
//   padding-top: 30px;
justify-content: space between;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  background: white;
`;
