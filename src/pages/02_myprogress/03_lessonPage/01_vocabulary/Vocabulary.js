import { useState } from "react"
import { Frame, Word, EngWord, UkrWord } from "./VocabularyStyle"
import { TwoThousand } from "../../../../components/01_config/TwoThousand"
import { HeadingSection, WrapperSection } from "../LessonStyle"
// import Word from "./01_Word"


const Vocabulary = () => {

  const [selectedWords, setSelectedWords] = useState(
    TwoThousand.filter(val => val.id <= 35)
  )

  const clickWord = (e) => {
    setSelectedWords(selectedWords.map(val =>
        val.id === Number(e.target.id) ? { ...val, display_translat: val.display_translat === "none" ? "block" : "none" } : val
    ))
}

  return (
    <WrapperSection>
        <HeadingSection>
        Vocabulary
        </HeadingSection>
        <Frame>
        {selectedWords.map((value, index) => (
                    <Word key={index} onClick={clickWord}>
                      <EngWord id={value.id}>
                      {value.word}
                      </EngWord>
                      <UkrWord style={{display: value.display_translat}}>
                        {value.translat}
                      </UkrWord>
                    </Word>
                ))}
        </Frame>
    </WrapperSection>
  )
}

export default Vocabulary