import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

interface AppProps {
    session: object;
}

export default function App({ Component, pageProps, session }: AppProps) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
