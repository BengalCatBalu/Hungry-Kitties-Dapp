import styled from 'styled-components';

const SpecialText = styled.p`
  font-size: ${({ fontSize = '2vw' }) => fontSize}; 
  color: ${({ color = 'black' }) => color}; 
  text-shadow: ${({ textShadow = 'none' }) => textShadow}; 
  -webkit-text-stroke: ${({ stroke = 'none' }) => stroke}; 
  text-stroke: ${({ stroke = 'none' }) => stroke}; 
  -webkit-text-fill-color: ${({ fill = 'none' }) => fill}; 
  text-fill-color: ${({ fill = 'none' }) => fill}; 
`;

export default SpecialText;