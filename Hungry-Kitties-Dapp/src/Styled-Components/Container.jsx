import styled from 'styled-components';
import { COLOR_BLACK } from '../Constants';

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};
  padding: ${props => props.padding ? props.padding : '0'};
  margin: ${props => props.margin ? props.margin : '0 auto'};
  background-color: ${props => props.bgcolor ? props.bgcolor : COLOR_BLACK};
  display: flex;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'wrap'};
  gap: ${props => props.gap ? props.gap : '10vw'};
`;

export default Container;