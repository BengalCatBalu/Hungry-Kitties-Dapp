import React from 'react';
import { COLOR_BLACK, COLOR_ORANGE, COLOR_WHITE, GLOBAL_TITLE_TEXT} from '../../../Constants.js';
import Section from '../../../Styled-Components/Section.jsx';
import Text from '../../../Styled-Components/Text.jsx';
import SpecialText from '../../../Styled-Components/SpecialText.jsx';
import Container from '../../../Styled-Components/Container.jsx';
import Button from '../../../Styled-Components/Button.jsx';
import Marquee from './Marquee.jsx';


function Title() {
    return (
        <Section bgcolor = {COLOR_BLACK} txtcolor = {COLOR_WHITE} width = "100%">
            <SpecialText fsize = {GLOBAL_TITLE_TEXT} stroke = {`0.4vh ${COLOR_ORANGE}`} fill = {COLOR_BLACK} >
                Hungry Kitties
            </SpecialText>
            <Text fsize = '15vh'>
                KIFT PLATFORM
            </Text>
            <Text opacity = {`0.5`}>
                Transforming digital art into tangible {"\n"} impact with Hungry Kitties charitable NFTs.
            </Text>
            <Container margin = "5rem" >
                <Button bgcolor = {COLOR_WHITE} border = "0px" color = {COLOR_BLACK} width = "15vw">
                    <Text font_weight = "1200">
                        First
                    </Text>
                </Button>
                <Button bgcolor = {COLOR_WHITE} border = "0px" color = {COLOR_BLACK} width = "15vw">
                    <Text font_weight = "1200">
                        Second
                    </Text>
                </Button>
            </Container>
            <Marquee>Hungry Kitties</Marquee>
        </Section>
    );
}

export default Title;