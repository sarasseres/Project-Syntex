'use client';

import { useState } from 'react';

export const AuthRegister = () => {
  const [registerData, setRegisterData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const handleSubmitData = async () => {
    console.log('yes');
    // const { name, email, password } = registerData; // Destructure email and password from loginData

    // const res = await fetch('https://eventmakers-api.vercel.app/api/auth/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ name, email, password }), // Use email and password from loginData
    // });
    // const data = await res.json();
  };
  return (
    <div>
      <input name="name" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <input name="password" onChange={handleChange} />
      <button onClick={handleSubmitData}>Submit</button>
    </div>
  );
};
