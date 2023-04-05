import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Section from '../../../Styled-Components/Section';
import Text from '../../../Styled-Components/Text';
import { useParams } from 'react-router-dom';


function CollectionPage() {
    return (
        <Section color = "white">
            <Text>
                Collection Page
            </Text>
        </Section>
    );
}

export default CollectionPage;