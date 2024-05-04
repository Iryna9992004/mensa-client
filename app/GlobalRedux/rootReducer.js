'use client';

import { combineReducers } from '@reduxjs/toolkit';
import { counterSlice } from './features/counterSlice';
import {basketSlice} from './features/basketSlice'

const rootReducer=combineReducers({
    counter:counterSlice.reducer,
    basket:basketSlice.reducer,
})

export {rootReducer}