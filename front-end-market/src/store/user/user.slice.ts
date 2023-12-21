import { getStoreLocal } from '@/utils/local-storage'
import { createSlice } from '@reduxjs/toolkit'
import { checkAuth, login, logout, register } from './user.actions'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
	user: getStoreLocal('user')
		? JSON.parse(localStorage.getItem('user') as string)
		: null,
	IsLoading: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.IsLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.IsLoading = false
				state.user = payload.user
			})
			.addCase(register.rejected, state => {
				state.IsLoading = false
				state.user = null
			})
			.addCase(login.pending, state => {
				state.IsLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.IsLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, state => {
				state.IsLoading = false
				state.user = null
			})
			.addCase(logout.fulfilled, state => {
				state.IsLoading = false
				state.user = null
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user
			})
	}
})
