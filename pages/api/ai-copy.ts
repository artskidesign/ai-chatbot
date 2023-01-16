// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAIApi } from 'openai'
import { configuration } from '../../utils/constants'

type Data = {
  result: string
}

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { input } = req.body
  const response = await openai.createCompletion({
    "model": "text-davinci-003",
    "prompt": `You are an experienced marketer that is here to prepare a post for social media posts for Facebook about this product ${input}`,
    "temperature": 0.85,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
  });

  const suggestion = response.data?.choices?.[0].text;

  if (suggestion === undefined) throw new Error('No suggestion found');

  res.status(200).json({ result: suggestion })
}
