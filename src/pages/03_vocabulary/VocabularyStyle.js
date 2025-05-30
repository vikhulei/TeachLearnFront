import styled, { css } from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import { colors } from "../../components/01_config/Colors"
// import { Heading } from "../01_home/section2/HomeSection2Style";
import { MainHeading, MainBodyText, MainWrapper } from "../../components/01_config/MainStyles";

const Wrapper = styled(MainWrapper)`
`

const GenericButton = styled.button`
    width: 150px;
    height: 35px;
    background-color: transparent;
    border: 2px solid ${colors.greyFrame};
    color: black;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        font-size: 0.76rem;
        border-width: 3px;
    }
    &:active {
        transform: translate(1px, 1px);
    }
`

const Header = styled.div`
    position: relative;
    padding: 50px;
    background-color: ${colors.mainDark};
    color: white;
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    @media(max-width: 800px) {
        padding: 30px 0;
        text-align: center;
        font-size: 2rem
    }
`

const Title = styled(MainHeading)`
`

const MainText = styled(MainBodyText)`
    z-index: 20;
`

const Word = styled.div`
    user-select: none;
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
`

const WordSpan = styled.span`
    margin-right: 5px;
    cursor: pointer;
    &:hover {
        font-weight: 750;
    }
`

const LargeCircle = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 300px;
    top: 300px;
    right: 10vw;
    background-color: rgba(217, 217, 217, 0.6);
    z-index: 10;
`

const MediumCircle = styled(LargeCircle)`
    width: 200px;
    height: 200px;
    top: 800px;
    left: 47vw;
`

const SmallCircle = styled(LargeCircle)`
    width: 50px;
    height: 50px;
    top: 600px;
    left: 42vw;
`

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    @media(max-width: 800px) {
        height: 15vh;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`


export { Wrapper, Header, Title, MainText, LargeCircle, MediumCircle, SmallCircle, ImageWrapper, Image, GenericButton, Word, WordSpan }
