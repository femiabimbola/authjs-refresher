import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface RegisterModalState {
  isOpen: boolean;
  isLoading: boolean;
}

const initialState: RegisterModalState = {
  isOpen: false,
  isLoading: false,
};

export const registerSlice = createSlice({
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

export const {onOpen, onClose} = registerSlice.actions;
// export const registerReducer = registerSlice.reducer;

export default registerSlice.reducer;
