import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api_a/'
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzMyMzI0Zjc1MzU5YTdjZmI0OTMyMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODMxMDM3NCwiZXhwIjoxNjQ4NTY5NTc0fQ.InyKAWG8hJpnqVh4z-Krklx0Czz9DPR1V0Jkj6tm1zQ'
// const user = JSON.parse(localStorage.getItem('persist:root'))?.user
// const currentUser = user && JSON.parse(user).currentUser
// const TOKEN = currentUser?.accessToken

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
})
