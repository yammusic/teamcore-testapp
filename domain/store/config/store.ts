import { configureStore } from '@reduxjs/toolkit'

import { rootReducer as reducer } from './reducers'
import type { MakeStoreOptions } from '../shared'


/**
 * Creates and configures the Redux store.
 *
 * @param {MakeStoreOptions} [opts={}] - Options to configure the store.
 * @param {boolean} [opts.isDev=false] - Flag indicating if the environment is development.
 * @returns The configured store.
 */
export const makeStore = (opts: MakeStoreOptions = {}) => {
  const { isDev = false } = opts

  const middleware = (getDefaultMiddleware: any) => {
    return getDefaultMiddleware({ serializableCheck: false })
  }

  const store = configureStore({
    devTools: isDev && { trace: true },
    middleware,
    reducer,
  })

  return { store }
}

/**
 * Hook to create and configure the Redux store.
 * @param {boolean} [isDev=false] - Flag indicating if the environment is development.
 * @returns The configured store.
 */
export const useStore = (isDev: boolean = false) => makeStore({ isDev })

/**
 * The default configured store.
 */
export const { store } = makeStore()
