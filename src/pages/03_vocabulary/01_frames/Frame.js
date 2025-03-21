import { useState, useEffect } from "react"
import { FramesWrapper, Frame, CheckButtonFrame, LanguageButtonsWrapper, LanguageButton, InputWordWrapper, WordWrapper, Input, Word, WordSpan, TranslatSpan, LargeButtonsWrapper, LargeButton, NumberButtonWrapper, TopButton, BottomButton, PercentButton, ProgressBar, Percent } from "./FrameStyle"
import { colors } from "../../../components/01_config/Colors"

const FrameComponent = ({ startTestMode, listOfWordsMode, twoThousand, setTwoThousand }) => {

    const [thousand, setThousand] = useState("First Thousand")
    const [tens, setTens] = useState(
        twoThousand.filter(val => val.id % 10 === 0).map(val => ({id: val.id, color: colors.green}))
    )
    const [hundreds, setHundreds] = useState(
        twoThousand.filter(val => val.id % 100 === 0).map(val => ({id: val.id, color: colors.green}))
    )
    const [topNumbers, setTopNumbers] = useState([])
    const [bottomNumbers, setBottomNumbers] = useState([])
    const [topNumber, setTopNumber] = useState("1")
    const [bottomNumber, setBottomNumber] = useState("1")
    const [bottomButtonValue, setBottomButtonValue] = useState(10)
    const [language, setLanguage] = useState("Eng")
    const [percent, setPercent] = useState()

    const setThousandButton = (e) => {
        let id = e.target.id
        setThousand(id === "first" ? "First Thousand" : "Second Thousand")
        setTopNumbers(id === "first" ? hundreds.filter(val => (val.id <= 1000)) : hundreds.filter(val => (val.id > 1000)))
        setBottomNumbers(id === "first" ? tens.filter(val => (val.id <= 100)) : tens.filter(val => (val.id > 1000 && val.id <= 1100)))
        setTopNumber(1)
        setBottomNumber(1)
        setBottomButtonValue(id === "first" ? 10 : 1010)
    }

    const clickLanguage = (e) => {
        if (e.target.id === "Eng") {
            setLanguage("Eng")
        } else {
            setLanguage("Ukr")
        }
    }

    const clickInputButton = (e) => {
        let newArr = [...twoThousand]
        newArr[e.target.id].correctStudent = !newArr[e.target.id].correctStudent
        setTwoThousand(newArr)
    }

    const fillInput = (e) => {
        let newArr = [...twoThousand]
        newArr[e.target.id].input = e.target.value
        setTwoThousand(newArr)
    }

    const clickWord = (e) => {
        setTwoThousand(twoThousand.map(val =>
            val.id === Number(e.target.id) ? { ...val, display_translat: val.display_translat === "none" ? "block" : "none" } : val
        ))
    }

    const clickTopButton = (e) => {
        setTopNumber(Number(e.target.id) + 1 || 1)
        setBottomNumbers(tens.filter(val => (val.id <= Number(e.target.name) && val.id > (Number(e.target.name) - 100))))
        setBottomButtonValue(Number(e.target.name) - 90)
        setBottomNumber(1)
    }

    const clickBottomButton = (e) => {
        setBottomNumber(Number(e.target.id) + 1 || 1)
        setBottomButtonValue(Number(e.target.name))
    }

    useEffect(() => {
        let e = { target: { id: "first" } }
        setThousandButton(e)
    }, [])

    useEffect(() => {
        let tenIndex
        let hundredIndex
        let newTens
        let newHundreds
        twoThousand.forEach(el => {
            if(el.id % 10 === 0) {
                for(let i = el.id-10; i < el.id; i++) {
                    if(!twoThousand[i].correctTutor) {
                        tenIndex = tens.map(val => val.id).indexOf(el.id)
                        newTens = [...tens]
                        if(newTens[tenIndex].color != "white") {
                            newTens[tenIndex].color="white"
                            setTens(newTens)
                        }
                        break
                    }
                }
            }
        })
        tens.forEach(el => {
            if(el.id % 100 === 0) {
                for (let i = (el.id/10 - 10); i < el.id/10; i++) {
                    if(tens[i].color === "white") {
                        hundredIndex = hundreds.map(val => val.id).indexOf(el.id)
                        newHundreds = [...hundreds]
                        if(newHundreds[hundredIndex].color !== "white") {
                            newHundreds[hundredIndex].color = "white"
                            setHundreds(newHundreds)
                        }
                    }
                }
            }
        })
        setPercent(Math.round((twoThousand.filter(val => val.correctTutor).length/twoThousand.length)*100))
    }, [...twoThousand.map(val => val.correctTutor)])

    return (
        <FramesWrapper startTestMode={startTestMode} listOfWordsMode={listOfWordsMode}>
            <Frame>
                <LanguageButtonsWrapper>
                    <LanguageButton onClick={clickLanguage} language={language} id="Eng">English</LanguageButton>
                    <LanguageButton onClick={clickLanguage} language={language} id="Ukr">Ukrainian</LanguageButton>
                </LanguageButtonsWrapper>
                {twoThousand.filter(val => val.id <= bottomButtonValue && val.id > (bottomButtonValue - 10)).map((value, index) => (
                    <Word key={index}>
                        <CheckButtonFrame
                            onClick={clickInputButton}
                            correctStudent={value.correctStudent}
                            correctTutor={value.correctTutor}
                            id={value.id - 1}
                            style={{display: "inline"}}
                        >
                        </CheckButtonFrame>
                        <InputWordWrapper>
                        <Input
                            type="text"
                            data-input={value.input}
                            data-translat={value.translat}
                            data-word={value.word}
                            autocomplete="off"
                            id={value.id - 1}
                            style={{ "backgroundColor": (language === "Ukr" && value.input === value.word) || (language === "Eng" && value.input === value.translat) ? `${colors.green}` : "" }}
                            value={value.input}
                            onInput={fillInput}
                        />
  
                        <WordWrapper>
                        <WordSpan style={{ color: value.correctTutor ? colors.greenWord : "black" }} id={value.id} onClick={clickWord}> {value.id}. {language === "Eng" ? value.word : value.translat}</WordSpan> 

                        <TranslatSpan style={{ display: value.display_translat }}>{language === "Eng" ? value.translat : value.word}</TranslatSpan>

                        </WordWrapper>
                        </InputWordWrapper>
                    </Word>
                ))}
            </Frame>
            <Frame>
                <LargeButtonsWrapper>
                    <LargeButton
                        onClick={setThousandButton}
                        thousand={thousand}
                        id="first"
                    >
                        First Thousand
                    </LargeButton>
                    <LargeButton
                        thousand={thousand}
                        id="second"
                        onClick={setThousandButton}
                    >
                        Second Thousand
                    </LargeButton>
                </LargeButtonsWrapper>
                <NumberButtonWrapper>
                    {topNumbers.map((value, index) => (
                        <TopButton key={index} name={value.id} topNumber={topNumber} id={index} style={{backgroundColor: value.color}} onClick={clickTopButton}>{value.id}</TopButton>
                    ))
                    }
                </NumberButtonWrapper>
                <NumberButtonWrapper>
                    {bottomNumbers.map((value, index) => (
                        <BottomButton key={index} id={index} name={value.id} bottomNumber={bottomNumber} style={{backgroundColor: value.color}} onClick={clickBottomButton}>{value.id}</BottomButton>
                    ))
                    }
                </NumberButtonWrapper>
                <LargeButtonsWrapper>
                    <PercentButton> <ProgressBar percent={percent}/> <Percent> {percent} % </Percent> </PercentButton>
                </LargeButtonsWrapper>
            </Frame>
        </FramesWrapper>
    )
}

export default FrameComponent

