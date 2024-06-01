import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../../../utils/firebase.config';

const initialState = {
  name: '',
  email: '',
  isLoading: true,
  isError: false,
  error: "",
};


export const createUser = createAsyncThunk(
  'userSlice/createUser',
  async ({ email, password, name }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    })
    console.log(data);
    return {
      email: data.user.email,
      name: data.user.displayName
    };
  },
)

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name,
        state.email = payload.email
    },
    setToggleLoading: (state, { payload }) => {
      state.isLoading = payload
    },
    SetLogout: (state) => {
      state.name = "";
      state.email = "";
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(createUser.pending, (state) => {
      state.email = "",
        state.name = "",
        state.isLoading = true,
        state.isError = false,
        state.error = ""
    }),
      builder.addCase(createUser.fulfilled, (state, { payload }) => {
        state.email = payload.email,
          state.name = payload.name,
          state.isLoading = false,
          state.isError = false,
          state.error = ""
      }),
      builder.addCase(createUser.rejected, (state, action) => {
        state.email = "",
          state.name = "",
          state.isLoading = false,
          state.isError = false,
          state.error = action.error.message
      })
  },
});

export const { setUser, setToggleLoading, SetLogout } = userSlice.actions;

export default userSlice.reducer;
