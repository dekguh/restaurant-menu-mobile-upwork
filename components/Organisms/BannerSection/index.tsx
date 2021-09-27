import React from 'react'
import BannerContent from '../../Molecules/BannerSection/BannerContent'
import BannerWrap from '../../Molecules/BannerSection/BannerWrap'

const BannerSection : React.FC = () => {
    return (
        <BannerWrap image='/foods/bg-banner.jpg'>
            <BannerContent
                title='Weekly Promo Special'
                description='get special price cut of 20% every weekly'
            />
        </BannerWrap>
    )
}

export default BannerSection
