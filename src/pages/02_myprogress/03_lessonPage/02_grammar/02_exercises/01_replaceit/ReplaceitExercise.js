import { useState } from "react"
import { Frame, FrameHeading, Icon, SentenceWrapper, Text, BoldWord, EngWord, UkrWord, BoldWordWrapper  } from "./ReplaceitExerciseStyle"
import replace from "./replace.png"
import { ReplaceitExerciseData } from "./ReplaceitExerciseData"

const ReplaceitExercise = () => {

    const [replaceitExerciseData, setReplaceitExerciseData] = useState(
      ReplaceitExerciseData.filter(val => val.id <= 35)
    )

  const clickReplaceWord = (e) => {
    setReplaceitExerciseData(replaceitExerciseData.map(val =>
        val.id === Number(e.currentTarget.id) ? { ...val, display_translat: val.display_translat === "none" ? "block" : "none", display_word: val.display_word === "block" ? "none" : "block"} : val
    ))
}

    return (
        <Frame>
            <FrameHeading>replace it</FrameHeading>
            <Icon src={replace} />
            {replaceitExerciseData.filter(val => val.lesson === 1).map((value, index) => (
                <SentenceWrapper key={index}>
                    <Text>{value.beginning}&nbsp;</Text>
                    <BoldWordWrapper id={value.id} onClick={clickReplaceWord}>

                        <BoldWord name={value.display_word} style={{ display: value.display_word }}>
                            {value.word}
                        </BoldWord>
                        <BoldWord style={{ display: value.display_translat }}>
                            {value.translat}
                        </BoldWord>
                    </BoldWordWrapper>
                    <Text>&nbsp;{value.ending}</Text>
                </SentenceWrapper>
            ))}
        </Frame>
    )
}

export default ReplaceitExercise