import styled from "styled-components";
import { COLOR_ORANGE } from "../Constants";

const Button = styled.button`
  font-size: ${props => props.fontSize || "1.5vw"};
  padding: ${props => props.padding || "1vh 2vw"};
  color: ${props => props.color || null};
  background-color: ${props => props.backgroundColor || COLOR_ORANGE};
  border: ${props => props.border || null};
  border-radius: 20px;
  cursor: pointer;
`;

export default Button;