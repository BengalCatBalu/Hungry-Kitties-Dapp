import React from 'react';
import Section from '../../../Styled-Components/Section';
import SpecialText from '../../../Styled-Components/SpecialText';
import { COLOR_BLACK, COLOR_ORANGE, COLOR_WHITE, GLOBAL_TITLE_TEXT } from '../../../Constants';
import Container from '../../../Styled-Components/Container';
import Text from '../../../Styled-Components/Text';
import Button from '../../../Styled-Components/Button';
import Image from '../../../Styled-Components/Image';

function TitlePart() {
    return (
        <Section bgcolor={COLOR_BLACK} txtcolor={COLOR_WHITE} width="100%" min_height="85vh">
            <Container margin="0 0" gap="0vw">
                <Container flexDirection="column" margin="0 0" width="50%" gap = "1vh" alignItems = "flex-start">
                    <SpecialText fsize={"6.5vh"} stroke={`0.1vh ${COLOR_ORANGE}`} fill={COLOR_BLACK} margin_left = "3vw">
                        Explore Unique Collections
                    </SpecialText>
                    <Text fsize = "2.5vh" margin_left = "3.5vw" opacity = "0.6">
                        Explore our ecosystem and help make the world a better place.
                    </Text>
                    <Button margin_top = "10vh" margin_left = "25%" fsize = "1.5vw" width = "50%">
                        Scroll Down
                    </Button>
                </Container>
                <Image src = {"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWLVtPn9x15TJ5ouqzyBNNQhws2vBCnN26GXxc8wvNagd/img-5133.webp"} width = "50%"/>
            </Container>
        </Section>
    );
}

export default TitlePart;