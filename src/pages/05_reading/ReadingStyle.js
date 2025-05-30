import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";


const Wrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.margins_desk} 0;
    height: 100vh;
    border-bottom: white solid 2px;
    @media(max-width: 800px) {
        height: calc(100vh - ${sizes.headerheight});
        margin: ${sizes.headerheight} 0 0;
    }
`

const ImageWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ColorLayer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(7, 43, 91, 0.87);
    z-index: 10;
`

const Text = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    color: white;
    z-index: 20;
    @media(max-width: 800px) {
        font-size: 2rem;
        line-height: 2;
    }
`


export { Wrapper, ImageWrapper, Image, ColorLayer, Text }