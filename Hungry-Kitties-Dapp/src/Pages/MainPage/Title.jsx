import React from 'react';
import { COLOR_BLACK, COLOR_ORANGE, COLOR_WHITE, VERY_BIG_TEXT } from '../../Constants.js';
import Section from '../../Styled-Components/Section.jsx';
import Text from '../../Styled-Components/Text.jsx';
import SpecialText from '../../Styled-Components/SpecialText.jsx';
import Container from '../../Styled-Components/Container.jsx';
import Button from '../../Styled-Components/Button.jsx';


function Title() {
    return (
        <Section bgcolor = {COLOR_BLACK} txtcolor = {COLOR_WHITE}>
            <SpecialText fsize = {VERY_BIG_TEXT} stroke = {`0.4vh ${COLOR_ORANGE}`} fill = {COLOR_BLACK} >
                Hungry Kitties
            </SpecialText>
            <Text fsize = '15vh'>
                KIFT PLATFORM
            </Text>
            <Text opacity = {`0.5`}>
                Transforming digital art into tangible {"\n"} impact with Hungry Kitties charitable NFTs.
            </Text>
            <Container>
                <Button color>
                    First
                </Button>
                <Button>
                    Second
                </Button>
            </Container>
        </Section>
    );
}

export default Title;