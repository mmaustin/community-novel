import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import DataServiceA from '../../services/authorService'

const initialState = {authors: [], status: 'idle', error: null,}
export const retrieveAuthors = createAsyncThunk(
  "authors/retrieve",
  async () => {
    const res = await DataServiceA.getAll();
    console.log(res);
    return res.data;
  }
);

const authorSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {

  },

  extraReducers(builder){
    builder
    .addCase(fetchPosts.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.posts = state.posts.concat(action.payload)
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})