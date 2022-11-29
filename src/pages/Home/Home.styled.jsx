import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const MainContainer = styled(Flex)`
  flex-direction: row;
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;
export const Card = styled(Flex)`
  flex-direction: column;
  height: 30rem;
  width: 43rem;
  background: ${({ theme }) => theme.colors.cardBgColor};
  padding: 0.5rem;
  border-radius: 3px;
  margin: 0.7rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  overflow-x: scroll !important;
  position: relative;
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;

export const CardTable = styled(Flex)`
  flex-direction: column;
  height: 45rem;
  width: 90%;
  background: ${({ theme }) => theme.colors.cardBgColor};
  padding: 0.5rem;
  border-radius: 3px;
  margin: 0.7rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;
