import React from 'react'
import LabelBox from '../../Atomics/control/LabelBox'
import BackgroundDotted from '../../Atomics/image/BackgroundDotted'
import ListLabelFirst from '../../Atomics/list/ListLabelFirst'
import { ICardMenuFirst } from '../../utils/types'

const CardMenuFirst : React.FC<ICardMenuFirst> = ({ name, description, image, startPrice, endPrice, newMenu, bestseller, listLabel, category }) => {
    return (
        <div className='card-menu-first-wrap'>
            <div className='card-menu-first-dotted'>
                <BackgroundDotted color='#FF5858' width={60} height={50} />
            </div>

            <div className='card-menu-first'>
                <div className='card-menu-first-detail'>
                    <div className='margin-b-4'>
                        {newMenu && (<LabelBox text='new menu' classes='margin-r-8' />)}
                        {bestseller && (<LabelBox text='bestseller'/>)}
                    </div>

                    <h5 className='title margin-b-0'>{name}</h5>
                    <p className='description margin-b-4'>{description}</p>

                    <span className='price margin-b-4'>
                        {Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(startPrice)}
                        {(endPrice && startPrice != endPrice) && ` - ${Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(endPrice)}`}
                    </span>
                    <ListLabelFirst
                        listLabel={listLabel}
                    />
                </div>

                <div className='card-menu-first-image'>
                    <img src={image} alt="menu food" className='image' />
                </div>
            </div>
        </div>
    )
}

export default CardMenuFirst
