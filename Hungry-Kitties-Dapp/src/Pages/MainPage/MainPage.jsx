import React from 'react';
import OurGoals from './OurGoals/OurGoals';
import HowItWorks from './HowItWorks/HowItWorks';
import Title from './Title/Title';
import Distribution from './Distribution/Distribution';
import JoinUs from './JoinUs/JoinUs';
function MainPage() {
    return (
        <>
        <Title/>
        <OurGoals/>
        <HowItWorks/>
        <Distribution/>
        <JoinUs/>
        </>

    );
}

export default MainPage;