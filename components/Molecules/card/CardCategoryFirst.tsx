import React from 'react'
import { TCardCategoryFirst } from '../../utils/types'

const CardCategoryFirst = ({ image, title, onClick, active } : TCardCategoryFirst) => {
    return (
        <div className='card-category-first' onClick={onClick}>
            <img src={image} alt='food and drink' className='image-content' />

            <h6 className={`title-content margin-b-16 margin-t-8 ${active ? 'active' : 'nonactive'}`}>{title}</h6>
            {active && (
                <div className='carousel-current-active'></div>
            )}
        </div>
    )
}

export default CardCategoryFirst
