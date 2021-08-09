import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async(_req: NextApiRequest, res: NextApiResponse) => {
  const result = await axios.get(
    `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":${_req.query.id},"first":3,"after":null}`
  );
  return res.status(result.status).send(result.data);
};