import styled from "styled-components";
import { MainWrapper, MainHeader, MainHeading, MainBodyText, OutlineButton,  } from "../../components/01_config/MainStyles";
import { sizes } from "../../components/01_config/Sizes";
import { colors } from "../../components/01_config/Colors";


const Wrapper = styled(MainWrapper)`
    // position: relative;
    // margin: ${sizes.headerheight} ${sizes.margins_desk} 0;
    // border-bottom: solid 2px white;
    // display: flex;
    // flex-direction: column;
    // gap: ${sizes.marginsections};
    // padding-bottom: ${sizes.marginsections};
    // @media(max-width: 800px) {
    //     margin: ${sizes.headerhight_mobile} 0 0;
        
    // }
`
const Header = styled(MainHeader)`
`

const MyRoadmapWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${sizes.marginsections}; 
    // background-color: red;   
`

const CurrentLessonButton = styled(OutlineButton)`
    color: black;
    position: absolute;
    right: ${sizes.sections_mob_marginsides};
    cursor: pointer;
    &:active {
        transform: translate(2px, 2px)
    }
`

const Title = styled(MainHeading)`
`

const MainText = styled(MainBodyText)`
    padding: 0 ${sizes.sections_mob_marginsides};
    z-index: 20;
    text-align: justify;
`

export { Wrapper, MyRoadmapWrapper, Header, CurrentLessonButton, Title, MainText }