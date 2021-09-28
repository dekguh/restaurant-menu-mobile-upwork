import React from 'react'
import { IBannerImageSection } from '../../utils/types'

const BannerImageSection : React.FC<IBannerImageSection> = ({ image, height = 100 }) => {
    return (
        <img
            src={image}
            style={{
                height: `${height}px`,
                width: '100%',
                borderRadius: '8px',
                objectFit: 'cover'
            }}
        />
    )
}

export default BannerImageSection
