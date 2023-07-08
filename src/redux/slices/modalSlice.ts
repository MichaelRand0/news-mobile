import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ContentType } from '~models/modal'

interface IState {
  content: ContentType
}

const initialState: IState = {
  content: null,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setContent(state, action: PayloadAction<ContentType>) {
      state.content = action.payload
    },
  },
})

export const modalActions = modalSlice.actions
export const modalReducer = modalSlice.reducer
