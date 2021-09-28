import React from 'react'
import { ILabelCategorySecond } from '../../utils/types'

const LabelCategorySecond : React.FC<ILabelCategorySecond> = ({ text, onClick, active }) => {
    return (
        <button className={`label-category-second ${active ? 'active' : 'nonactive'}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default LabelCategorySecond
