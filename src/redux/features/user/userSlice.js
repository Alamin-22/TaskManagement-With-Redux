import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "Md. Al Amin Mollik",
    email: "bolajabena@gmail.com",
}

export const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
      
    },
})



export default UserSlice.reducer