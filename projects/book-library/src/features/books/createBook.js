import { createSlice } from '@reduxjs/toolkit'

export const createBook = createSlice({
  name: 'books',
  initialState: {
    data: [],
    filteredData: []
  },
  reducers: {
    addBook: (state, action) => {
      return {
        data: [...state.data, action.payload],
        filteredData: []
      }
    },
    updateRead: (state, action) => {
      return {
        data: state.data.map(item => {
          if (item.name === action.payload) {
            return {...item, read: !item.read};
          }
          return item;
        }),
        filteredData: []
      }
    },
    updateBook: (state, action) => {
      return {
        data: state.data.map((item, idx) => {
          if (idx === action.payload.index) {
            return {...action.payload};
          }
          return item;
        }),
        filteredData: [],
      }
    },
    readCheck: (state, action) => {
      return {
        data: [...state.data],
        filteredData: action.payload === "" ? state.data : state.data.filter(item => item.read === action.payload)
      }
    },
  },
});

export const { addBook, updateRead, updateBook, readCheck } = createBook.actions;

export default createBook.reducer;