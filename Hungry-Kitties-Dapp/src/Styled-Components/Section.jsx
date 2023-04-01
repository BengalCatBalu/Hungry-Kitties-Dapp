import styled from 'styled-components';

const Section = styled.section`
    padding: ${props => props.padding || `0`};
    margin: ${props => props.margin || `0`};
    min-height: ${props => props.min_height || `80vh`};
    width:${props => props.width || `100%`};
    background-color: ${props => props.bgcolor || `white`};
    color: ${props => props.txtcolor || 'black'};
    display: ${props => props.display || `flex`};
    flex-direction: ${props => props.flex_dir || `column`};
    justify-content: ${props => props.justify_content || `center`};
    align-items: ${props => props.justify_content || `center`};
    font-size: ${props => props.size_text || null};
    font-weight: ${props => props.weight_text || null};
    position: relative; 
`;

export default Section;