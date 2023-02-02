import '../../styles/globals.css';

import navigation from '../../data/navigation.json';
import styles from '../../styles/Home.module.css';
import { Navbar } from '../components/Navbar';
import { Provider } from './provider';

interface Properties {
    children: React.ReactNode;
    session: any;
}

export default function RootLayout({ children }: Properties) {
    return (
        <html lang="en">
            <Provider>
                <body>
                    <main className={styles.main}>
                        <Navbar items={navigation} />
                        {children}
                    </main>
                </body>
            </Provider>
        </html>
    );
}
