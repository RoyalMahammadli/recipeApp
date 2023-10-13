import React from 'react'
import './Card.css'
import MyRate from '../MyRate'


function Card({ foodName, img, ranking, showModal }) {

    return (
        <div className='card' onClick={showModal} >
            <figure>
                <img src={img} alt="" />

                
                </figure>
            <div className="text">
                <h3>{foodName}</h3>
                <MyRate ranking={ranking} />
            </div>




        </div>
    )
}

export default Card