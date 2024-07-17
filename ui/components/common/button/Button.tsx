import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { Link as ExpoLink } from 'expo-router'
import { Button as PaperButton } from 'react-native-paper'

import type { ButtonProps } from './types'
import styles from './styles'

export function Button(props: Readonly<ButtonProps>) {
  const {
    children,
    style,
    fullWidth,
    href,
    linkTestID,
    ...rest
  } = props

  const Link = useMemo(() => {
    if (href) {
      return ({ children }: { children: React.ReactNode }) => (
        <ExpoLink href={ href } testID={ linkTestID }>{ children }</ExpoLink>
      )
    }

    return ({ children }: { children: React.ReactNode }) => children
  }, [href])

  return (
    <Link>
      <PaperButton
        labelStyle={ { width: fullWidth ? '100%' : undefined } }
        style={ StyleSheet.flatten([
          styles.button,
          fullWidth && { width: '100%' },
          style,
        ]) as any }
        { ...rest }
      >
        { children }
      </PaperButton>
    </Link>
  )
}
