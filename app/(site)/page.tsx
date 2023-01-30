'use client';
import '../../styles/globals.css';

import { useState } from 'react';

import styles from '../../styles/Home.module.css';

const Page = () => {
    const [input, setInput] = useState('');
    const [suggestion, setSuggestion] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const submit = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/openAiResponse', {
                method: 'POST',
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input }),
            });

            const suggestion: { result: string } = await response.json();
            const { result } = suggestion;
            setSuggestion(result);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Copywriter.AI</h1>
            <input className={styles.input} type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className={styles.submit} type="submit" onClick={submit}>
                {isLoading ? 'Loading' : 'Generate'}
            </button>
            <div>{suggestion}</div>
        </div>
    );
};

export default Page;
