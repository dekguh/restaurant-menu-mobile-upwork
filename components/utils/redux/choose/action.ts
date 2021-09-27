export const UPDATE_CHOOSE_VALUE : string = 'UPDATE_CHOOSE_VALUE'
export const UPDATE_CATEGORY_POSITION : string = 'UPDATE_CATEGORY_POSITION'

export function actUpdateChooseValue (state : string) : {} {
    return {
        type: UPDATE_CHOOSE_VALUE,
        payload: state
    }
}

export function actUpdateCategoryPosition (state : number) : {} {
    return {
        type: UPDATE_CATEGORY_POSITION,
        payload: state
    }
}