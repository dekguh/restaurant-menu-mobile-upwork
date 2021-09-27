import React from 'react'
import { IBannerWrap } from '../../utils/types'

const BannerWrap : React.FC<IBannerWrap> = ({ image, children }) => {
    return (
        <div className='banner-image-wrapper' style={{
            backgroundImage: `url('${image}')`
        }}>
            {children}
        </div>
    )
}

export default BannerWrap
