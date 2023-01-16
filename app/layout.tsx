
import { SessionProvider } from 'next-auth/react';
import Navbar from './Navbar';

import { Inter } from '@next/font/google'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

export default function RootLayout({ children, session }: {
  	children: React.ReactNode;
		session: any;
	}) {
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