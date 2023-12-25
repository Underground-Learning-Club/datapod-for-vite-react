import express from 'express';
import * as config from '../config.js';
import cors from 'cors';
import { IAppData } from '../../src/interfaces.js';
import * as btools from '../backendTools.js';
import { getFileObjects } from '../backendDpodTools.js';

const app = express();
app.use(cors());

app.get('/', (_req, res) => {
	res.status(200).json({ 'message': 'api works' });
});

app.get('/appdata', (_req, res) => {

	const pathAndFileNames = btools.getFileNamesInDirectory('src/data');
	const fileObjects = getFileObjects(pathAndFileNames);

	const appData: IAppData = {
		appIdCode: config.appIdCode(),
		frontendPort: config.frontendPort(),
		backendPort: config.backendPort(),
		fileObjects
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