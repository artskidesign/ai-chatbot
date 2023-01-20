import '../styles/globals.css';

// import { Inter } from '@next/font/google';
// import { SessionProvider } from 'next-auth/react';
import styles from '../styles/Home.module.css';
import Navbar from './Navbar';

export default function RootLayout({ children, session }: { children: React.ReactNode; session: any }) {
    return (
        <html lang="en">
            <body>
                {/* <SessionProvider session={session}> */}
                <main className={styles.main}>
                    <Navbar />
                    {children}
                </main>
                {/* </SessionProvider> */}
            </body>
        </html>
    );
}
