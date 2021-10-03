import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import LabelCategorySecond from '../../Atomics/control/LabelCategorySecond'
import { actUpdateCategoryPosition } from '../../utils/redux/choose/action'
import { RootState } from '../../utils/redux/Store'
import { IListCategorySecond } from '../../utils/types'

const mapState = (state: RootState) => ({
    categoryPosition: state.choose.categoryPosition
})

const mapDispatch = {
    updateCategoryPosition: (position: number) => (actUpdateCategoryPosition(position))
}

const connector = connect(mapState, mapDispatch)
type ReduxToProps = ConnectedProps<typeof connector>

const ListCategorySecond : React.FC<IListCategorySecond & ReduxToProps> = ({ listCategory, labelOnClick }) => {
    return (
        <ul className='list-category-second'>
            {listCategory.length >= 1 && listCategory.map((data, i) => (
                <li key={i}>
                    <LabelCategorySecond
                        text={data.name}
                        toCategoryPath={data.path}
                        duration={800}
                        offset={-120}
                        isSpy={true}
                        onClick={labelOnClick}
                    />
                </li>
            ))}
        </ul>
    )
}

export default connector(ListCategorySecond)
