import React, { useState, useEffect } from 'react'
import { ICardListSchedule } from '../../utils/types'

const CardListSchedule : React.FC<ICardListSchedule> = ({ listSchedule, isOpen, updateIsOpen }) => {
    return (
        <div onClick={e => updateIsOpen(false)} className={`card-list-schedule-wrapper ${isOpen ? 'active' : 'nonactive'}`}>
            <div className='card-list-schedule-box'>
                <h4 className='margin-b-8'>Open Schedule</h4>

                <ul className='list-schedule-open'>
                    {listSchedule.length >= 1 && listSchedule?.map((data, i) => (
                        <li key={i}>
                            <span className='day'>{data.day}</span>
                            <span className='time'>{data.openTime} - {data.closeTime}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CardListSchedule
