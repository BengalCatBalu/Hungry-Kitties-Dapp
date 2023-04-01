import styled from 'styled-components';
import { COLOR_BLACK, COLOR_ORANGE, COLOR_WHITE } from '../../../Constants';
import Container from '../../../Styled-Components/Container';
import Text from '../../../Styled-Components/Text';
import SvgImage from '../../../Styled-Components/SvgImage';
import Charity from '../../../Images/charity.webp';
import Image from '../../../Styled-Components/Image'

const Card = ({ link, image, name, title, description }) => {
    return (
        <Container flexDirection="column" 
        width = "20vw" height = '30vh' bgcolor = {COLOR_BLACK}
        gap = "5vh" padding = "2vh" borderRadius = "40px"
        margin = "0 0" box_shadow = "0 2vh 5vh rgba(255, 255, 255, 0.3)"
        
        >
            <Image src = {Charity}
            ></Image>
            <Container flexDirection="column" gap = "5vh" bgcolor="rgba(255, 255, 255, 0)" borderRadius ="20%">
                <Text color = {COLOR_ORANGE}
                font_weight = "bold">
                    {title}
                </Text>
                <Text fsize = "3vh"
                margin = "5vh">
                    {description}
                </Text>
            </Container>
        </Container>
    );
};

export default Card;