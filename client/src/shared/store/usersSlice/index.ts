import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '@interfaces';

interface IUsersState {
    users: IUser[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
    users: [],
    loading: 'idle'
} as IUsersState;

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default usersSlice.reducer;
