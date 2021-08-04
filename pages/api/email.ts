import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async(_req: NextApiRequest, res: NextApiResponse) => {
  const result = await axios.post(
    `https://p93fw8sf52.execute-api.ap-southeast-1.amazonaws.com/default/afterPayEmailSender`,
      _req.body,
    {
      headers:{
        'x-api-key': 'zUO1NGDbyWg5LzF3nZ3P1yP8DwKvwFu1tNkpNUS9',
        'Content-type': 'application/json'
      }
    }
  );
  console.log(_req)
  return res.status(result.status).send(result.data);
};