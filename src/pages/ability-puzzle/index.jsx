import React, { useState, useEffect } from 'react'
import Puzzle from "./components/puzzle"
import { fetchAllData } from "../../utils/api"
import { randomDataFunc } from '../../helpers'

const AbilityPuzzle = () => {

    const [startPuzzle, setStartPuzzle] = useState(false)
    const [allAgents, setAllAgents] = useState();
    const [question, setQuestion] = useState();
    const [selectedDifficultyiOption, setSelectedDifficultyiOption] = useState('EASY');

    function allAgentsData() {
        fetchAllData('/agents?language=tr-TR')
            .then(async (res) => {
                const response = await res.json()
                if (response.status === 200) {
                    setAllAgents(response.data)
                }
            })
    }

    function handleStart() {
        setStartPuzzle(!startPuzzle)
        const randomData = randomDataFunc(allAgents, 9, 22)
        setQuestion(randomData)
    }


    function DifficultyRender() {
        return (
            <>
                <div className='mt-5 text-center'>
                    <b>Zorluk derecesi</b>
                </div>
                <div className='mt-3 d-flex gap-3' style={{ flexWrap: "wrap" }}>
                    <div>
                        <label className="form-check-label d-flex gap-2" htmlFor="EASY">
                            <input className="form-check-input" type="radio"
                                name="Difficulty"
                                value="EASY"
                                id="EASY"
                                checked={selectedDifficultyiOption === 'EASY'}
                                onChange={(e) => setSelectedDifficultyiOption(e.target.value)} />
                            Kolay ( Yetenek ismi ve fotoğrafı )
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label d-flex gap-2" htmlFor="NORMAL">
                            <input className="form-check-input" type="radio"
                                name="Difficulty"
                                value="NORMAL"
                                id="NORMAL"
                                checked={selectedDifficultyiOption === 'NORMAL'}
                                onChange={(e) => setSelectedDifficultyiOption(e.target.value)}
                            />
                            Normal ( Sadece yetenek fotoğrafı )
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label d-flex gap-2" htmlFor="HARD">
                            <input className="form-check-input" type="radio"
                                name="Difficulty"
                                value="HARD"
                                id="HARD"
                                checked={selectedDifficultyiOption === 'HARD'}
                                onChange={(e) => setSelectedDifficultyiOption(e.target.value)} />
                            Zor ( Sadece yetenek ismi. )
                        </label>
                    </div>
                </div>
            </>
        )
    }


    useEffect(() => {
        allAgentsData()
    }, [])


    return (
        <>
            <div className='py-5'>
                {
                    startPuzzle ? <Puzzle question={question} selectedDifficultyiOption={selectedDifficultyiOption} /> : (
                        <>
                            <div className='container min-vh-100  d-flex align-items-center justify-content-center'>
                                <div>
                                    <h1 className='text-center mb-5'>Valorant Yetenek Bulmacası</h1>
                                    <DifficultyRender />
                                    <button onClick={handleStart} className='mt-5 mx-auto d-block btn btn-outline-primary px-5 py-2'>Başla!</button>
                                </div>
                            </div>

                        </>
                    )
                }
            </div>

        </>
    )
}

export default AbilityPuzzle