import React from 'react';
import Container from '../../../Styled-Components/Container';
import Text from '../../../Styled-Components/Text';

function CollectionDescription() {
    return (
        <Container flexDirection = "column" width = "50%" bgcolor = "red" margin = "0 0" gap = "7vh">
            <Text fsize = "8vh">
                Collection Name
            </Text>
            <Text fsize = "4vh">
                Collection Description
            </Text>
            <Container flexDirection = "row" gap = "5vw">
                <Text fsize = "4vh">
                    Button1
                </Text>
                <Text fsize = "4vh">
                    Button2
                </Text>
                <Text fsize = "4vh">
                    Button3
                </Text>
            </Container>
        </Container>
    );
}

export default CollectionDescription;