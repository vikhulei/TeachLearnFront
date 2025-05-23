import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Frame, FrameHeading, Icon, SentenceWrapper, Text, Correct, BoldWord, FixitInput  } from "./FixitExerciseStyle"
import fixit from "./fixit.png"
import { FixitExerciseData } from "./FixitExerciseData"
import { colors } from "../../../../../../components/01_config/Colors"

const FixitExercise = () => {

    const currentLesson = useSelector(state => state.lesson.currentLesson)

    const [grammarFixit, setFixitExerciseData] = useState(
        FixitExerciseData.filter(val => val.lesson === currentLesson)
    )

    const clickFixitWord = (e) => {
        setFixitExerciseData(grammarFixit.map(val =>
            val.id === Number(e.currentTarget.id) ? { ...val, visibility: val.visibility === "hidden" ? "visible" : "hidden" } : val
        ))
    }

    const fillInput = (e) => {
        let newGrammarFixit = [...grammarFixit]
        newGrammarFixit[e.currentTarget.id].input = 22
        newGrammarFixit[e.currentTarget.id].input = e.currentTarget.value
        setFixitExerciseData(newGrammarFixit)
    }

    useEffect(() => {
        setFixitExerciseData(FixitExerciseData.filter(val => val.lesson === currentLesson))
    }, [currentLesson])

    return (

        <Frame>
            <FrameHeading>fix it</FrameHeading>
            <Icon src={fixit} />
            {grammarFixit.map((value, index) => (
                <SentenceWrapper key={index}>
                    <Text id={value.id} onClick={clickFixitWord}>{value.sentence.beginning}&nbsp;</Text>
                    <BoldWord id={value.id} onClick={clickFixitWord}>{value.sentence.bold}&nbsp;</BoldWord>
                    <FixitInput
                        style={{color: value.input === value.sentence.correct ? `${colors.greenWord}` : ""}}
                        value={value.input}
                        id={index}
                        // id={value.id - 1}
                        onInput={fillInput}
                    />
                    <Correct style={{ visibility: value.visibility }}>&nbsp;{value.sentence.correct}</Correct>
                    <Text>&nbsp;{value.sentence.ending}</Text>
                </SentenceWrapper>
            ))}
        </Frame>

    )
}

export default FixitExercise