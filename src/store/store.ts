import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;