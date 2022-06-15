import { configureStore } from '@reduxjs/toolkit';
import authorSlice from '../features/authors/authorSlice';

export const store = configureStore({
  reducer: {
    authors: authorSlice,
  },
});
