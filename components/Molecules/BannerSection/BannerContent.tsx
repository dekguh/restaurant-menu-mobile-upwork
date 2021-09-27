import React from 'react'
import { IBannerContent } from '../../utils/types'

const BannerContent : React.FC<IBannerContent> = ({ title, description }) => {
    return (
        <div className='banner-content'>
            <h1 className='banner-content-title margin-b-4'>{title}</h1>
            <p className='banner-content-description margin-b-0'>{description}</p>
        </div>
    )
}

export default BannerContent
