'use client';
import { useState } from 'react';
import { AuthRegister } from './auth.Register';

export const AuthLogin = () => {
  const initialLoginData = {
    email: '',
    password: '',
  };
  const [loginData, setloginData] = useState(initialLoginData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData({ ...loginData, [name]: value });
  };

  const handleSubmitLoginData = async () => {
    const { email, password } = loginData; // Destructure email and password from loginData

    const res = await fetch('https://eventmakers-api.vercel.app/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), // Use email and password from loginData
    });
    const data = await res.json();
    console.log(data);

    // Handle the response as needed
  };

  return (
    <div>
      <div>
        <div>
          <button className="btn btn-neutral">Login with Google</button>
        </div>
        <div>
          <button className="btn btn-neutral">Login with Facebook</button>
        </div>
        <div>
          <div className="my-4">or</div>
        </div>
        <div>Email</div>
        <input name="email" onChange={handleChange} />
        <div>Password</div>
        <input name="password" type="password" onChange={handleChange} />
        <div className="flex gap-4 items-center">
          <button className="btn btn-primary w-fit" onClick={handleSubmitLoginData}>
            Sign In
          </button>
          {/* <button className="btn btn-secondary w-fit">Lost password</button> */}
        </div>
        <p className="my-2">
          Don't have an account?{' '}
          <a className="hover:text-sky-500" href="#">
            {/* <AuthRegister /> */} here
          </a>
        </p>
      </div>
    </div>
  );
};
