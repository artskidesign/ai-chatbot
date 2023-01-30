'use client';
import '../../styles/globals.css';

import { SessionProvider } from 'next-auth/react';

import styles from '../../styles/Home.module.css';

interface Properties {
    children: React.ReactNode;
    session: any;
}

export default function RootLayout({ children, session }: Properties) {
    return (
        <SessionProvider session={session}>
            <html lang="en">
                <body>
                    {/* className="max-w-screen-lg m-auto" */}
                    <main className={styles.main}>{children}</main>
                </body>
            </html>
        </SessionProvider>
    );
}
