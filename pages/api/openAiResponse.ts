// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAIApi } from 'openai';

import { CONFIGURATION, OPEN_AI_PROMPTS } from '../../utils/constants';

interface Data {
    result?: string;
    error?: string;
}

const OPEN_AI = new OpenAIApi(CONFIGURATION);

export default async function handler(request: NextApiRequest, response: NextApiResponse<Data>) {
    try {
        const { input } = request.body;
        const openaiResponse = await OPEN_AI.createCompletion({
            model: 'text-davinci-003',
            prompt: OPEN_AI_PROMPTS.marketer + input,
            temperature: 0.85,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        const suggestion = openaiResponse.data?.choices?.[0].text;

        if (suggestion === undefined) throw new Error('No suggestion found');

        response.status(200).json({ result: suggestion });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        response.status(500).json({ error: 'Internal server error' });
    }
}
