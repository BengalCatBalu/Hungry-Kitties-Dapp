import React from 'react';
import { useState, useEffect } from 'react';
import Section from '../../Styled-Components/Section';
import Text from '../../Styled-Components/Text';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TitlePart from './TitlePart/TitlePart';


function Collections() {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
            axios.get('http://localhost:4000/api/collections')
                .then((response) => {
                    setCollections(response.data);
                }).catch((error) => {
                    console.log(error);
                }
            );
    }, []);

    return (
        <div>
            <TitlePart/>
            {collections && collections.map((collection) => (
                <Section color = "white">
                    <Link to = {`/collections/${collection._id}`}>
                        <Text>
                            {collection.name}
                        </Text>
                    </Link>
                </Section>
            ))}
        </div>
    );
}

export default Collections;