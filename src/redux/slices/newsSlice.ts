import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NewsItemType } from '~models/news'

interface IState {
  news: NewsItemType[]
  currentNews: NewsItemType | null
}

const initialState: IState = {
  news: [],
  currentNews: null,
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews(state, action: PayloadAction<NewsItemType[]>) {
      state.news = action.payload
    },
    setCurrentNews(state, action: PayloadAction<NewsItemType>) {
      state.currentNews = action.payload
    },
  },
})

export const newsActions = newsSlice.actions
export const newsReducer = newsSlice.reducer
