import React from 'react'

const Finish = ({ trueAnswer, falseAnswer }) => {



    return (
        <div className='text-center position-fixed left-0 top-0 d-flex align-items-center justify-content-center' style={{ height: "100vh", width: "100%" }}>
            <div>
                <p className='text-success'>{trueAnswer} doğru cevap</p>
                <p className='text-danger'>{falseAnswer} yanlış cevap</p>
                <button className='btn btn-primary' onClick={() => window.location.href = '/'}>Tekrar oyna</button>
            </div>
        </div>
    )
}

export default Finish