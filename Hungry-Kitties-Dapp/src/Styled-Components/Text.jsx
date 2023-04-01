import styled from 'styled-components';

const Text = styled.h1`
  font-size: ${props => props.fsize || '2vw'};
  color: ${props => props.color || null};
  text-align: ${props => props.align || `center`};
  margin: ${props => props.margin || '0'};
  opacity: ${props => props.opacity || null};
  white-space: ${props => props.white_space || `pre-line`};
  font-weight: ${props => props.font_weight || `normal`};
`;

export default Text;