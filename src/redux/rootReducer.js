import { combineReducers } from 'redux'
import calculatorReducer from './calculator/calculatorReducers'


const rootReducer = combineReducers({
    calculator: calculatorReducer
})

export default rootReducer