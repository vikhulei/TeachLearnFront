import styled from "styled-components";
import { colors } from "../../../components/01_config/Colors";

const RoadmapContainer = styled.div`
  position: relative;
`
    
  const CurveLineWrapper = styled.div`
    position: relative;
    width: 870px;
    height: 490px;
    margin: 0 auto;
    @media(max-width: 1000px) {
        width: 350px;
    }
`

const CurveLine = styled.div`
  position: absolute;
  margin-top: 24px;
  width: 800px;
  height: 100px;
  border: solid darkgrey 15px; 
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  @media(max-width: 1000px) {
    width: 280px;
    padding: 0 8px;
  }
`

const CurveLineRightOne = styled(CurveLine)`
  transform: translateX(70px);
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left: none;
  @media(max-width: 1000px) {
    transform: translateX(50px);
  }
`

const LineStart = styled(CurveLine)`
  display: none;
  @media(max-width: 1000px) {
    display: flex;
    width: 50px;
    border: none;
    border-top: solid darkgrey 15px;
    transform: translateX(10px);
  }
`

const CurveLineLeftOne = styled(CurveLine)`
  top: 85px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-right: none;
`

const CurveLineRightTwo = styled(CurveLineRightOne)`
  top: 170px;
`

const CurveLineLeftTwo = styled(CurveLineLeftOne)`
  top: 255px;
`

const CurveLineRightThree = styled(CurveLineRightOne)`
  top: 340px;
`

const LineFinish = styled(CurveLineLeftOne)`
  top: 425px;
  height: 50px;
  border-bottom: none;
`

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: ${colors.mainDark};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  cursor: pointer;
  @media(max-width: 1000px) {
    width: 40px;
    height: 40px;
  }
`

const Start = styled(Circle)`
  position: absolute;
  top: 0px;
  left: 22px;
  @media(max-width: 1000px) {
    top: 8px;
    left: 8px;
  }
`

const Finish = styled(Start)`
  top: 465px;
  left: -15px;
`
  
const Step = styled(Circle)`
  margin-top: -38px;
  @media(max-width: 1000px) {
    margin-top: -30px;
  }
`    
    export { LineStart, RoadmapContainer, CurveLineWrapper, CurveLineRightOne, CurveLineLeftOne, CurveLineRightTwo, CurveLineLeftTwo, CurveLineRightThree, Circle, Step, Start, Finish, LineFinish }


    // position: absolute;
    // bottom: 0px;
    // right: -20px;
    // @media(max-width: 1000px) {
    //   bottom: 8px;
    //   right: 0px;
    // }