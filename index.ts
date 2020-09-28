import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { cocapi } from './apis';

setInterval(() => {
    axios.get('https://apis-gateway.herokuapp.com');
    console.log('self ping each 20 minutes...');
}, 9e5)

let app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        application: `API's Gateway`, status: 'ok',
        apis: {
            coc: {
                appname: 'Clash Of Clans API Gateway',
                url: '/cocapi',
                description: ''
            }
        }
    });
});

app.use(cocapi);

const server: any = app.listen(Number(process.env.PORT) || 3000, '0.0.0.0', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`WebServer Started at http://${host}:${port}`);
});