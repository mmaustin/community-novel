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
export const createAuthor = createAsyncThunk(
  "author/create",
  async ({ author }) => {
    const res = await DataServiceA.create(author);
    return res.data;
  }
);
export const getAuthor = createAsyncThunk(
  "author/retrieve",
  async ({id}) => {
    const res = await DataServiceA.get(id);
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
    .addCase(createAuthor.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(createAuthor.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.authors.push(action.payload)
    })
    .addCase(createAuthor.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(getAuthor.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(getAuthor.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.authors = [action.payload]
    })    
  }
})

export const allAuthors = state => state.authors.authors;

export default authorSlice.reducer