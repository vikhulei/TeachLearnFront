import { useState } from "react"
import { Wrapper, Header, Title, MainText, LargeCircle, MediumCircle, SmallCircle, ImageWrapper, Image } from "./VocabularyStyle"
import { TwoThousand } from "./TwoThousand"
import picture from "./home.jpg"
import FrameComponent from "./01_frames/Frame"
import Memorizing from "./03_memorizing/Memorizing"
import Test from "./02_test/Test"


const Vocabulary = () => {

    const [twoThousand, setTwoThousand] = useState(TwoThousand)
    const [tenWords, setTenWords] = useState(TwoThousand.filter(val => val.id <= 10).map(val => ({ ...val, engCorrect: false, ukrCorrect: false })))

    const [startTestMode, setStartTestMode] = useState(false)
    const [listOfWordsMode, setListOfWordsMode] = useState(false)

    return (
        <Wrapper>
            <Header>
                Vocabulary
            </Header>
            <Title>World-Class solution for learning a language</Title>
            <MainText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.
            </MainText>

            <Test
            TwoThousand={TwoThousand}
            twoThousand={twoThousand}
            setTwoThousand={setTwoThousand}
            tenWords={tenWords}
            setTenWords={setTenWords}
            startTestMode={startTestMode}
            setStartTestMode={setStartTestMode}
            listOfWordsMode={listOfWordsMode}
            setListOfWordsMode={setListOfWordsMode}
            />
 
            <FrameComponent 
                startTestMode={startTestMode}
                listOfWordsMode={listOfWordsMode}
                twoThousand={twoThousand}
                setTwoThousand={setTwoThousand}
            />
            <LargeCircle />
            <MediumCircle />
            <SmallCircle />
            <ImageWrapper>
                <Image src={picture} />
            </ImageWrapper>
            <Title>Memorizing Process</Title>

            <Memorizing />
        </Wrapper>
    )
}

export default Vocabulary


