import React from 'react'
import BannerContent from '../../Molecules/BannerSection/BannerContent'
import BannerWrap from '../../Molecules/BannerSection/BannerWrap'
import { IBannerSection } from '../../utils/types'

const BannerSection : React.FC<IBannerSection> = ({ title, description, image }) => {
    return (
        <BannerWrap image={image}>
            <BannerContent
                title={title}
                description={description}
            />
        </BannerWrap>
    )
}

export default BannerSection
