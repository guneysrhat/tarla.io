import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";

export const Container = styled(Flex)`
  position: absolute;
  left: 75%;
  top: 40%;
  transform: translate(-50%, -50%);
  height: 400px;
  width: 600px;
  background: #f2f2f2;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 20px 8px #d0d0d0;
`;

export const Title = styled.h1`
  font-weight: 900;
  text-align: center;
`;
