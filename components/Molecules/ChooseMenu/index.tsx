import React, { useState } from 'react'
import ChooseRadio from '../../Atomics/control/ChooseRadio'
import { ConnectedProps, connect } from 'react-redux'
import { RootState } from '../../utils/redux/Store'
import { actUpdateChooseValue } from '../../utils/redux/choose/action'
import { IChooseMenu } from '../../utils/types'
import { GoChevronDown } from 'react-icons/go'

const mapState = (state : RootState) => ({
    chooseValue: state.choose.chooseValue
})

const mapDispatch = {
    updateChooseValue: (value : string) => (actUpdateChooseValue(value))
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const ChooseMenu : React.FC<IChooseMenu & PropsFromRedux> = ({ chooseValue, updateChooseValue }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
    <>
        <div className='choose-input-wrapper text-center'>
            <span onClick={e => setIsOpen(!isOpen)} className='choose-input-list'>{chooseValue.replace('_', ' ')} <i><GoChevronDown /></i></span>
        </div>

        <div className={`choose-menu-wrapper ${isOpen ? 'active' : 'nonactive'}`} onClick={e => setIsOpen(!isOpen)}>
            <div className='choose-menu-box'>
                <ChooseRadio
                    name='choose_menu'
                    forLabel='main_menu'
                    id='main_menu'
                    value='main_menu'
                    text='Main Menu'
                    classes='block text-center'
                    onClick={e => updateChooseValue('main_menu')}
                />

                <div className='divider-border margin-b-16 margin-t-16'></div>

                <ChooseRadio
                    name='choose_menu'
                    forLabel='drinks'
                    id='drinks'
                    value='drinks'
                    text='Drinks'
                    classes='block text-center'
                    onClick={e => updateChooseValue('drinks')}
                />
            </div>
        </div>
    </>
    )
}

export default connector(ChooseMenu)
