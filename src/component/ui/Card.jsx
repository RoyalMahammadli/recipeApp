import React, { useState } from 'react'
import './Card.css'
import MyRate from '../MyRate'
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";

function Card({ foodName, img, ranking, showModal, match }) {
    const [heartClicked, setHeartClicked] = useState(false)
    const heartHandle = (e,) => {
        e.preventDefault();
        e.stopPropagation();
        setHeartClicked(!heartClicked)
    }

    return (
        <div className='card' onClick={showModal} >
            <figure >
                <img src={img} alt="" />

                <div className="match">{match}</div>
                <div className="box" onClick={heartHandle}>{!heartClicked ? <AiOutlineHeart color='white' /> : <BsFillArrowThroughHeartFill color='yellowgreen' />}</div>
            </figure>
            <div className="text">
                <h3>{foodName}</h3>
                <p style={{ position: 'absolute', top: '0' }}>{!heartClicked ? '' : 'My favorite'}</p>
                <MyRate ranking={ranking} />
            </div>




        </div>
    )
}

export default Card