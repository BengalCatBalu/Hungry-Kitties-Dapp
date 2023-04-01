import React from 'react';
import Section from '../../../Styled-Components/Section';
import Text from '../../../Styled-Components/Text';
import { COLOR_BLACK, COLOR_WHITE, MEDIUM_TITLE_TEXT } from '../../../Constants';
import Container from '../../../Styled-Components/Container';
import Image from '../../../Styled-Components/Image';
import KIFT from '../../../assets/kift.webp';
import Box from '../../../Styled-Components/Box';

function HowItWorks() {
    return (
        <Section bgcolor={COLOR_BLACK} txtcolor={COLOR_WHITE} width="100%">
            <Text margin="4rem" fsize={MEDIUM_TITLE_TEXT}>
                How It Works
            </Text>
            <Container gap = "20vw">
                <Box width="45%">
                    <Image src={KIFT} borderRadius="50px" />
                </Box>
                <Text margin_right = "15vw" >
                    card
                </Text>
            </Container>
        </Section>
    );
}

export default HowItWorks;