import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import { getQuestions } from '@/infra/services/questions'
import { Button } from '@/ui/components/common/button'
import styles from './styles'

export default function HomeScreen() {
  const [loading, setLoading] = useState(false)

  const fetchQuestions = async () => {
    setLoading(true)
    const data = await getQuestions()
    console.log({data})
    setLoading(false)
  }

  useEffect(() => {
    fetchQuestions()
  }, [])
  return (
    <View style={ styles.container }>
      <Text variant='titleLarge'>Home Screen</Text>
    </View>
  )
}
