import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  phone?: string;
  role: "provider" | "customer" | "guest";
  profileImg?: string;
}

const initialState = {
  user: {
    role: "guest",
  } as User,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload; // Update the user object
    },
    removeUser: (state) => {
      state.user = { role: "guest" }; // Reset to guest role
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
