import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async(_req: NextApiRequest, res: NextApiResponse) => {
  const result = await axios.get(
    `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":${_req.query.id},"first":3}`,
    {
      headers:{
        'access_token': "EAADDpZAcA1OsBAEI5VBGK4auUN4Nt60m55xnf2gt9IRcFlo9FzzQXmTM28Ma86qOzsZB0wRZC9n1EnsgEryh4jjbzGR3BJQhrCIJ5TJSQYmztpZBwmP009eo0MZB2xGC6I6tQhzPUVEpL2OEyYgmhoZBRikJen2Mn4ZBBp5f4O0M4DzropE7ZA5GWhHdEkf8Jjq0ArQOO6lIL5xGTnmfdyihZCyXWMyAVsKSlUhuY9R68n9TceIdEdBFj",
        'Content-Type': 'application/json',
      }
    }
  );
  return res.status(result.status).send(result.data);
};