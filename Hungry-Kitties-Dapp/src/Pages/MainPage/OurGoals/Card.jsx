import styled from 'styled-components';
import { COLOR_ORANGE } from '../../../Constants';
import Container from '../../../Styled-Components/Container';
import Text from '../../../Styled-Components/Text';
import SvgImage from '../../../Styled-Components/SvgImage';


const Card = ({ link, image, name }) => {
    return (
        <Container flexDirection="column" 
        width = "20vw" height = '30vh' bgcolor = "red" 
        gap = "5vh" padding = "1vh" borderRadius = "40px"
        margin = "0 0"
        >
            <SvgImage src = "../../../assets/Icons/blockchain.svg" width = "10vw" height = "10vh" />
            <Container flexDirection="column" gap = "5vh" >
                <Text>
                    Title
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida ex non ullamcorper maximus.
                </Text>
            </Container>
        </Container>
    );
};

export default Card;