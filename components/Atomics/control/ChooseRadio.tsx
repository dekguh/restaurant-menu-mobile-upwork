import React from 'react'
import { TChooseRadio } from '../../utils/types'
import { HiCheck } from 'react-icons/hi'

const ChooseRadio = ({ value, forLabel, name, id, text, classes, onClick } : TChooseRadio) => {
    return (
        <div className={classes}>
            <input type='radio' value={value} name={name}  id={id} className='input-choose-radio' />
            <label htmlFor={forLabel} className='label-choose-radio' onClick={onClick}>
                <i className='checked-icon-choose-radio'>
                    <HiCheck />
                </i>
                {text}
            </label>
        </div>
    )
}

export default ChooseRadio
