import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import BannerSection from '../Organisms/BannerSection'
import CategoryFirstCarousel from '../Organisms/CategoryFirstSection'
import HeaderFirstSection from '../Organisms/HeaderFirstSection'
import ListMenuFirstSection from '../Organisms/ListMenuFirstSection'
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
            <HeaderFirstSection />
        </div>

        {chooseValue === 'main_menu' && (<div className='margin-b-20'>
            <CategoryFirstCarousel />
        </div>)}

        <div className='margin-b-20 padding-l-16 padding-r-16'>
            <BannerSection />
        </div>

        <div className='margin-b-20 padding-l-16 padding-r-16'>
            <ListMenuFirstSection />
        </div>
    </>
    )
}

export default connector(MenuFirst)