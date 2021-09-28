import React from 'react'
import { IButtonText } from '../../utils/types'

const ButtonText : React.FC<IButtonText> = ({ text, onClick }) => {
    return (
        <button className='button-text' onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonText
