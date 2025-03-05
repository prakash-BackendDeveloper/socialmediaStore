import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Prakash" },
  { id: "1", name: "Muthusamy" },
  { id: "2", name: "Thangamani" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
