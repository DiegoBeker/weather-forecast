import { styled } from "styled-components";

export const CardContainer = styled.div`
display: flex;
justify-content: space-between;
background-color: blueviolet;
border-radius: 10px;
margin: 50px 0;
padding: 10px;
width: 100%;
`;

export const LeftContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
`;

export const RightContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-left: 80px;
`

export const CityName = styled.p`
margin: 0;
font-size: 18px;
`
export const Temperature = styled.h2`
margin: 10px 0;
font-size: 32px;
`