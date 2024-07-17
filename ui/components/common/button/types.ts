import type { ButtonProps as PaperButtonProps } from 'react-native-paper'

export interface ButtonProps extends PaperButtonProps {
  fullWidth?: boolean
  href?: string
  linkTestID?: string
}
