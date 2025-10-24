import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const userLogin = createAsyncThunk(  'users/update',  async (payload:{email:string,password:string}, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://machine-test-lgix.onrender.com/api/v1/user/login',payload)
      console.log('response', response)
      return response.data
    } catch (err) {

      return rejectWithValue(err.response.data)
    }
  },
)