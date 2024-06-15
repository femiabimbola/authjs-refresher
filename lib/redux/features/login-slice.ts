import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface LoginModalState {
  isOpen: boolean;
  isLoading: boolean;
}

const initialState: LoginModalState = {
  isOpen: false,
  isLoading: false,
};

export const loginSlice = createSlice({
  name: "registerModal",
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const {onOpen, onClose} = loginSlice.actions;
// export const registerReducer = registerSlice.reducer;

export default loginSlice.reducer;
