import {configureStore} from "@reduxjs/toolkit";
import registerReducer from "./features/register-slice";
import loginReducer from "./features/login-slice";

const store = configureStore({
  reducer: {
    registerModal: registerReducer,
    loginModal: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
