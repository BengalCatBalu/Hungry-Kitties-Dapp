import React from 'react';
import OurGoals from './OurGoals/OurGoals';
import HowItWorks from './HowItWorks/HowItWorks';
import Title from './Title/Title';
import Distribution from './Distribution/Distribution';
function MainPage() {
    return (
        <>
        <Title/>
        <OurGoals/>
        <HowItWorks/>
        <Distribution/>
        </>

    );
}

export default MainPage;