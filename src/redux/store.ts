import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/authSlice'
import { modalReducer } from './slices/modalSlice'
import { newsReducer } from './slices/newsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    news: newsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
