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
            <Container gap = "7vw" margin = "4vh 4vh">
                <Card
                title = "Charity"
                description = "By buying and selling NFT art, you can help those in need: a portion of the proceeds goes to charity."
                />
                <Card 
                title = "Charity"
                description = "By buying and selling NFT art, you can help those in need: a portion of the proceeds goes to charity."
                />
                <Card 
                title = "Charity"
                description = "By buying and selling NFT art, you can help those in need: a portion of the proceeds goes to charity."
                />
            </Container>
            <Container gap = "7vw" margin = "15vh 15vh" marginBottom = "10vh"> 
                <Card
                title = "Charity"
                description = "By buying and selling NFT art, you can help those in need: a portion of the proceeds goes to charity."
                />
                <Card
                title = "Charity"
                description = "By buying and selling NFT art, you can help those in need: a portion of the proceeds goes to charity."
                />
                <Card 
                title = "Charity"
                description = "By buying and selling NFT art, you can help those in need: a portion of the proceeds goes to charity."
                />
            </Container>
        </Section>
    );
}

export default OurGoals;