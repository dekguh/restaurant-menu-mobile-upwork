import React from 'react'
import { IListLabelSecond } from '../../utils/types'

const ListLabelSecond : React.FC<IListLabelSecond> = ({ listLabel }) => {
    return (
        <ul className='list-label-second'>
            {listLabel.length >= 1 && listLabel.map((data, i) => (
                <li key={i}>{data.description}</li>
            ))}
        </ul>
    )
}

export default ListLabelSecond
