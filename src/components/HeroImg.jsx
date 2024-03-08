import React from 'react'
import bg_img from '../images/hero_bg.jpg'
import { CONSTANTS } from '../constants'
function HeroImg() {
    return (
        <div className='w-100 position-relative user-select-none'>
            <img className='w-100' src={bg_img} alt={bg_img}/>

            <div className='position-absolute top-0 bottom-0 start-0 end-0 d-flex flex-column justify-content-center align-items-center'>
                
                    <h1 className='title' style={{textShadow : "4px 4px 10px #05bdcb"}}>{CONSTANTS.WEBAPP_TITLE} </h1>
                    <h5> "Empower Your Learning Journey with Interactive Quizzes"</h5>
                    <h6>Combining "quiz" with "ify" to indicate transformation or action.</h6>
            </div>
        </div>
    )
}

export default HeroImg