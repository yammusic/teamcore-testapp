import type { ReactNode } from 'react'
import type { AppStore } from './shared/types/store'

/**
 * Props for the StoreProvider component.
 */
export interface StoreProviderProps {
  /**
   * The children elements to be rendered within the StoreProvider.
   */
  children: ReactNode

  /**
   * A boolean flag to indicate if the environment is development.
   */
  isDev?: boolean

  /**
   * The Redux store object.
   */
  store?: AppStore
}
