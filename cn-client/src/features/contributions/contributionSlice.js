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
    .addCase(createContribution.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(createContribution.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.contributions.push(action.payload)
    })
    .addCase(createContribution.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export const getContributionById = (state, contributionId) => 
  state.contributions.contributions.find(contribution => contribution.id === contributionId)

export const allContributions = state => state.contributions.contributions;

export default contributionSlice.reducer