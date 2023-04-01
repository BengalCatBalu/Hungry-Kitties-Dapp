import styled from "styled-components";
import { COLOR_ORANGE } from "../Constants";

const Button = styled.button`
    display: inline-block;
    background-color: ${props => props.bgcolor || null};
    width: ${props => props.width || null};
    color: ${props => props.color || null};
    //outline: none;
    border: ${props => props.border || null};
    white-space: nowrap;
    font-size: ${props => props.fsize || '2vw'};
    justify-items: center;
    align-items: center;
    padding: 0.9rem 2.5rem;
    border-radius: 50px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;


    &:hover{
        transform: scale(0.9);
    }
    @media (max-width: 64em) {
        font-size: 2vw;
        :hover{
            transform: none;
        }
    }
`;

export default Button;