import express from 'express';
import * as config from '../config.js';
import cors from 'cors';
import { IAppData } from '../../src/interfaces.js';

const app = express();
app.use(cors());

app.get('/', (_req, res) => {
	res.status(200).json({ 'message': 'api works' });
});

app.get('/appdata', (_req, res) => {
	const appData: IAppData = {
		appIdCode: config.appIdCode(),
		frontendPort: config.frontendPort(),
		backendPort: config.backendPort()
	}
	res.status(200).json(appData);
});

app.listen(config.backendPort(), () => {
	console.log(`---
APP: ${config.appIdCode()}
FRONTEND URL: http://localhost:${config.frontendPort()}
BACKEND URL: http://localhost:${config.backendPort()}
`);
});