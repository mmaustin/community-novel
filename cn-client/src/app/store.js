import { configureStore } from '@reduxjs/toolkit';
import authorSlice from '../features/authors/authorSlice';
import workSlice from '../features/works/workSlice';

export const store = configureStore({
  reducer: {
    authors: authorSlice,
    works: workSlice,
  },
});
