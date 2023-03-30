import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};
  padding: ${props => props.padding ? props.padding : '0'};
  margin: ${props => props.margin ? props.margin : '0 auto'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
  display: flex;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${props => props.alignItems ? props.alignItems : 'stretch'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'wrap'};
`;

export default Container;