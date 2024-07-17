import type { makeStore } from '../../config/store'

/**
 * Options for creating a Redux store.
 */
export interface MakeStoreOptions {
  /**
   * A boolean flag indicating if the environment is development.
   */
  isDev?: boolean
}

/**
 * The type representing the Redux store object.
 */
export type AppStore = ReturnType<typeof makeStore>['store']

/**
 * The type representing the root state of the Redux store.
 */
export type RootState = ReturnType<AppStore['getState']>

/**
 * The type representing the dispatch function of the Redux store.
 */
export type AppDispatch = AppStore['dispatch']
