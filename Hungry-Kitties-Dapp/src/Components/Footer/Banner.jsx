import React from 'react';
import styled from 'styled-components'
import { BUTTON_TEXT, COLOR_BLACK, COLOR_WHITE, LOCAL_TITLE_TEXT } from '../../Constants';
import Text from '../../Styled-Components/Text';

const Section = styled.section`
    width:95vw;
    margin-left: 2.5vw;
    border-radius: 40px;
    height:50vh;
    position: relative;
    border: 2px solid ${props => props.theme.text};

    background-color: ${props => `rgba(${COLOR_WHITE}, 0.6)`};
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    @media (max-width: 64em) {
        height: 25vh;
        width: 100%;
        border-radius: 0px;
        margin-left: 0vw;
    }

`
const ButtonContainer = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 1vh;
    justify-content: center;
    align-items: flex-end;
    margin-top: 2vh;
    font-size: ${props => props.theme.fontxxxl};

`

const ImgContainer = styled.div`
    width:100vw;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.2;

    img{
        width: 25vw;
        height: auto;
        @media (max-width: 64em) {
            height: 25vh;
            width: auto;
        }
    }
`

const Title = styled.h1`
    font-size: ${LOCAL_TITLE_TEXT};
    color: ${COLOR_WHITE};
    padding: 1rem 2rem;
    z-index: 10;
    width: 35%;
    @media (max-width: 64em) {
        font-size: 5vw;
    }
`
const Btn = styled.button`
    display: flex;
    width: 15vw;
    background-color: ${COLOR_WHITE};
    color: ${COLOR_BLACK};
    outline: none;
    border: none;
    white-space: nowrap;
    font-size: ${BUTTON_TEXT};
    justify-content: center;
    align-items: center;
    padding: 0.9rem 1rem;
    border-radius: 50px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;


    &:hover{
        transform: scale(0.9);
    }
    @media (max-width: 64em) {
        font-size: 2.5vw;
        width: 25vw;
        :hover{
            transform: none;
        }
    }
`

function Banner() {
    return (
        <Section>
            <ImgContainer>
                <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWLVtPn9x15TJ5ouqzyBNNQhws2vBCnN26GXxc8wvNagd/img-5133.webp"} alt="The Hungry Kitties" />
                <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWLVtPn9x15TJ5ouqzyBNNQhws2vBCnN26GXxc8wvNagd/img-5134.webp"} alt="The Hungry Kitties" />
                <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWLVtPn9x15TJ5ouqzyBNNQhws2vBCnN26GXxc8wvNagd/img-5124.webp"} alt="The Hungry Kitties" />
                <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWLVtPn9x15TJ5ouqzyBNNQhws2vBCnN26GXxc8wvNagd/img-5133.webp"} alt="The Hungry Kitties" />
                <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWLVtPn9x15TJ5ouqzyBNNQhws2vBCnN26GXxc8wvNagd/img-5127.webp"} alt="The Hungry Kitties" />
                <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWLVtPn9x15TJ5ouqzyBNNQhws2vBCnN26GXxc8wvNagd/img-5123.webp"} alt="The Hungry Kitties" />
            </ImgContainer>
            <Title>
                Describe your experience
            </Title>
            <ButtonContainer>
                <a href="https://4a89rkoz1ve.typeform.com/to/LfVpTa6X">
                    <Btn>
                        <Text fsize = {BUTTON_TEXT} font_weight = "1200"> Describe </Text>
                    </Btn>
                </a>
                <a href="https://4a89rkoz1ve.typeform.com/to/ubTZDERp">
                    <Btn>
                        <Text fsize = {BUTTON_TEXT} font_weight = "1200">
                            Suggest your Shelter
                        </Text>
                    </Btn>
                </a>
            </ButtonContainer>
        </Section>
    );
}

export default Banner;