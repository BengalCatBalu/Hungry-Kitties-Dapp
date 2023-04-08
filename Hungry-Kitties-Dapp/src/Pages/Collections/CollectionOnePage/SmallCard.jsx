import React from 'react';
import Container from '../../../Styled-Components/Container';
import Text from '../../../Styled-Components/Text';
import { COLOR_ORANGE } from '../../../Constants';

function SmallCard({text, image, funct, height, bgcolor }) {
    return (
        <Container width = "20%" bgcolor = {bgcolor} mxheight = {height} borderRadius = "20px" 
        box_shadow = "0 0vh 3vh rgba(255, 255, 255, 0.3)"
        margin = "0 0" gap = "2vh" >
            
            <Text>
                Подись
            </Text>
            <Text>
                кнопка
            </Text>
        </Container>
    );
}

export default SmallCard;