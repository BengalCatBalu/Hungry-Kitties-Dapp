import styled from "styled-components";

const Underline = styled.span`
  position: relative;
  display: inline-block;
  transition: all 0.2s ease-in-out;

  &:hover {
    &:before {
      width: 100%;
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #000;
    transition: all 0.2s ease-in-out;
  }
`;

export default Underline;