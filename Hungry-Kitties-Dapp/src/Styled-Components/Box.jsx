import styled from 'styled-components';
import { COLOR_BLACK } from '../Constants';

const Box = styled.div`
    background-color: ${props => props.bgcolor ? props.bgcolor : COLOR_BLACK};
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    border: ${props => props.border ? props.border : 'none'};
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    padding: ${props => props.padding ? props.padding : '0'};
    text-align: ${props => props.textAlign ? props.textAlign : 'center'};
    border-radius: ${props => props.borderRadius ? props.borderRadius : '0'};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : 'none'};
`;

export default Box;