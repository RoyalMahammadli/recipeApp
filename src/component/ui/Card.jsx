import React from 'react'
import './Card.css'
import MyRate from '../MyRate'
import  { useState } from 'react';
import {  Modal } from 'antd';

function Card({ foodName, img, ranking }) {
    const [modal2Open, setModal2Open] = useState(false);

    return (
        <div className='card' onClick={() => setModal2Open(true)}>
            <figure><img src={img} alt="" /></figure>
            <div className="text">
                <h5>{foodName}</h5>
                <MyRate ranking={ranking} />
                <Modal
                    title="Vertically centered modal dialog"
                    centered
                    open={modal2Open}
                    onOk={() => setModal2Open(false)}
                    onCancel={() => setModal2Open(false)}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    Salam
                </Modal>
            </div>



        </div>
    )
}

export default Card