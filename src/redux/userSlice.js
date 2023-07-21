import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        email: "pepito.perez@prueba.com",
        password: "12345"
    },
    {
        id: 2,
        email: "hsldev@hospital.com",
        password: "123123"
    }
]
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        changePassword: (state, action) => {
            state.password = action.payload
        }
    }
})

export const { addUser, changePassword } = userSlice.actions
export default userSlice.reducer