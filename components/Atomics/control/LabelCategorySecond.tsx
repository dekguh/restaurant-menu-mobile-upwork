import React from 'react'
import { ILabelCategorySecond } from '../../utils/types'
import { Link } from 'react-scroll'

const LabelCategorySecond : React.FC<ILabelCategorySecond> = ({ text, toCategoryPath, offset, duration }) => {
    return (
        <Link className='label-category-second' to={toCategoryPath} activeClass='active'>
            {text}
        </Link>
    )
}

export default LabelCategorySecond
