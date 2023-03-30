import styled from 'styled-components';

const SpecialText = styled.p`
  font-size: ${props => props.fsize || '2vw'};
  color: ${props => props.color || null};
  text-align: ${props => props.align || null};
  margin: ${props => props.margin || '0'};
  text-shadow: ${props => props.margin || '0'}; 
  -webkit-text-stroke: ${props => props.stroke || null}; 
  //text-stroke: ${({ stroke = 'none' }) => stroke}; 
  -webkit-text-fill-color: ${props => props.fill || null};
  //text-fill-color: ${({ fill = 'none' }) => fill}; 
`;

export default SpecialText;