import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import DataServiceC from '../../services/contributionService'

const initialState = {contributions: [], status: 'idle', error: null,}
export const fetchContributions = createAsyncThunk(
  "contributions/fetch",
  async () => {
    const res = await DataServiceC.getAll();
    return res.data;
  }
);
export const createContribution = createAsyncThunk(
  "contribution/create",
  async ({ contribution }) => {
    const res = await DataServiceC.create(contribution);
    return res.data;
  }
);

const contributionSlice = createSlice({
  name: 'contributions',
  initialState,
  reducers: {

  },

  extraReducers(builder){
    builder
    .addCase(fetchContributions.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(fetchContributions.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.contributions = state.contributions.concat(action.payload)
    })
    .addCase(fetchContributions.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export default contributionSlice.reducer