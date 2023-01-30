'use client';

import { getCsrfToken, signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

interface SignInProperties {
    csrfToken: string;
    providers: Record<string, unknown>;
}

export default function SignIn({ csrfToken }: SignInProperties) {
    const { data: session } = useSession();
    const user = session?.user;
    const email = user?.email;
    // eslint-disable-next-line no-console
    console.log(session);

    return (
        <>
            <div className="h-screen flex align-center justify-center text-slate-700">
                <div className="w-full max-w-xs flex flex-col m-auto bg-white rounded-md">
                    <div className="p-6">
                        <h1 className="text-xl font-bold mb-4">Sign in to Copywriter.ai</h1>
                        <div className="">
                            <button
                                className="font-medium rounded border border-slate-400 focus:outline-none focus:shadow-outline transition ease-out flex flex-row justify-between w-full"
                                onClick={() => signIn('google')}
                            >
                                <div className="w-[calc(100%-38px)] text-white bg-blue-500 py-2 px-4 hover:bg-blue-600 transition ease-out">
                                    Continue with Google
                                </div>
                                <div className="w-[44px] h-[40px] bg-white flex items-center justify-center rounded-md">
                                    <svg
                                        className=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                        <path d="M1 1h22v22H1z" fill="none" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className="py-4 text-slate-400 text-center text-sm relative before:absolute before:content before:w-full before:h-[1px] before:h-full before:bg-gray-300 before:h-px before:top-[50%] before:left-0 -z-1">
                            <span className="px-2 py-2 bg-white z-1 relative">OR</span>
                        </div>

                        <form className="flex flex-col" method="post" action="/api/auth/signin/email">
                            <input className="" name="csrfToken" type="hidden" defaultValue={csrfToken} />
                            <label>
                                Email address
                                <input type="email" id="email" name="email" />
                            </label>
                            <button
                                className="mt-6 bg-slate-200 text-black border border-slate-200 font-medium py-2 px-4 rounded-md hover:bg-slate-300 hover:border-slate-300 focus:outline-none focus:shadow-outline transition ease-out"
                                type="submit"
                            >
                                Continue with Email
                            </button>
                        </form>
                    </div>
                    <button onClick={() => signOut()}>Sign out</button>
                    <p>{email}</p>
                </div>
            </div>
        </>
    );
}

// export async function getServerSideProps(context) {
//     const csrfToken = await getCsrfToken(context);

//     return {
//         props: { csrfToken },
//     };
// }
