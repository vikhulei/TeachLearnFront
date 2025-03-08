import { Wrapper, Header, Heading, SubheadingCapital, FrameWrapper, Frame, Word, Image, FrameGrammar, FrameBoldWord, FrameFillIn, FrameModify, } from "./LessonStyle"
import { TwoThousand } from "../../../components/01_config/TwoThousand"
import tobe from "../../../assets/02_myprogress/lessons/01/tobe.jpg"
import rules from "../../../assets/02_myprogress/lessons/01/reading_rules.jpg"
import { BoldWords } from "./00_exercises/BoldWords"
import Grammar from "./02_grammar/Grammar"


const lessonParts = ["Vocabulary", "Grammar", "Reading", "Listening", "Speaking"]

const Lesson = () => {
    return (
        <Wrapper>
            <Header>
                MY PROGRESS
            </Header>
            <Heading>
                Lesson 3
            </Heading>
            {/* 
            {lessonParts.map((value, index) => (
                <SubheadingCapital key={index}>
                    {value}
                </SubheadingCapital>
            ))} */}

            <SubheadingCapital>
                Vocabulary
            </SubheadingCapital>
            <Frame>
                {TwoThousand.filter(val => val.id <= 50).map((value, index) => (
                    <Word key={index}>
                        {value.word}
                    </Word>
                ))}
            </Frame>

            <Grammar />

            {/* <SubheadingCapital>
                Grammar
            </SubheadingCapital>
            <FrameWrapper>
                <FrameGrammar>
                    <Image src={tobe} />
                </FrameGrammar>
                <FrameGrammar>
                    <Image src={rules} />
                </FrameGrammar>
                </FrameWrapper>
                <FrameBoldWord>
                    Hello
                </FrameBoldWord> */}

        </Wrapper>
    )
}

export default Lesson