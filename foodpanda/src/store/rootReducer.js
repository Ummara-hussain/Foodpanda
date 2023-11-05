import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cart'
import themeReducer from './theme'

const rootReducer = combineReducers({cartReducer, themeReducer})

export default rootReducer