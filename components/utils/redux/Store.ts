import { configureStore } from '@reduxjs/toolkit'
import { Context, createWrapper } from 'next-redux-wrapper'
import { reducer as ChooseReducer } from './choose/reducer'

export const Store = configureStore({
    reducer: {
        choose: ChooseReducer
    }
})

const makeStore = (ctx: Context) => Store
export const wrapper = createWrapper<typeof Store>(makeStore, { debug: true})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch