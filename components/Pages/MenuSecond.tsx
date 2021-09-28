import React from 'react'
import BannerImageSection from '../Organisms/BannerSection/BannerImageSection'
import OpenHourSection from '../Organisms/OpenHourSection'
import { dataSchedule } from '../utils/data'

const MenuSecond : React.FC = () => {
    return (
        <>
            <div className='padding-t-16 padding-l-16 padding-r-16 margin-b-20'>
                <BannerImageSection
                    image='/foods/bg-banner.jpg'
                    height={150}
                />

                <div className='margin-t-16'>
                    <h1 className='title-heading'>The best Restaurant</h1>
                </div>
            </div>

            <div className='padding-l-16 padding-r-16 margin-b-20'>
                <OpenHourSection
                    description='open hour 08.00 - 23.00'
                    listSchedule={dataSchedule}
                />
            </div>
        </>
    )
}

export default MenuSecond