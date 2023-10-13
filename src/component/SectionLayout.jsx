import React, { useState } from 'react'
import './SectionLayout.css'
import { foodInfo } from '../data/cardData'
import Card from './ui/Card'
import { Modal } from 'antd'
import { nanoid } from 'nanoid'
import MyRate from './MyRate'


function SectionLayout() {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeData, setActiveData] = useState({})
    const showModal = (data) => {
        setModalOpen(!modalOpen)
        setActiveData(data)
        console.log(data);
    }

    return (
        <section>
            {foodInfo.map(info => {
                return (
                    <Card showModal={() => showModal(info)}  {...info} key={nanoid()} />)
            })}


            <Modal
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                <h2>{activeData.foodName}</h2>
                <p><img src={activeData.img} alt={activeData.alt} /></p>
                <p><b>Ready Time:</b> {activeData.maxReadyTime} minutes</p>
                <p><b>A quantity of food suitable for:</b> {activeData.serving} people </p>
                <p><b>Included Ingredients:</b>{activeData.includeIngredients}</p>
                <p ><b>Method:</b>{activeData.method}</p>
                <p className={!activeData.instructionsRequired ? 'no' : 'yes'}><b>Instructions Required : {!activeData.instructionsRequired ? 'No' : 'Yes'}</b></p>
                <p><b>{activeData.match}</b></p>
                <MyRate ranking={activeData.ranking} />
            </Modal>
        </section>
    )
}

export default SectionLayout