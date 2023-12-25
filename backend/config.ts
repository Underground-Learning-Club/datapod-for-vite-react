import * as btools from './backendTools.js';
import * as tools from '../src/tools.js';

export const appIdCode = () : string => {
	const packageJsonObj = btools.readJsonFile('./package.json');
	const idCode = packageJsonObj.name;
	return idCode;
}

export const frontendPort = () : number => {
	const packageJsonObj = btools.readJsonFile('./package.json');
	const devCommand = packageJsonObj.scripts.frontend;
	const port = tools.extractPortNumber(devCommand);	
	return port;
}

export const backendPort = () : number => { 
	return 3041;
}
