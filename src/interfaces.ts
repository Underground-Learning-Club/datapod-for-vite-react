/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineBlock } from "./classes/LineBlock";

export interface IFileObject {
	pathAndFileName: string;
	content: string;
}

interface IBaseAppData {
	appIdCode: string;
	frontendPort: number;
	backendPort: number;
	fileObjects: IFileObject[];
	entireContent: string;
}

export interface IAppData extends IBaseAppData {
	lineBlocks: LineBlock[];
}

export interface IJsonAppData extends IBaseAppData {
	lineBlockDataItems: any[];
}

export const blankAppData = {
	appIdCode: 'nnn',
	frontendPort: 0,
	backendPort: 0,
	fileObjects: [],
	entireContent: '',
	lineBlocks: []
}