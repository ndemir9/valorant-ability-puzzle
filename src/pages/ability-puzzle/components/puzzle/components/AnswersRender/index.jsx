import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { NUMBER_OF_QUESTIONS } from '../../../../../../utils/constants'

function AnswersRender({ trueAnswer, setTrueAnswer, correctAnswer, falseAnswer, setFalseAnswer, allAgents, visibilityQuestion, setVisibilityQuestion, setEnd }) {
    function handleApprove(characterName) {
        if (characterName?.toLowerCase() === correctAnswer.toLowerCase()) {
            if (visibilityQuestion == NUMBER_OF_QUESTIONS) {
                setEnd(true)
                toast.success('Doğru!')
            } else {
                setVisibilityQuestion(visibilityQuestion + 1)
                toast.success('Doğru!')
            }
            setTrueAnswer(trueAnswer + 1)
            toast.success('Doğru!')
        } else {
            setFalseAnswer(falseAnswer + 1)
            toast.error('Yanlış!')
        }
    }

    useEffect(() => {
    }, [falseAnswer])


    function SearchCharacterRender() {

        const [searchTerm, setSearchTerm] = useState('');
        const [filteredCharacters, setFilteredCharacters] = useState([]);

        const handleInputChange = (event) => {
            const input = event.target.value;
            setSearchTerm(input);

            const filteredData = allAgents?.filter(character =>
                character.displayName.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredCharacters(filteredData);
        };

        const handleInputClick = () => {
            setSearchTerm('');
            setFilteredCharacters([]);
        };

        return (
            <div className='w-100'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onClick={handleInputClick}
                    placeholder="Karakter ara..."
                    className='p-3 rounded border'
                    style={{
                        width: "100%",
                        background: "transparent",
                    }}
                />

                {filteredCharacters.length > 0 ? (
                    <div>
                        <div className='row px-1 py-4'>
                            {filteredCharacters.map((character, index) => (
                                <div onClick={() => handleApprove(character.displayName)} key={index} className='col-12 px-2 d-flex align-items-center p-2 rounded mt-2 characterSearchItem'>
                                    <img style={{ width: 75, height: 75 }} src={character.displayIcon} alt={character.displayName} />
                                    {/* <h3 className='ps-3'>{character.displayName}</h3> */}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }



    return (
        <div className='py-5'>
            <div className='d-flex gap-3'>
                <SearchCharacterRender />
            </div>
        </div>
    )
}


export default AnswersRender