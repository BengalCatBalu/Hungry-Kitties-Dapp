import styled from 'styled-components';

const Section = styled.section`
    min-height: ${props => props.min_height || `80vh`};
    width:${props => props.weight || `100%`};;
    background-color: ${props => props.bgcolor || `white`};
    color: ${props => props.txtcolor || 'black'};
    display: ${props => props.display || `flex`};
    flex-direction: ${props => props.flex_dir || `column`};
    justify-content: ${props => props.justify_content || `center`};
    align-items: ${props => props.justify_content || `center`};;
    position: relative; 
`;

export default Section;