import { configureStore } from '@reduxjs/toolkit';

import taskReducer from "./features/task/taskSlice"
import userSlice from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    TaskSlice: taskReducer,
    UserSlice: userSlice
  },
})