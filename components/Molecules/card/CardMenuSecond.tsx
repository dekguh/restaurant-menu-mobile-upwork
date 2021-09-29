import React from 'react'
import ListLabelSecond from '../../Atomics/list/ListLabelSecond'
import { ICardMenuSecond } from '../../utils/types'

const CardMenuSecond : React.FC<ICardMenuSecond> = ({ name, path, description, startPrice, endPrice, newMenu, bestseller, listLabel , category, isAvailable }) => {
    return (
        <div className='card-menu-second'>
            <div className='card-menu-second-detail'>
                <h5 className='title margin-b-4'>{name}</h5>
                <p className='margin-b-8'>{description}</p>
                <ListLabelSecond
                    listLabel={listLabel}
                />
            </div>

            <div className='card-menu-second-pricing'>
                {!isAvailable && (<span className='not-available'>not available</span>)}
                <span className='pricing'>{Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD'}).format(startPrice)}</span>
            </div>
        </div>
    )
}

export default CardMenuSecond
