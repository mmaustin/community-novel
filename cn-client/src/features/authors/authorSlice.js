import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import DataServiceA from '../../services/authorService'

const initialState = {bands: [], status: 'idle', error: null,}
export const retrieveAuthors = createAsyncThunk(
  "authors/retrieve",
  async () => {
    const res = await DataServiceA.getAll();
    console.log(res);
    return res.data;
  }
);