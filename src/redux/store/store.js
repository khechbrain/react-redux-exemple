import { createStore } from 'redux'
import reducer from '../reducers/index'


export const store = createStore(
    reducer
)
export const dispatch = store.dispatch