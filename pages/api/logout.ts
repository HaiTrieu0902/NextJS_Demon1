import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

type Data = {
    name: string;
};
const proxy = httpProxy.createProxyServer();
export const config = {
    api: {
        bodyParser: false,
    },
};

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method !== 'POST') {
        return res.status(404).json({ message: 'Not Found Method' });
    }

    const cookies = new Cookies(req, res);
    cookies.set('access_token');

    (res as NextApiResponse).status(200).json({ message: 'logout successfully' });
}
