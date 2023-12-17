import express, { Request, Response } from 'express';
import { envConfig } from './config/env'
import './config/dbConfig'
const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
import processes from './routers/process'
import cors from 'cors';
app.use(cors({ origin: ['http://localhost:3000'] }))
app.get('/', async (req: Request, res: Response) => {
    return res.status(200).send('Hello World')
});

app.use('/api/v1', processes)

app.listen(envConfig.PORT, () => {
    console.log('Server is listening on PORT', envConfig.PORT);
});