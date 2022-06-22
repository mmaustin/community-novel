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
export const createWork = createAsyncThunk(
  'work/create',
  async ({id}) => {
    const res = await DataServiceW.create(id);
    return res.data;
  }
);
export const getWork = createAsyncThunk(
  'work/retrieve',
  async ({work}) => {
    const res = await DataServiceW.get(work);
    return res.data;
  }
)

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
    .addCase(createWork.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(createWork.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.works.push(action.payload)
    })
    .addCase(createWork.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(getWork.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(getWork.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.works = [action.payload];
    })
  }
})

export const allWorks = state => state.works.works;

export const getWorkById = (state, workId) => 
  state.works.works.find(work => work.id === workId)

export default workSlice.reducer