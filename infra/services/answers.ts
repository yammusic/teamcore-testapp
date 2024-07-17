import axios from "axios"
import { API_URL, AUTH_TOKEN } from "@/domain/constants/App"

export const sendAnswers = async (answers: any) => {
  const url = `${API_URL}/answer`
  const response = await axios.post(url, answers, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  })
  return response.data
}