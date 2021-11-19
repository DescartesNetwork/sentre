import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type State = {
  isDarkMode?: boolean
}
/**
 * Store constructor
 */
const NAME = 'articles'
const initialState: State = {
  isDarkMode: false,
}

/**
 * Actions
 */

export const switchTheme = createAsyncThunk<
  Partial<State>,
  void,
  { state: any }
>(`${NAME}/switchTheme`, async (_, { getState }): Promise<State> => {
  const {
    theme: { isDarkMode },
  } = getState()

  return { isDarkMode: !isDarkMode }
})

export const setTheme = createAsyncThunk<Partial<State>, { mode: string }>(
  `${NAME}/setTheme`,
  async ({ mode }): Promise<State> => {
    return { isDarkMode: mode === 'dark' }
  },
)

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder
      .addCase(
        switchTheme.fulfilled,
        (state, { payload }) => void Object.assign(state, payload),
      )
      .addCase(
        setTheme.fulfilled,
        (state, { payload }) => void Object.assign(state, payload),
      ),
})

export default slice.reducer
