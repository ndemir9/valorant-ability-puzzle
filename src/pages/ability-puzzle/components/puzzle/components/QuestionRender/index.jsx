import React from 'react'
import AbilitiesRender from '../AbilitiesRender';
import AnswersRender from '../AnswersRender';

function QuestionRender({ trueAnswer, setTrueAnswer, visibilityQuestion, setVisibilityQuestion, questionData, setEnd, selectedDifficultyiOption, falseAnswer, setFalseAnswer, allAgents }) {
    const handleFinishClick = () => {
        setEnd(true)
    };
    return (
        <div>
            {
                questionData?.map((item, index) => (
                    <>
                        {visibilityQuestion == index && (
                            <>
                                <div className='d-flex'>
                                    <h4>{index + 1}. Soru</h4>
                                    <h4 className='text-center mb-4' style={{ flex: 1 }}>Hangi şampiyonun yeteneği?</h4>
                                </div>
                                <div key={index} className='p-5 border rounded mb-3'>
                                    <AbilitiesRender abilities={item.abilities} selectedDifficultyiOption={selectedDifficultyiOption} />
                                    <AnswersRender trueAnswer={trueAnswer} setTrueAnswer={setTrueAnswer} visibilityQuestion={visibilityQuestion} setVisibilityQuestion={setVisibilityQuestion} allAgents={allAgents} correctAnswer={item.displayName} index={index} falseAnswer={falseAnswer} setFalseAnswer={setFalseAnswer} setEnd={setEnd} />
                                </div>
                            </>
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

export default QuestionRender