import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput } from 'react-native-paper'
import RNPickerSelect from 'react-native-picker-select'

import { getQuestions } from '@/infra/services/questions'
import { sendAnswers } from '@/infra/services/answers'
import { Button } from '@/ui/components/common/button'
import styles from './styles'
import { useAppActions, useAppState } from '@/domain/store/feature'

export default function HomeScreen() {
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const { questions } = useAppState()
  const { setQuestions } = useAppActions()
  const { control, handleSubmit, formState: { errors }, watch, reset } = useForm()
  const allFields = watch()

  const fetchQuestions = async () => {
    setLoading(true)

    try {
      const data = await getQuestions()
      setQuestions(data.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data: any) => {
    console.log(data, Object.keys(data).map((key) => ({ question_id: key.split('-')[1], answer_id: data[key] })))
    setLoading(true)

    try {
      await sendAnswers({
        date: new Date().toISOString(),
        data: Object.keys(data).map((key) => ({
          question_id: key.split('-')[1],
          answer_id: data[key],
        })),
      })

      reset()
      setSaved(true)
    } catch (error) {
      console.error(error)
      setSaved(false)
    } finally {
      setLoading(false)
    }
  }

  const onTryAgain = () => {
    setSaved(false)
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  return (
    <View style={ styles.container }>
      <Image source={ require('../../assets/images/logo.png') } style={{ width: 200, objectFit: 'contain' }} />
      <Text variant='titleLarge'>Welcome</Text>

      { (!saved && loading) && <Text>Loading...</Text> }

      { saved && (
        <View style={{ marginTop: 32 }}>
          <Text>Answers will be saved!</Text>
          <Button onPress={ onTryAgain }>Try again?</Button>
        </View>
      ) }

      { !saved && (
        <View style={ styles.formContainer }>
          <Text variant='bodyMedium' style={ styles.description }>Please answer the following questions</Text>

          { questions && questions.map((question: any, idx) => (
            <View key={ `question-${idx}` }>
              <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Text>{ question.question }</Text>

                    <RNPickerSelect
                      value={value}
                      onValueChange={onChange}
                      items={question.answers.map((answer: any) => ({
                        label: answer.answer,
                        value: answer.answer_id,
                      }))}
                    />
                  </>
                )}
                name={`question-${question.question_id}`}
              />

              {errors[`question-${question.question_id}`] && <Text style={ styles.error }>This is required.</Text>}
            </View>
          )) }

          <Button
            loading={ loading }
            mode='contained'
            onPress={ handleSubmit(onSubmit) }
            disabled={ Object.keys(allFields).some(field => !allFields[field]) || loading }
            style={{
              marginTop: 16,
            }}
          >
            Submit
          </Button>
        </View>
      ) }
    </View>
  )
}
