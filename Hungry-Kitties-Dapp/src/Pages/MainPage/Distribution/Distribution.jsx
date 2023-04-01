import React from 'react';
import Section from '../../../Styled-Components/Section';
import Text from '../../../Styled-Components/Text';
import {COLOR_BLACK, COLOR_WHITE, MEDIUM_TITLE_TEXT } from '../../../Constants';
import Container from '../../../Styled-Components/Container';
import Image from '../../../Styled-Components/Image';
import KIFT from '../../../assets/kift.webp';
import Diagram from './Diagram';

function Distribution() {
    return (
        <Section bgcolor={COLOR_BLACK} txtcolor={COLOR_WHITE} width="100%">
            <Text margin = "4rem" fsize = {MEDIUM_TITLE_TEXT}>
                Distribution
            </Text>
            <Diagram/>
        </Section>
    );
}

export default Distribution;