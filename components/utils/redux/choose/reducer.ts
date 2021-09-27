import { AnyAction } from 'redux'
import { TChooseInitState } from '../../types'
import { UPDATE_CATEGORY_POSITION, UPDATE_CHOOSE_VALUE } from './action'

const initState : TChooseInitState = {
    chooseValue: 'main_menu',
    categoryPosition: 1,
}

export const reducer = (state = initState, action : AnyAction) => {
    switch(action.type) {
        case UPDATE_CHOOSE_VALUE:
            return {
                ...state,
                chooseValue: action.payload
            }
        case UPDATE_CATEGORY_POSITION:
            return {
                ...state,
                categoryPosition: action.payload
            }
        default:
            return state
    }
}