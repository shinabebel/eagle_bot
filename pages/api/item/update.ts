import type { NextApiRequest, NextApiResponse } from 'next';
import { eagleEndpoint } from '../../api';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'POST') {
        const url = `${eagleEndpoint}/item/update`;
        const result = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body),
        }).then((response) => response.json());
        console.log(result);
        res.status(200).json(result.data);
    } else {
        res.status(500).json('GET method is not available.');
    }
}
