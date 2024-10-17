import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state, action) => {
        state.data = action.payload;
        state.status = "loading";
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.data = action.payload;
        state.status = "error";
      });
  },
});

// using thunk middleware for calling api
export const getTasks = createAsyncThunk("task/get", async () => {
  const resp = await fetch("https://66d6b474006bfbe2e64e413f.mockapi.io/tasks");
  const data = await resp.json();
  return data;
});

export default taskSlice.reducer; // gives back the state
