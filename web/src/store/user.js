import { createSlice } from '@reduxjs/toolkit'
import api from "../API";

const initialUser = localStorage.getItem('user') ? localStorage.getItem('user') : null

const slice = createSlice({
    name: 'user',
    initialState: {
        user: initialUser,
    },
    reducers: {
        loginSuccess: (state, action) => {
            console.log(action.payload)
            state.user = {
                id: action.payload.id,
                firstName: action.payload.first_name,
                lastName: action.payload.last_name
            };
            localStorage.setItem('token', action.payload.key)
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logoutSuccess: (state, action) =>  {
            state.user = null;
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        },
    },
});

export default slice.reducer


// Actions
const { loginSuccess, logoutSuccess } = slice.actions
export const login = ( username, password ) => async dispatch => {
    try {
        const res = await api.post('/api/login/', { username, password })
        dispatch(loginSuccess(res.data));
    } catch (e) {
        console.log(e.response)
        return console.error(e.message);
    }
}
export const logout = () => async dispatch => {
    try {
        const res = await api.post('/api/logout/')
        dispatch(logoutSuccess())
    } catch (e) {
        console.log("error")
        return console.error(e.message);
    }
}