import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { limit, orderBy, tags, folders } = req.query;
  let url = 'http://192.168.234.14:41595/api/item/list?';
  if (limit !== undefined) url += `limit=${limit}&`;
  if (orderBy !== undefined) url += `orderBy=${orderBy}&`;
  if (tags !== undefined) url += `tags=${tags}&`;
  if (folders !== undefined) url += `folders=${folders}&`;
  const result = await fetch(url).then((response) => response.json());
  //console.log(result);
  if (result.status === 'success') {
    res.status(200).json(result.data);
  } else {
    res.status(500);
  }
}
