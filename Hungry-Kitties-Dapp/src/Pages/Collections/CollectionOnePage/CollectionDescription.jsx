import React from 'react';
import Container from '../../../Styled-Components/Container';
import Text from '../../../Styled-Components/Text';
import SmallCard from './SmallCard';
import { COLOR_BLACK, COLOR_ORANGE } from '../../../Constants';

function CollectionDescription() {
    return (
        <Container flexDirection = "column" width = "50%" margin = "0 0" gap = "3vh" 
        marginBottom = "15vh"
        alignItems = "flex-start">
            <Text fsize = "10vh" margin_left = "3vw">
                Collection Name
            </Text>
            <Text fsize = "2vh" margin_left = "3.5vw" opacity = "0.8">
                Collection Description
            </Text>
            <Container flexDirection = "row" gap = "5vw" margin = "8rem 0" alignItems = "flex-end">
                <SmallCard height="25vh" bgcolor={COLOR_BLACK}/>
                <SmallCard height="30vh" bgcolor={COLOR_ORANGE}/>
                <SmallCard height="25vh" bgcolor={COLOR_BLACK}/>
            </Container>
        </Container>
    );
}

export default CollectionDescription;