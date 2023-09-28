import { styled } from "styled-components";

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
div{
  display: flex;
  align-items: center;
}
input {
  height: 33px;
  margin: 0 5px;
}
@media (max-width: 768px) {
h1{
  font-size: 20px;
}
}
`;

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center
`;