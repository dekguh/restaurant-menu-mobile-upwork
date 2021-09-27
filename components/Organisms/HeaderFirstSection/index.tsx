import React from 'react'
import ChooseMenu from '../../Molecules/ChooseMenu'

const HeaderFirstSection : React.FC = () => {
    return (
        <div className='padding-r-16 padding-l-16 padding-t-16 padding-b-16'>
            <ChooseMenu />
            <p className='padding-t-4 text-center margin-b-0'>All your favorites available for delivery & pick-up!</p>
        </div>
    )
}

export default HeaderFirstSection
