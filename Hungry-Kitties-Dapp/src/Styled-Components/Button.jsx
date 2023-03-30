import styled from "styled-components";

const Button = styled.button`
  font-size: ${props => props.fontSize || "1.5vw"};
  padding: ${props => props.padding || "1vh 2vw"};
  color: #fff;
  background-color: ${props => props.backgroundColor || "green"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Button;