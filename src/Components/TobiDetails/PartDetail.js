import React from 'react' 
import styled from 'styled-components' 
import img from "../../Image/female3.jpeg";
import img1 from "../../Image/female3.jpeg";
 
const PartDetail = () => { 
    return ( 
        <Container>
            <Wrapper>
        <ViewSectionDetail> 
            <DetailTextHolder1> 
                      <DetailText0> 
                          Contact the Agent 
                    </DetailText0>   
            </DetailTextHolder1> 
 
                        
                        <CardHolder> 
                            <Card> 
                                
                            <Image src={img}/>
                            <ButtonHolder> 
                            <Button1> 
                            Chat With Agent 
                            </Button1> 
                        </ButtonHolder> 
                            </Card> 

                            <Card> 
                            <Image src={img1}/> 
                            <ButtonHolder> 
                            <Button1> 
                            Request A Video Call
                            </Button1> 
                          </ButtonHolder>
                            </Card> 
                        </CardHolder> 
                        
        </ViewSectionDetail> 
        </Wrapper>
        </Container>
    ) 
} 
 
export default PartDetail 
 
const Wrapper  =  styled.div`
width: 100%;
background-color: rgb(230,235,243); 
justify-content: space between;
align-items: center;
margin-left: 100px;
`;
const Container  =  styled.div`
width:100%;
background-color: rgb(230,235,243);
`;
const Image = styled.img` 
width:430px; 
height:180px; 
background-color: white; 
` 
const Card  =  styled.div` 
overflow: hidden; 
margin:5px 5px; 
width: 430px; 
height:250px; 
border-radius: 20px 20px; 
background-color:blue; 
` 
 
const CardHolder = styled.div` 
margin:5px 5px; 
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
justify-content: center;

` 
 
// const Button2 = styled.button` 
// width:220px; 
// height: 46px; 
// // margin-left: 30px;
// border-radius: 20px 20px; 
// justify-content: center;
// align-items :center;
// /* position: relative; */ 
// overflow: hidden; 
// /* text-overflow: ellipsis; */ 
// /* white-space: nowrap; */ 
// /* display: block; */ 
// text-align: center; 
// transition: all 350ms; 
// // opacity: 1; 
// font-weight: bold; 
// cursor: pointer; 
// border: none; 
// margin:0px 5px; 
// color:blue; 
// font-size: 16px; 
// background-color:white;

 
// :hover { 
//     background-color:#ddd;
 
// ` 
const Button1 = styled.button` 
width:220px; 
height: 46px; 
border-radius: 20px 20px; 
background-color:white; 
/* position: relative; */ 
overflow: hidden; 
/* text-overflow: ellipsis; */ 
/* white-space: nowrap; */ 
/* display: block; */ 
text-align: center;
justify-content: centre; 
transition: all 350ms; 
// opacity: 1; 
font-weight: bold; 
cursor: pointer; 
color: blue; 
border: 1px solid blue; 
margin:5px 5px; 
font-size: 16px; 
margin-left: 100px;
 
:hover{ 
    background-color: #ddd; 
} 
 
` 
const ButtonHolder = styled.div` 
display: flex; 
justify-content: space-between; 

` 
// const DetailTextHolder2 = styled.div` 
// margin:5px 5px; 
// display: flex; 
// text-decoration-line: underline; 
// ` 
 
const DetailTextHolder1 = styled.div` 
margin:5px 5px; 
display: flex; 
justify-content: center; 
align-items: center; 
padding-top: 40px;
` 
 
const DetailText0 = styled.div` 
margin:5px 5px; 
font-weight: 700; 
font-size: 25px; 
` 
 
const ViewSectionDetail = styled.div` 
width: 475px; 
height: 100%; 
min-height: 100vh; 


`;