import React from 'react';
import {COLOR_BLACK, COLOR_WHITE, MEDIUM_TITLE_TEXT } from '../../../Constants';
import Container from '../../../Styled-Components/Container';
import Section from '../../../Styled-Components/Section';
import Text from '../../../Styled-Components/Text';
import Card from './Card';
import CardUp from './CardUp';

//import BlockchainImage from "../../../assets/Icons/blockchain.webp";
//import CoinImage from "../../../assets/Icons/coin.webp";
//import CommunityImage from "../../../assets/Icons/people.webp";
//import PetImage from "../../../assets/Icons/pethotel.webp";
//import TargetImage from "../../../assets/Icons/target.webp";
//import MountainsImage from "../../../assets/Icons/mountains.webp";





function OurGoals() {
    return (
        <Section bgcolor={COLOR_BLACK} txtcolor={COLOR_WHITE} width="100%">
            <Text margin = "4rem" fsize = {MEDIUM_TITLE_TEXT}>
                Our Goals
            </Text>
            <Container gap = "7vw">
                <Card/>
                <CardUp />
                <Card />
            </Container>
            <Container>
                <Card />
                <CardUp />
                <Card />
            </Container>
        </Section>
    );
}

export default OurGoals;