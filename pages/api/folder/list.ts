import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const url = `${process.env.EAGLE_ENDPOINT}/folder/list`;
  const result = await fetch(url).then((response) => response.json());
  console.log(result);
  if (result.status === 'success') {
    res.status(200).json(result.data);
  } else {
    res.status(500).json(result.data);
  }
}
