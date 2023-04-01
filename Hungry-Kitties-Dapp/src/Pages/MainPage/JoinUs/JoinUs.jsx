import React from 'react';
import Section from '../../../Styled-Components/Section';
import Text from '../../../Styled-Components/Text';
import { COLOR_BLACK, COLOR_WHITE, MEDIUM_TITLE_TEXT } from '../../../Constants';
import Container from '../../../Styled-Components/Container';
import Image from '../../../Styled-Components/Image';
import KIFT from '../../../assets/kift.webp';
import Box from '../../../Styled-Components/Box';
import Button from '../../../Styled-Components/Button';

function JoinUs() {
    return (
        <Section bgcolor={COLOR_BLACK} txtcolor={COLOR_WHITE} width="100%">
            <Text margin="2rem" fsize={MEDIUM_TITLE_TEXT}>
                Join Us
            </Text>
            <Container gap = "20vw">
                <Box width="45%">
                    <Image src={KIFT} borderRadius="50px" />
                    <Button width = "50%" margin = "1rem">
                        <Text fsize="1.5vw" font_weight="1200">
                            Mint
                        </Text>
                    </Button>
                </Box>
                <Text margin_right="15vw" >
                    card
                </Text>
            </Container>
        </Section>
    );
}

export default JoinUs;