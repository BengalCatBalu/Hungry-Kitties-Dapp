import React from 'react';
import Section from '../../../Styled-Components/Section';
import Text from '../../../Styled-Components/Text';
import { COLOR_BLACK, COLOR_WHITE, LOCAL_TITLE_TEXT, MEDIUM_TEXT, MEDIUM_TITLE_TEXT } from '../../../Constants';
import Container from '../../../Styled-Components/Container';
import Box from '../../../Styled-Components/Box';
import { Link } from 'react-router-dom';

import Image from '../../../Styled-Components/Image';
import KIFT from '../../../assets/kift.webp';
import Diagram from './Diagram';
import Button from '../../../Styled-Components/Button';

function Distribution() {
    return (
        <Section bgcolor={COLOR_BLACK} txtcolor={COLOR_WHITE} width="100%">
            <Text margin="4rem" fsize={MEDIUM_TITLE_TEXT}>
                Distribution
            </Text>
            <Container gap="10vw">
                <Container width="30%" textAlign="flex-start" flexDirection="column">
                    <Text fsize={LOCAL_TITLE_TEXT} align="left">
                        It is important to note that the percentage for shelters and the team
                        may vary up or down depending on the agreement with a particular shelter.
                        But we will always give almost all of the funds to shelters.
                        {'\n\n\n\n'}
                        It is also important to add that we are an open source project, you can check
                        the honesty of our contracts personally
                    </Text>
                    <Container gap="2%">
                            <Button width="49%">
                                <Text fsize="1.5vw" font_weight="1200">
                                    Check our Site
                                </Text>
                            </Button>
                        <Button width="49%">
                            <Text fsize="1.5vw" font_weight="1200">
                                Check our GitHub
                            </Text>
                        </Button>
                    </Container>
                </Container>
                <Diagram />
            </Container>
        </Section>
    );
}

export default Distribution;