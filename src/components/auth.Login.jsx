import React from 'react'

export const AuthLogin = () => {
  return (
    <div>
        <div>
            <div>
                <button className='btn btn-neutral'>Login with Google</button>
            </div>
            <div>
                <button className='btn btn-neutral'>Login with Facebook</button>
            </div>
            <div>
                <div className='my-4'>or</div>
            </div>
            <div>Email</div>  
            <input type="text" />
            <div>Password</div>
            <input type="password" />
            <div className='flex gap-4 items-center'>
                <button className='btn btn-primary w-fit'>Sign In</button>
                <button className='btn btn-secondary w-fit'>Lost password</button>                            
            </div>
            <p className="my-2">Don't have an account? <a className='hover:text-sky-500' href="#">Sign Up</a></p>
        </div>
    </div>
  )
}