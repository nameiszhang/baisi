import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import IndexStore from './index/reducer'

const store = combineReducers({
    IndexStore
})

export default createStore(store,applyMiddleware(thunk))