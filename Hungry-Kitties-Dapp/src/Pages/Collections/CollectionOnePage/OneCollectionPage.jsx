import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Section from '../../../Styled-Components/Section';
import Text from '../../../Styled-Components/Text';
import Image from '../../../Styled-Components/Image';
import { useParams } from 'react-router-dom';
import Container from '../../../Styled-Components/Container';
import { COLOR_BLACK, COLOR_WHITE } from '../../../Constants';
import CollectionDescription from './CollectionDescription';


function CollectionPage() {
    return (
        <Section bgcolor = "green" txtcolor = {COLOR_WHITE} min_height = "80vh" width = "100%">
            <Container height = "100%" gap = "0" margin = "0 0">
                <CollectionDescription/>
                <Image src = {"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWLVtPn9x15TJ5ouqzyBNNQhws2vBCnN26GXxc8wvNagd/img-5133.webp"} width = "50%"/>
            </Container>
        </Section>
    );
}

export default CollectionPage;