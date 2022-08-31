import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const url = 'http://192.168.234.14:41595/api/folder/list';
  const result = await fetch(url).then((response) => response.json());
  console.log(result);
  if (result.status === 'success') {
    res.status(200).json(result.data);
  } else {
    res.status(500);
  }
}