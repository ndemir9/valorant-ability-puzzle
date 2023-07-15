import React from 'react'
import { NUMBER_OF_QUESTIONS } from '../../../../utils/constants'

const Finish = ({ falseAnswer }) => {

    return (
        <div className='text-center position-fixed left-0 top-0 d-flex align-items-center justify-content-center' style={{ height: "100vh", width: "100%" }}>
            <div>
                <p>{NUMBER_OF_QUESTIONS + 1} soruda toplam <b className='text-danger'>{falseAnswer}</b> adet yanlış cevap verdin :)</p>
                <button className='btn btn-primary' onClick={() => window.location.href = '/'}>Tekrar oyna</button>
            </div>
        </div>
    )
}

export default Finish