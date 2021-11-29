import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export type Theme = 'light' | 'dark'

type State = {
  theme: Theme
}

const getTheme = (): Theme => {
  const hour = new Date().getHours()
  if (hour >= 6 && hour < 18) return 'light'
  return 'dark'
}

/**
 * Store constructor
 */
const NAME = 'articles'
const initialState: State = {
  theme: getTheme(),
}

/**
 * Actions
 */
export const setTheme = createAsyncThunk(
  `${NAME}/setTheme`,
  async (theme: Theme) => {
    return { theme }
  },
)

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder.addCase(
      setTheme.fulfilled,
      (state, { payload }) => void Object.assign(state, payload),
    ),
})

export default slice.reducer
