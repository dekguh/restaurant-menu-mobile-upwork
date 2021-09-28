import React, { useState } from 'react'
import { IListLabelFirst } from '../../utils/types'

const ListLabelFirst : React.FC<IListLabelFirst> = ({ listLabel }) => {
    return (
        <ul className='list-label-first'>
            {listLabel.length >= 1 && listLabel.map((data, i) => {
                return (
                    <li key={i}>
                        <div className='list-label-description'>
                            {data.description}
                        </div>
                        <div className='list-label-icon'>
                            <i>
                                <data.icon height={15} />
                            </i>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default ListLabelFirst
