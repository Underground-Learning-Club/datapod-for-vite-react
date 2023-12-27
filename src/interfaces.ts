import { LineBlock } from "./classes/LineBlock";

export interface IFileObject {
	pathAndFileName: string;
	content: string;
}

export interface IAppData {
	appIdCode: string;
	frontendPort: number;
	backendPort: number;
	fileObjects: IFileObject[];
	entireContent: string;
	lineBlocks: LineBlock[];
}

export const blankAppData = {
	appIdCode: 'nnn',
	frontendPort: 0,
	backendPort: 0,
	fileObjects: [],
	entireContent: '',
	lineBlocks: []
}