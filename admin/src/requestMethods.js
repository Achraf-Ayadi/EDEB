import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api_a/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzMyMzI0Zjc1MzU5YTdjZmI0OTMyMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODcyODkyMywiZXhwIjoxNjQ4OTg4MTIzfQ.gTpdOOwWxGvgFmHJFXxMv5ZBeJkHn8AExtwRaAm_IAo'
// JSON.parse(
//   JSON.parse(localStorage.getItem('persist:root')).currentUser
// ).currentUser.accessToken

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
})
