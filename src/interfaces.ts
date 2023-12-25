export interface IAppData {
	appIdCode: string;
	frontendPort: number;
	backendPort: number;
}

export const blankAppData = {
	appIdCode: 'nnn',
	frontendPort: 0,
	backendPort: 0
}