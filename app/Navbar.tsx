import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <Link href={'/'}>Home</Link>
            <Link href={'/admin'}>Admin</Link>
            <Link href={'/auth/login'}>Login</Link>
        </div>
    );
};

export default Navbar;
