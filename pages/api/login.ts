import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';

const proxy = httpProxy.createProxyServer();

type Data = {
    message: string;
};

export const config = {
    api: {
        bodyParser: false,
    },
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        return res.status(404).json({ message: 'Not Found Method' });
    }

    return new Promise((resolve) => {
        // req.headers.cookie = '';

        // const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
        //     let body = '';
        //     proxyRes.on('data', function (chunk) {
        //         body += chunk;
        //     });

        //     console.log(body);

        //     proxyRes.on('end', function () {
        //         try {
        //             const { accessToken, expriredAt } = JSON.parse(body);
        //             const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
        //             cookies.set('access_token', accessToken, {
        //                 httpOnly: true,
        //                 sameSite: 'lax',
        //                 expires: new Date(expriredAt),
        //             });

        //             (res as NextApiResponse).status(200).json({ message: 'login successfully' });
        //         } catch (error) {
        //             (res as NextApiResponse).status(200).json({ message: 'login Failed' });
        //         }

        //         resolve(true);
        //     });
        // };
        const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
            return new Promise((resolve, reject) => {
                let body = '';
                proxyRes.on('data', function (chunk) {
                    body += chunk;
                });

                proxyRes.on('end', function () {
                    try {
                        const { accessToken, expiredAt } = JSON.parse(body);
                        const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
                        cookies.set('access_token', accessToken, {
                            httpOnly: true,
                            sameSite: 'lax',
                            expires: new Date(expiredAt),
                        });
                        (res as NextApiResponse).status(200).json({ message: 'login successfully' });
                        resolve(true);
                    } catch (error) {
                        (res as NextApiResponse).status(200).json({ message: 'login Failed' });
                        reject(error);
                    }
                });
            });
        };

        proxy.once('proxyRes', handleLoginResponse);

        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true,
        });
    });

    // res.status(200).json({ name: 'MATCH_NGHEN' });
}
