import React from "react";
import styled from "styled-components";
import Logo from '../../Images/logo.webp'

const Container = styled.div`
    display: flex;
    height: 150vh;
    flex-direction: row;

    @media screen and () {
        flex-direction: column;
  }
`;

const LeftBlock = styled.div`
    width: calc(100% *2/5);
    background-color: red;
    display: flex;
    justify-content: center;

`;

const RightContainer = styled.div`
    width: calc(100% * 3/5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and () {
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: 50%;
  }
`;

const TopRightBlock = styled.div`
    height: 40%;
    background-color: blue;

    @media screen and () {
        height: 100%;
        width: 30%;
  }
`;

const BottomRightBlock = styled.div`
    height: 60%;
    background-color: green;

    @media screen and () {
        height: 100%;
        width: 30%;
  }
`;

const TextinBlock = styled.p`
    color: white;
    font-size: 24px;
`;

const ImageinBlock = styled.img`

    max-width: 100%;
    max-height: 50%;
`;



const Account = () => {
  return (
    <Container>
        <LeftBlock>
            <ImageinBlock src = {Logo}></ImageinBlock>
            <TextinBlock></TextinBlock>
        </LeftBlock>
        <RightContainer>
        <TopRightBlock>

        </TopRightBlock>
        <BottomRightBlock />
      </RightContainer>
    </Container>
  );
};

export default Account;