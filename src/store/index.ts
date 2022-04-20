import { configureStore } from '@reduxjs/toolkit'
import middleware from './middleware'

import articles from './articles.reducer'
import ui from './ui.reducer'

const store = configureStore({
  middleware,
  reducer: { articles, ui },
})
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
