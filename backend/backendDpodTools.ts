import { IFileObject } from "../src/interfaces.js";
import * as btools from './backendTools.js';

/**
 * getFileObjects
 * 
 * const fileObjects = getFileObjects(pathAndFileNames);
 * 
 */
export const getFileObjects = (pathAndFileNames: string[]): IFileObject[] => {
	const fileObjects = [] as IFileObject[];
	for (const pathAndFileName of pathAndFileNames) {
		fileObjects.push({
			pathAndFileName,
			content: btools.readTextFile('src/data/' + pathAndFileName)
		})
	}
	return fileObjects;
}

/**
 * getEntireContent
 * 
 * 
 */
export const getEntireContent = (fileObjects: IFileObject[]): string => {
	return `entire content with ${fileObjects.length} files`;
}