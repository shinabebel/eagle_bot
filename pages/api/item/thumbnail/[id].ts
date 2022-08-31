import { createReadStream, existsSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;
  //console.log(id);
  const url = `${process.env.EAGLE_ENDPOINT}/item/thumbnail?id=${id}`;
  const result = await fetch(url).then((response) => response.json());
  const path = decodeURI(result.data);
  const ext = path.substring(path.length - 3);
  if (result.status === 'success') {
    if (existsSync(path)) {
      const file = createReadStream(path);
      res.writeHead(200, {
        'Content-Type': `image/${ext}`,
        'Content-Disposition': `attachment; filename="thumbnail.${ext}"`,
      });
      file.pipe(res);
    } else {
      res.status(500).send('File is not exist.');
    }
  } else {
    res.status(500).json(result.data);
  }
}
