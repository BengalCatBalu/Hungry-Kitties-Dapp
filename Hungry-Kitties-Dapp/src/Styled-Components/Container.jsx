import styled from 'styled-components';
import { COLOR_BLACK } from '../Constants';

const Container = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '100%'};
  max-height: ${props => props.mxheight ? props.mxheight : '100%'};
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};
  padding: ${props => props.padding ? props.padding : '0'};
  margin: ${props => props.margin ? props.margin : '1rem auto'};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
  background-color: ${props => props.bgcolor ? props.bgcolor : COLOR_BLACK};
  display: ${props => props.display ? props.display : 'flex'};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'wrap'};
  gap: ${props => props.gap ? props.gap : '10vw'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '0'};
  border: ${props => props.border ? props.border : 'none'};
  border-color: ${props => props.borderColor ? props.borderColor : 'none'};
  box-shadow: ${props => props.box_shadow ? props.box_shadow : null}
`;

export default Container;