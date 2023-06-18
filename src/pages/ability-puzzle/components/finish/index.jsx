import React from 'react'

const Finish = ({ trueAnswer, falseAnswer }) => {



    return (
        <div className='text-center'>
            <p className='text-success'>{trueAnswer} doğru cevap</p>
            <p className='text-danger'>{falseAnswer} yanlış cevap</p>
            <button className='btn btn-primary' onClick={() => window.location.href = '/'}>Tekrar oyna</button>
        </div>
    )
}

export default Finish