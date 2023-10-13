import React from 'react'
import './SectionLayout.css'
import { foodInfo } from '../data/cardData'
import Card from './ui/Card'


function SectionLayout() {
    return (
        <section>
            {foodInfo.map(info => {
                return (
                    <Card  {...info} />
                )
            })}
        </section>
    )
}

export default SectionLayout