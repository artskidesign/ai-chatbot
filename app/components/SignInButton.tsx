'use client';

import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

export const SignInButton = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="">
                <div onClick={() => signOut()}>Sign Out</div>

                {session?.user?.image ? (
                    <Image src={session.user.image} alt="User Image" width={40} height={40} />
                ) : null}
            </div>
        );
    }

    return (
        <div className="">
            <div onClick={() => signIn()}>Sign In</div>
        </div>
    );
};


