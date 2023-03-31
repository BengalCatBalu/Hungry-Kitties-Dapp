import styled from 'styled-components';
import Container from '../../../Styled-Components/Container';
import Text from '../../../Styled-Components/Text';


const CardUp = ({ link, position, name }) => {
    return (
        <Container marginBottom = "10vh"
        flexDirection="column" width = "20vw" height = '30vh' 
        bgcolor = "red" gap = "5vh" padding = "1vh" borderRadius = "40px"
        margin = "0 0">
            <Text>
                Card 1
            </Text>
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

export default CardUp;