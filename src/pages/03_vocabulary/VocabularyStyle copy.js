import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import vocabulary from "../../assets/02_vocabulary/vocabulary.jpg"


const Wrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.marginsides} 0;
    padding: 3vw 10vw;;
    background-size: cover;
    background-image: url(${vocabulary});
    border-bottom: solid 2px white;
    display: flex;
    flex-direction: column;
`
    
const ColorLayer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.33;
    background-color: #828181;
    background-color: #F5F5F5;
`

const TopWrapper = styled.div`
    position: relative;
    margin-bottom: 3vw;
    z-index: 10;
    display: flex;
    justify-content: center;
    gap: 20px;
`

const TopButton = styled.button`
    width: 85px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #413D3B;
    font-size: 1.1rem;
    // color: #FB6A5D;
    color: #D76F66;
    color: #E7BEBE;
    color: #F4B8B8;
    border-radius: 5px;
    cursor: pointer;
`

const BottomWrapper = styled.div`
    position: relative;
    height: 400px;
    z-index: 10;
    display: flex;
    justify-content: center;
    gap: 4vw;
`

const LeftWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const LeftButton = styled(TopButton)`
    width: 150px;
`

const CentralWrapper = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 430px;
    padding: 20px 0 20px 40px;
    background-color: #5B5856;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 3px solid #413D3B;
    box-shadow: 0px 0px 3px #D6C9C9;
`

const InputsWrapper = styled.div`

`

const Input = styled.input`
    width: 120px;
    margin-right: 25px;
    background-color: #D6C9C9;
`

const WordsWrapper = styled.div`
    
`

const Word = styled.div`
    user-select: none;
    color: #D6C9C9;
    font-weight: 600;
    font-size: 1.2rem;
`

const WordSpan = styled.span`
    cursor: pointer;
    margin-right: 5px;
`

const TranslatSpan = styled.span`
    color: black;
    font-weight: 700;
`

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const LargeButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const LargeButton = styled(TopButton)`
    width: 200px;
    height: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #D6C9C9;
    color: white;
`

const MarksWrapper = styled.div`
    color: #D6C9C9;
    color: black;
    width: 200px;
    font-size: 1.2rem;
    font-weight: bold;
    text-shadow: white 0 0 6px ;
`

const StudentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
    
const TutorWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const MarksText = styled.div`

`

const MarksPercent = styled.div`

`


const ImageWrapper = styled.div`

`

const Image = styled.img`

`



   

export { Wrapper, ColorLayer,  TopWrapper, TopButton, BottomWrapper, LeftWrapper, LeftButton, CentralWrapper, InputsWrapper, Input, WordsWrapper, Word, WordSpan, TranslatSpan, RightWrapper, LargeButtonsWrapper, LargeButton, MarksWrapper, StudentWrapper, TutorWrapper, MarksText, MarksPercent, ImageWrapper, Image }