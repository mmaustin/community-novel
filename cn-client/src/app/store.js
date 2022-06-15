import { configureStore } from '@reduxjs/toolkit';
import authorSlice from '../features/authors/authorSlice';
import workSlice from '../features/works/workSlice';
import contributionSlice from '../features/contributions/contributionSlice';

export const store = configureStore({
  reducer: {
    authors: authorSlice,
    works: workSlice,
    contributions: contributionSlice
  },
});
