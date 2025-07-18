import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || sessionStorage.getItem('isLoggedIn') === 'true',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      if (action.payload.keepSignedIn) {
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        sessionStorage.setItem('isLoggedIn', 'true');
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
      sessionStorage.removeItem('isLoggedIn');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer; 