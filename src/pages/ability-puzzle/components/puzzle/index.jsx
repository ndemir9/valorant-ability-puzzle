import React, { useState } from 'react'
import Finish from '../finish';
import QuestionRender from './components/QuestionRender';

const Puzzle = ({ question, selectedDifficultyiOption, allAgents }) => {

    const [questionData, setQuestionData] = useState(question)
    const [visibilityQuestion, setVisibilityQuestion] = useState(0);
    const [trueAnswer, setTrueAnswer] = useState(0)
    const [falseAnswer, setFalseAnswer] = useState(0)
    const [end, setEnd] = useState(false)

    return (
        <>

            {end ? <Finish trueAnswer={trueAnswer} falseAnswer={falseAnswer} /> : (
                <div className='mx-auto p-3 p-xl-0' style={{
                    width: "100%",
                    maxWidth: "768px"
                }}>
                    <QuestionRender trueAnswer={trueAnswer} setTrueAnswer={setTrueAnswer} allAgents={allAgents} selectedDifficultyiOption={selectedDifficultyiOption} questionData={questionData} visibilityQuestion={visibilityQuestion} setVisibilityQuestion={setVisibilityQuestion} setEnd={setEnd} falseAnswer={falseAnswer} setFalseAnswer={setFalseAnswer} />
                </div>
            )}
            <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">

                    </div>
                    <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </>
    )
}

export default Puzzle