import styled from 'styled-components';

const Title = styled.h1`
  font-size: calc(1.5rem + 2vw);
  color: ${props => props.color || '#000'};
  text-align: ${props => props.align || 'left'};
  margin: ${props => props.margin || '0'};
`;

export default Title;