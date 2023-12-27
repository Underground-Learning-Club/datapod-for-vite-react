export interface IFileObject {
	pathAndFileName: string;
	content: string;
}

export interface ILineBlockDataItem {
	lines: string[];
}

export interface IAppData {
	appIdCode: string;
	frontendPort: number;
	backendPort: number;
	fileObjects: IFileObject[];
	entireContent: string;
	lineBlockDataItems: ILineBlockDataItem[];
}

export const blankAppData = {
	appIdCode: 'nnn',
	frontendPort: 0,
	backendPort: 0,
	fileObjects: [],
	entireContent: '',
	lineBlockDataItems: []
}

export interface ISchemaField {
	idCode: string;
	dataTypeIdCope: string;
}

export interface ISchemaDataItem {
	schemaIdCode: string;
	schmemaFields: ISchemaField[];
}

export type ILineBlockKind = 'schema' | 'item' | 'UNKNOWN';