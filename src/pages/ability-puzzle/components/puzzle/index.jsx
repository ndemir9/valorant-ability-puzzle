import React, { useEffect, useState } from 'react'
import { randomDataFunc } from '../../../../helpers'
import Finish from '../finish';

const Puzzle = ({ question, selectedDifficultyiOption }) => {


    const [questionData, setQuestionData] = useState(question)
    const [visibilityQuestion, setVisibilityQuestion] = useState(0);
    const [trueAnswer, setTrueAnswer] = useState(0)
    const [falseAnswer, setFalseAnswer] = useState(0)
    const [end, setEnd] = useState(false)
    // const [trueModal, setTrueModal] = useState(false)
    // const [falseModal, setFalseModal] = useState(false)


    function AbilitiesRender({ abilities }) {
        const randomAbilitiesData = randomDataFunc(abilities, 0, 4)
        return (
            <div className='d-flex align-items-center flex-column justify-content-center'>


                {selectedDifficultyiOption === "EASY" &&
                    <>
                        <img src={randomAbilitiesData?.[0].displayIcon} className='d-block img-fluid' style={{ width: 150, height: 150 }} />
                        <p className='pt-5'>{randomAbilitiesData?.[0].displayName}</p>
                    </>
                }

                {selectedDifficultyiOption === "NORMAL" && <img src={randomAbilitiesData?.[0].displayIcon} className='d-block img-fluid' style={{ width: 150, height: 150 }} />}


                {selectedDifficultyiOption === "HARD" && <p className='pt-5'>{randomAbilitiesData?.[0].displayName}</p>}

            </div>
        )
    }

    function AnswersRender({ correctAnswer }) {

        const [answer, setAnswer] = useState()

        const allAgentsName = ["GEKKO", "FADE", "BREACH", "RAZE", "CHAMBER", "KAY/O", "SKYE", "CYPHER", "SOVA", "KILLJOY", "HARBOR", "VIPER", "PHOENIX", "ASTRA", "BRIMSTONE", "NEON", "YORU", "SAGE", "REYNA", "OMEN", "JETT"]

        function handleApprove() {
            if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
                if (visibilityQuestion == 9) {
                    setEnd(true)
                } else {
                    setVisibilityQuestion(visibilityQuestion + 1)
                }
                setTrueAnswer(trueAnswer + 1)
                setTrueModal(true)
                alert("doğru cevap!!!")
            } else {
                if (visibilityQuestion == 9) {
                    setEnd(true)
                } else {
                    setVisibilityQuestion(visibilityQuestion + 1)
                }
                setFalseAnswer(falseAnswer + 1)
                alert("yanlış cevap!!!")
            }
        }


        return (
            <div className='py-5'>
                <div className='d-flex gap-3' style={{ flexWrap: "wrap" }}>
                    {
                        allAgentsName?.map((item) => (
                            <div style={{ minWidth: 100 }}>
                                <label className="form-check-label d-flex gap-2" htmlFor={item}>
                                    <input className="form-check-input" type="radio"
                                        name="answer"
                                        value={item}
                                        id={item}
                                        checked={answer === item}
                                        onChange={(e) => setAnswer(e.target.value)} />
                                    {item}
                                </label>
                            </div>
                        ))
                    }
                </div>
                <button className='btn btn-outline-success d-block w-100 mt-5' onClick={() => handleApprove()}>Onayla</button>
            </div>
        )
    }

    function QuestionRender() {


        const handleNextClick = () => {
            if (visibilityQuestion < 9)
                setVisibilityQuestion(visibilityQuestion + 1)
        };
        const handlePrevClick = () => {
            if (visibilityQuestion > 0)
                setVisibilityQuestion(visibilityQuestion - 1)
        };

        const handleFinishClick = () => {
            setEnd(true)
        };

        console.log(questionData.length)
        return (
            <div>
                {
                    questionData?.map((item2, index) => (
                        <>
                            {visibilityQuestion == index && (
                                <div key={index} className='p-5 border rounded mb-3'>
                                    <h3>{index + 1}. Soru</h3>
                                    <AbilitiesRender abilities={item2.abilities} />
                                    <AnswersRender correctAnswer={item2.displayName} index={index} />
                                </div>
                            )}
                        </>

                    ))

                }
                <div className='d-flex align-items-center justify-content-between'>

                    {visibilityQuestion == 9 && <button className='btn btn-outline-success' onClick={() => handleFinishClick()}>Bitir</button>}
                </div>
            </div>
        )
    }

    function handleApproval() {

    }

    return (
        <>

            {end ? <Finish trueAnswer={trueAnswer} falseAnswer={falseAnswer} /> : (
                <div className='container'>
                    <h4 className='text-center mb-4'>Hangi şampiyonun yeteneği?</h4>
                    <QuestionRender />
                </div>
            )}
            {/* {
                trueModal && (
                    <div className='top-0 left-0 position-fixed d-flex flex-column align-items-center justify-content-center p-5' style={{ zIndex: 9999, width: "100vw", height: "100vh", background: "rgba(0,0,0,.5" }}>
                        <div className='p-5 rounded' style={{ background: "#212529", border: "1px solid rgba(255, 255, 255, 0.15)", width: "100%", maxWidth: 500, minHeight: 200 }}>
                            <div><h3 className='text-center'>Doğru cevap!</h3></div>
                            <button onClick={() => handleApproval()} className='btn btn-outline-success d-block w-100 mt-5'>Sonraki</button>
                        </div>
                    </div>
                )
            }
            {
                falseModal && (
                    <div className='top-0 left-0 position-fixed d-flex flex-column align-items-center justify-content-center p-5' style={{ zIndex: 9999, width: "100vw", height: "100vh", background: "rgba(0,0,0,.5" }}>
                        <div className='p-5 rounded' style={{ background: "#212529", border: "1px solid rgba(255, 255, 255, 0.15)", width: "100%", maxWidth: 500, minHeight: 200 }}>
                            <div><h3 className='text-center'>Yanlış cevap!</h3></div>
                            <button onClick={() => handleApproval()} className='btn btn-outline-success d-block w-100 mt-5'>Sonraki</button>
                        </div>
                    </div>
                )
            } */}

        </>
    )
}

export default Puzzle