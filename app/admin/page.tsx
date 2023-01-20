'use client';
import { useState } from 'react';

import styles from '../../styles/Home.module.css';

const Page = () => {
    const [input, setInput] = useState('');
    const [suggestion, setSuggestion] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/aiResponse', {
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
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className={styles.title}>AI ChatBot</h1>
            <input className={styles.input} type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className={styles.submit} type="submit" onClick={submit}>
                {loading ? 'Loading' : 'Generate'}
            </button>
            <div>{suggestion}</div>
        </div>
    );
};

export default Page;
