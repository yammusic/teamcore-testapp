import { createSlice } from '@reduxjs/toolkit'

import {
  setReady,
  setQuestions,
} from './actions'
import type { AppState } from './types'

/**
 * The initial state of the application.
 */
const initialState: AppState = {
  isReady: false,
  questions: [],
}

/**
 * The Redux slice for the application.
 *
 * This slice handles the state updates based on the dispatched actions.
 */
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(setReady, (state, { payload }) => ({
      ...state,
      isReady: payload,
    }))

    addCase(setQuestions, (state, { payload }) => ({
      ...state,
      elements: payload,
    }))

    // addCase(setTasks, (state, { payload }) => ({
    //   ...state,
    //   tasks: payload,
    // }))
  },
})

/**
 * The persisted reducer for the application.
 */
export const appReducer = appSlice.reducer
