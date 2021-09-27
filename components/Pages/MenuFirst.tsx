import React from 'react'
import BannerSection from '../Organisms/BannerSection'
import CategoryFirstCarousel from '../Organisms/CategoryFirstSection'
import HeaderFirstSection from '../Organisms/HeaderFirstSection'

const MenuFirst : React.FC = () => {
    return (
    <>
        <div>
            <HeaderFirstSection />
        </div>

        <div className='margin-b-20'>
            <CategoryFirstCarousel />
        </div>

        <div className='margin-b-20 padding-l-16 padding-r-16'>
            <BannerSection />
        </div>
    </>
    )
}

export default MenuFirst
