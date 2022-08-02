import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import DataServiceA from '../../services/authorService'

const initialState = {authors: [], status: 'idle', error: null,}
export const fetchAuthors = createAsyncThunk(
  "authors/fetch",
  async () => {
    try {
      const res = await DataServiceA.getAll();
      return res.data;      
    } catch (error) {
      console.log(error)
    }
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
export const updateAuthor = createAsyncThunk(
  "author/update",
  async ({ id, author }) => {
    const res = await DataServiceA.update(id, author);
    return res.data;
  }
);
export const deleteAuthor = createAsyncThunk(
  "author/delete",
  async ({ id }) => {
    await DataServiceA.delete(id);
    return { id };
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
    .addCase(updateAuthor.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(updateAuthor.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const updatedState = state.authors.map(author => {
        if (author.id === action.payload.id){
          author.name = action.payload.name;
          author.statement = action.payload.statement;
          return author;
        } else {
          return author;
        }
      });
      state.authors = updatedState;
    })
    .addCase(deleteAuthor.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const newState = state.authors.filter(author => author.id !== action.payload.id);
      state.authors = newState;
    })    
  }
})


export const allAuthors = state => state.authors.authors;

export const getAuthorById = (state, authorId) => 
  state.authors.authors.find(author => author.id === authorId)

export default authorSlice.reducer