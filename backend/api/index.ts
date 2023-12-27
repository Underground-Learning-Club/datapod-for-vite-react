import express from 'express';
import cors from 'cors';
import { IAppData } from '../../src/interfaces.js';
import * as qfil from '../../share/qtools/qfil.js';
import * as apptools from '../../share/apptools.js';
import * as appconfig from '../../share/appconfig.js';
import { DpodDataLoader } from '../../src/classes/DpodDataLoader.js';

const app = express();
app.use(cors());

app.get('/', (_req, res) => {
	res.status(200).json({ 'message': 'api works' });
});

app.get('/appdata', (_req, res) => {

	const pathAndFileNames = qfil.getFileNamesInDirectory('src/data');
	const fileObjects = apptools.getFileObjects(pathAndFileNames);
	const entireContent = apptools.getEntireContent(fileObjects);
	const dpodDataLoader = new DpodDataLoader(entireContent);
	const schemaDataItems = dpodDataLoader.getSchemaDataItems();

	const appJsonData: IAppData = {
		appIdCode: appconfig.appIdCode(),
		frontendPort: appconfig.frontendPort(),
		backendPort: appconfig.backendPort(),
		fileObjects,
		entireContent,
		lineBlockDataItems: dpodDataLoader.getLineBlockDataItems()
	}
	res.status(200).json(appJsonData);
});

app.listen(appconfig.backendPort(), () => {
	console.log(`---
APP: ${appconfig.appIdCode()}
FRONTEND URL: http://localhost:${appconfig.frontendPort()}
BACKEND URL: http://localhost:${appconfig.backendPort()}
BACKEND APP DATA: http://localhost:${appconfig.backendPort()}/appdata
`);
});