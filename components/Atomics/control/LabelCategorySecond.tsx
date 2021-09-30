import React from 'react'
import { ILabelCategorySecond } from '../../utils/types'
import { Link } from 'react-scroll'

const LabelCategorySecond : React.FC<ILabelCategorySecond> = ({ text, toCategoryPath, offset, duration, isSpy }) => {
    return (
        <Link className='label-category-second' to={toCategoryPath} activeClass='active' spy={isSpy} offset={offset}>
            {text}
        </Link>
    )
}

export default LabelCategorySecond
