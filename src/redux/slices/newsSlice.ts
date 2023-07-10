import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NewsItem } from '~models/news'

interface IState {
  news: NewsItem[]
  currentNews: NewsItem | null
}

const initialState: IState = {
  news: [],
  currentNews: null,
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews(state, action: PayloadAction<NewsItem>) {
      state.news = action.payload
    },
  },
})

export const newsActions = newsSlice.actions
export const newsReducer = newsSlice.reducer
