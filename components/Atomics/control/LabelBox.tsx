import React from 'react'
import { ILabelBox } from '../../utils/types'

const LabelBox : React.FC<ILabelBox> = ({ text, classes }) => {
    return (
        <label className={classes ? `label-box ${classes}` : 'label-box'}>
            {text}
        </label>
    )
}

export default LabelBox
