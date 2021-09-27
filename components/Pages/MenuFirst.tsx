import React from 'react'
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
    </>
    )
}

export default MenuFirst
