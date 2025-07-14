import { createSlice } from "@reduxjs/toolkit";
import { books, categories } from "./bookData.js";

const initialState = {
  books: books,
  categories: categories,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
      const existingCategory = state.categories.find(
        (cat) => cat.name === action.payload.category
      );
      if (!existingCategory) {
        state.categories.push({
          name: action.payload.category,
          id: `cat${Date.now}`,
        });
      }
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
