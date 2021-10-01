import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import BannerSection from '../Organisms/BannerSection'
import CategoryFirstCarousel from '../Organisms/CategoryFirstSection'
import HeaderFirstSection from '../Organisms/HeaderFirstSection'
import ListMenuFirstSection from '../Organisms/ListMenuFirstSection'
import { dataCategory, dataMenu } from '../utils/data'
import { RootState } from '../utils/redux/Store'

const mapState = (state: RootState) => ({
    chooseValue: state.choose.chooseValue
})

const connector = connect(mapState, {})
type ReduxToProps = ConnectedProps<typeof connector>

const MenuFirst : React.FC<ReduxToProps> = ({ chooseValue }) => {
    return (
    <>
        <div>
            <HeaderFirstSection
                description='All your favorites available for delivery & pick-up!'
            />
        </div>

        {chooseValue === 'main_menu' && (<div className='margin-b-20'>
            <CategoryFirstCarousel
                dataCategory={dataCategory}
            />
        </div>)}

        <div className='margin-b-20 padding-l-16 padding-r-16'>
            <BannerSection
                image='/foods/bg-banner.jpg'
                title='Weekly Promo Special'
                description='get special price cut of 20% every weekly'
            />
        </div>

        <div className='margin-b-20 padding-l-16 padding-r-16'>
            <ListMenuFirstSection
                dataCategory={dataCategory}
                dataMenu={dataMenu}
            />
        </div>
    </>
    )
}

export default connector(MenuFirst)