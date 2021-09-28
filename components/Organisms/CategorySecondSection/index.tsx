import React from 'react'
import ListCategorySecond from '../../Molecules/CategorySecondSection/ListCategorySecond'
import TitleSection from '../../Molecules/TitleSection'
import { dataCategory } from '../../utils/data'

const CategorySecondSection = () => {
    return (
        <div>
            <TitleSection
                title='Category'
                description='choose special variant'
                classes='margin-b-12'
            />

            <div className='divider-border margin-b-12'></div>

            <ListCategorySecond
                listCategory={dataCategory}
            />
        </div>
    )
}

export default CategorySecondSection
