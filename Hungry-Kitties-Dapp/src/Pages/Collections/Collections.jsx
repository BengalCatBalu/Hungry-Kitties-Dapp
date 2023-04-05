import React from 'react';
import { useState, useEffect } from 'react';
import Section from '../../Styled-Components/Section';
import Text from '../../Styled-Components/Text';
import axios from 'axios';


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
            <h1>
                Collections
            </h1>
            {collections && collections.map((collection) => (
                <Section color = "white">
                    <h1>
                        {collection.name}
                    </h1>
                </Section>
            ))}
        </div>
    );
}

export default Collections;