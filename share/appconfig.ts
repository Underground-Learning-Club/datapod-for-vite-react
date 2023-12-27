import * as qfil from './qtools/qfil';
import * as apptools from './apptools';

export const appIdCode = (): string => {
	const packageJsonObj = qfil.readJsonFile('./package.json');
	const idCode = packageJsonObj.name;
	return idCode;
}

export const frontendPort = (): number => {
	const packageJsonObj = qfil.readJsonFile('./package.json');
	const devCommand = packageJsonObj.scripts.frontend;
	const port = apptools.extractPortNumber(devCommand);
	return port;
}

export const backendPort = (): number => {
	return 3041;
}

export const importDirectory = (): string => {
	return 'import2';
}