"use client"

import { signIn } from 'next-auth/react';
import { useRef } from 'react'


const Page = () => {
	const userName = useRef('')
	const password = useRef('')
	const onSubmit = async () => {
		const result = await signIn('credentials', {
			username: userName.current,
			password: password.current,
			redirect: true,
			callbackUrl: '/',
		});
	}

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" onChange={(e) => userName.current = e.target.value  } />
			<input type="text" onChange={(e) => password.current = e.target.value  } />
			<button type="submit" onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Page;