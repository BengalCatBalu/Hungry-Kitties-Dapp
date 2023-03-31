import styled from "styled-components";

const SvgImage = styled.svg`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  
  fill: ${(props) => props.fill || "none"};
  stroke: ${(props) => props.stroke || "none"};

  stroke-width: ${(props) => props.strokeWidth || "1px"};
`;

export default SvgImage;
