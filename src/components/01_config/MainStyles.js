import styled from "styled-components"
import { sizes } from "./Sizes"
import { colors } from "./Colors"

const MainWrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.margins_desk} 0;
    background-color: #F6F6FB;
    display: flex;
    flex-direction: column;
    gap: ${sizes.marginsections};
    padding-bottom: ${sizes.marginsections};
    @media(max-width: 800px) {
        margin: ${sizes.headerhight_mobile} 0 0;
        
    }
`

const MainSectionWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${sizes.marginsections};
    align-items: center;
`

const MainHeader = styled.div`
    position: relative;
    padding: 50px;
    background-color: ${colors.myprogress};
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

const MainBodyText = styled.div`
    font-size: 1.3rem;
    line-height: 1.8;    
    color: black;
    padding: 0 ${sizes.sections_mob_marginsides};
    text-align: justify;
`

const MainBodyTextColumn = styled(MainBodyText)`
    text-align: left;
    padding: 0;
`

const MainHeading = styled.div`
    font-size: 2.1rem;
    font-weight: bold;
    color: black;
    padding: 0 ${sizes.sections_mob_marginsides};
`

const MainHeadingColumn = styled(MainHeading)`
    padding: 0;
`

const MainHeadingCapital = styled.div`
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: bold;
`

const MainHeadingColor = styled(MainHeadingCapital)`
    color: #044AEF;
    font-size: 1.4rem;
`

const MainButton = styled.button`
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

const OutlineButton = styled.button`
    width: 240px;
    height: 70px;
    font-size: 1.1rem;
    color: white;
    border: #D34E4E solid 4px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
    @media(max-width: 800px) {
        width: calc(30px + 60vw);
        height: 8vh;
    }
`

const MainFrameWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    align-items: stretch;
`

const MainFrame = styled.div`
    width: 400px;
    max-width: 90vw;
    height: fit-content;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 10px #D6C9C9;
    @media(max-width: 800px) {
        width: 90vw;
    }
`

const MainFrameImage = styled(MainFrame)`
    margin: 0;
    padding: 20px;
    width: 400px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`

const MainImage = styled.img`
    width: 100%;
`

const MainText = styled.div`
    font-size: 1.4rem;
    text-wrap: nowrap;
    -webkit-tap-highlight-color: transparent;
`

const MainInput = styled.input`
    position: relative;
    width: 150px;
    height: 24px;
    background-color: lightgrey;
    @media(max-width: 1200px) {
        max-width: 300px;
        width: calc(120px + 15vw);
    }
`

const MainCorrect = styled.div`
    color: red;
    font-size: 1rem;
    line-height: 1;
`

const MainSentenceWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    max-width: 400px;
    line-height: 0.7;
`

const MainQuestion = styled.div`
    font-size: 1.1rem;
    text-wrap: nowrap;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
`

const MainDashedInput = styled.input`
    background-color: rgba(0, 0, 0, 0);
    height: 20px;
    max-width: 300px;
    border: 0;
    border-bottom: dashed 2px black;
    font-size: 1.1rem;
    font-style: italic;
    line-height: 0.5;
    outline: none;
    text-align: center;
`

export { MainWrapper, MainSectionWrapper, MainHeader, MainBodyText, MainBodyTextColumn, MainHeading, MainHeadingColumn, MainHeadingCapital, MainHeadingColor, MainButton, OutlineButton, MainFrameWrapper, MainFrame, MainFrameImage, MainText, MainImage, MainInput, MainCorrect, MainSentenceWrapper, MainQuestion, MainDashedInput }