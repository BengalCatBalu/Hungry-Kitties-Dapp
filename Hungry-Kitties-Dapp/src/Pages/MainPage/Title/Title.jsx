import React from 'react';
import { COLOR_BLACK, COLOR_ORANGE, COLOR_WHITE, GLOBAL_TITLE_TEXT} from '../../../Constants.js';
import Section from '../../../Styled-Components/Section.jsx';
import Text from '../../../Styled-Components/Text.jsx';
import SpecialText from '../../../Styled-Components/SpecialText.jsx';
import Container from '../../../Styled-Components/Container.jsx';
import Button from '../../../Styled-Components/Button.jsx';
import Marquee from './Marquee.jsx';
import image from '../../../assets/background.png'


function Title() {
    return (
        <Section bgcolor = {COLOR_BLACK} txtcolor = {COLOR_WHITE} width = "100%" min_height = "90vh">
            <SpecialText fsize = {GLOBAL_TITLE_TEXT} stroke = {`0.4vh ${COLOR_ORANGE}`} fill = {COLOR_BLACK} >
                Hungry Kitties
            </SpecialText>
            <Text fsize = '15vh' font_weight = "1100">
                KIFT PLATFORM
            </Text>
            <Text opacity = {`0.5`} margin = "1rem">
                Transforming digital art into tangible {"\n"} impact with Hungry Kitties charitable NFTs.
            </Text>
            <Container margin = "4rem" >
                <Button bgcolor = {COLOR_WHITE} border = "0px" color = {COLOR_BLACK} width = "17vw">
                    <Text font_weight = "1200">
                        How it works
                    </Text>
                </Button>
                <Button bgcolor = {COLOR_WHITE} border = "0px" color = {COLOR_BLACK} width = "17vw">
                    <Text font_weight = "1200">
                        Distribution
                    </Text>
                </Button>
            </Container>
        </Section>
    );
}

export default Title;