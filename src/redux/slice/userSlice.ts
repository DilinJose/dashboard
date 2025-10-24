import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { userLogin } from '../thunk/userThunk'



export interface UserState {
  _id: string,
  name: string,
  email: string,
  password: string,
  role: string,
  isVerified: boolean,
  courses: any[],
  createdAt: string,
  updatedAt: string,
}

interface UserSliceState {
  isLoading?: boolean
  error?: string | null
  user: UserState
}

const initialState :UserSliceState= {
  isLoading: false,
  error: null,
  user: {
    _id: "",
    name: "",
    email: "",
    password: "",
    role: "",
    isVerified: false,
    courses: [],
    createdAt: "",
    updatedAt: "",
  },
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
     builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(userLogin.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.user = action.payload.user
      state.error = null
    })
     builder.addCase(userLogin.rejected, (state,action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload.message ||"Login unsuccessfull"
    })
  }
})

// Action creators are generated for each case reducer function
export const { } = UserSlice.actions

export default UserSlice.reducer