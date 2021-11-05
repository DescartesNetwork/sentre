import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com'
const END_POINT = '@sentre/feed'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
})

/**
 * Store constructor
 */
const NAME = 'articles'
const initialState: { data?: any[] } = {
  data: [],
}

/**
 * Actions
 */

export const getArticles = createAsyncThunk(`${NAME}/getArticles`, async () => {
  try {
    const {
      data: { items },
    } = await api.get(END_POINT)
    return { data: items }
  } catch (error) {
    return {}
  }
})

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder.addCase(
      getArticles.fulfilled,
      (state, { payload }) => void Object.assign(state, payload),
    ),
})

export default slice.reducer
