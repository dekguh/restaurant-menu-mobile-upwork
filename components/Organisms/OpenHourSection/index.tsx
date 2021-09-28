import React, { useState } from 'react'
import { BiTimeFive } from 'react-icons/bi'
import ButtonText from '../../Atomics/control/ButtonText'
import CardListSchedule from '../../Molecules/card/CardListSchedule'
import { IOpenHourSection } from '../../utils/types'

const OpenHourSection : React.FC<IOpenHourSection> = ({ description, listSchedule }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const updateIsOpen = (status : boolean) : void => {
        setIsOpen(status)
    }

    return (
    <>
        <CardListSchedule
            listSchedule={listSchedule}
            updateIsOpen={updateIsOpen}
            isOpen={isOpen}
        />

        <div className='open-hour-wrapper'>
            <div className='open-hour-wrapper-icon'>
                <div className='icon'>
                    <i>
                        <BiTimeFive />
                    </i>
                </div>
            </div>

            <div className='open-hour-wrapper-icon-detail'>
                <span className='d-block margin-b-4'>{description}</span>
                <ButtonText text='view schedule' onClick={e => setIsOpen(!isOpen)} />
            </div>
        </div>
    </>
    )
}

export default OpenHourSection
