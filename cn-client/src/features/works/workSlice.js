import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import DataServiceW from '../../services/workService'

const initialState = {works: [], status: 'idle', error: null,}
export const fetchWorks = createAsyncThunk(
  "works/fetch",
  async () => {
    const res = await DataServiceW.getAll();
    return res.data;
  }
);

const workSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {

  },

  extraReducers(builder){
    builder
    .addCase(fetchWorks.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(fetchWorks.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.works = state.works.concat(action.payload)
    })
    .addCase(fetchWorks.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export default workSlice.reducer