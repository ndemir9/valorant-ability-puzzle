import React from 'react'
import { randomDataFunc } from '../../../../../../helpers'

function AbilitiesRender({ abilities, selectedDifficultyiOption }) {
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


export default AbilitiesRender