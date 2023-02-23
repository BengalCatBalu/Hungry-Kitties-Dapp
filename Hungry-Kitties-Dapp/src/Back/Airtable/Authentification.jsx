import React, { useEffect } from 'react';
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } from '../../Constants';
import Airtable from 'airtable';

const base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_ID);

function Authentification() {
    
    useEffect(() => {
        base(AIRTABLE_TABLE_NAME).select({view:"Grid view"})
        .eachPage((records, fetchNextPage) => {
            console.log(records);
            fetchNextPage();
        })

    }, [])
    
    return (
        <div>

        </div>
    );
}

export default Authentification;