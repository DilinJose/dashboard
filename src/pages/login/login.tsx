import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../redux/thunk/userThunk'
import type { AppDispatch, RootState } from '../../redux/store'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isLoading, error } = useSelector((state: RootState) => state.user)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(userLogin({ email, password })).then(()=>{
      setEmail('')
      setPassword('')
      navigate('/quote')
    })
  }
  return (
    <div className='flex justify-center items-center h-screen '>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-6 border rounded-md shadow-md'>
        <div className='flex flex-col text-white'>
          <label>Email</label>
          <input className='text-white' type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='flex flex-col text-white'>
          <label>Password</label>
          <input className='text-white' type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {isLoading && <p className='text-white'>Loading...</p>}
        <p className='text-red-800'>{error}</p>
        <button className='bg-blue-300 rounded-2xl' type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login