export interface IAppData {
	appIdCode: string;
	frontendPort: number;
	backendPort: number;
	dataPathAndFileNames: string[];
}

export const blankAppData = {
	appIdCode: 'nnn',
	frontendPort: 0,
	backendPort: 0,
	dataPathAndFileNames: []
}