import axios from 'axios';
import express, { Router } from 'express';

let cocapi = Router();

var http = axios.create({
    baseURL: 'https://api.clashofclans.com/v1',
    timeout: 10000,
    httpAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.74 Safari/537.36 Edg/79.0.309.43',
});
http.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

cocapi.use(express.json());
cocapi.use(express.urlencoded({ extended: true }));

cocapi.get('/cocapi', (req, res) => {
    res.json({ application: 'Clash Of Clans API Gateway', status: 'ok' });
});

cocapi.use('/cocapi/*', (req, res) => {
    let url = req.originalUrl.replace('/cocapi', '');
    let authorization = req.headers.authorization;

    if (!authorization) {
        res.status(403).json({ message: `Please send us a token` });
        return;
    }

    http.get(url, {
        headers: {
            authorization
        }
    }).then(result => {
        console.log('ok');
        res.json(result.data)
    }).catch(error => {
        res.status(error.response?.status)
            .json(error.response?.data || { message: error.response?.statusText });
    });
});

export default cocapi;
