import React from 'react'
import { ICardMenuSecond } from '../../utils/types'

const CardMenuSecond : React.FC<ICardMenuSecond> = ({ name, path, description, startPrice, endPrice, newMenu, bestseller, listLabel , category }) => {
    return (
        <div className='card-menu-second'>
            <div className='card-menu-second-detail'>detail</div>
            <div className='card-menu-second-pricing'>pricing</div>
        </div>
    )
}

export default CardMenuSecond
