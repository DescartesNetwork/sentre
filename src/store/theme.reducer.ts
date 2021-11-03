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

export const setTheme = createAsyncThunk<Partial<State>, void, { state: any }>(
  `${NAME}/setTheme`,
  async (_, { getState }): Promise<any> => {
    const {
      theme: { isDarkMode },
    } = getState()

    return { isDarkMode: !isDarkMode }
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
