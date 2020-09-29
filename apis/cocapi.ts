import request from 'request';
import express, { Router } from 'express';

let cocapi = Router();

// REQUEST Configuration
var proxiedRequest = request.defaults({
    baseUrl: 'https://api.clashofclans.com/v1',
    'proxy': process.env.IPB_HTTP || 'http://zxtrtr:t+helg@c@66-154-123-139.ip.heroku.ipb.cloud:9080'
});

cocapi.use(express.json());
cocapi.use(express.urlencoded({ extended: true }));

cocapi.get('/cocapi', (req, res) => {
    res.json({ application: 'Clash Of Clans API Gateway', status: 'ok' });
});

cocapi.use('/cocapi/*', async (req, res) => {
    let url = req.originalUrl.replace('/cocapi', '');
    let authorization = req.headers.authorization;

    if (!authorization) {
        res.status(403).json({ message: `Please send us a token` });
        return;
    }

    proxiedRequest.get(url, {
        headers: { authorization }
    }, (error, response, body) => {
        if (error)
            console.log(error);

        // console.log(response.statusCode, body);
        res.status(response.statusCode).json(JSON.parse(body));
    });
});

export default cocapi;
