import { createAction } from '@reduxjs/toolkit'

/**
 * Action to set the readiness state of the application.
 */
export const setReady = createAction<boolean>('@app/SET_READY')

export const setQuestions = createAction<any[]>('@app/SET_QUESTIONS')
