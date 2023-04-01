import styled from 'styled-components';
import Container from '../../../Styled-Components/Container';
import Text from '../../../Styled-Components/Text';
import { COLOR_BLACK, COLOR_ORANGE } from '../../../Constants';
import Charity from "../../../Images/charity.webp";

const CardUp = ({ link, position, name, title, description }) => {
    return (
        <Container marginBottom = "10vh"
        flexDirection="column" width = "20vw" height = '30vh' 
        bgcolor = {COLOR_WHITE} gap = "5vh" padding = "1vh" borderRadius = "40px"
        margin = "0 0"
        box_shadow = "0 2vh 5vh rgba(255, 255, 255, 0.3)"
        >
            <Image src = {Charity}></Image>
            

            <Container flexDirection="column" gap = "5vh" bgcolor="rgba(255, 255, 255, 0)" borderRadius ="20%"
>
                <Text color = {COLOR_ORANGE}
                font_weight = "bold">
                    {title}
                </Text>
                <Text
                fsize = "3vh"
                margin = "5vh">
                    {description}
                </Text>
            </Container>
        </Container>
    );
};

export default CardUp;