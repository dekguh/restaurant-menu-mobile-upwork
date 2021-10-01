import React from 'react'
import ChooseMenu from '../../Molecules/ChooseMenu'
import { IHeaderFirstSection } from '../../utils/types'

const HeaderFirstSection : React.FC<IHeaderFirstSection> = ({ description }) => {
    return (
        <div className='padding-r-16 padding-l-16 padding-t-16 padding-b-16'>
            <ChooseMenu />
            <p className='padding-t-4 text-center margin-b-0'>{description}</p>
        </div>
    )
}

export default HeaderFirstSection
