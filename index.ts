import express from 'express';
import { cocapi } from './apis';

let app = express();
app.use(express.json());
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