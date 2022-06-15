import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import DataServiceA from '../../services/authorService'

const initialState = {authors: [], status: 'idle', error: null,}
export const fetchAuthors = createAsyncThunk(
  "authors/fetch",
  async () => {
    const res = await DataServiceA.getAll();
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
    .addCase(fetchAuthors.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(fetchAuthors.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.authors = state.authors.concat(action.payload)
    })
    .addCase(fetchAuthors.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export default authorSlice.reducer