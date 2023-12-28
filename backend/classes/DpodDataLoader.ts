/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as qstr from '../../share/qtools/qstr';
import { ILineBlockDataItem } from '../../src/interfaces';
import { DpodItem } from './DpodItem';
import { DpodSchema } from './DpodSchema';
import { LineBlock } from './LineBlock';

export class DpodDataLoader {
	private content = '';
	private lines: string[] = [];
	private lineBlocks: LineBlock[] = [];
	private dpodSchemas: DpodSchema[] = [];
	private dpodItems: DpodItem[] = [];
	private dpodItemGroups: any = {};
	private jsonData: any = {};

	constructor(content: string) {
		this.content = content;
		this.createLines();
		this.createLineBlocks();
		this.createDpodSchemas();
		this.createItems();
		this.createDpodItemGroups();
		this.createJsonData();
	}

	private createJsonData() {
		const keys = Object.keys(this.dpodItemGroups);
		for (const key of keys) {
			const dpodItems: DpodItem[] = this.dpodItemGroups[key];
			const jsonDataTexts = [];
			for (const dpodItem of dpodItems) {
				jsonDataTexts.push(dpodItem.getJsonData());
			}
			this.jsonData[key] = jsonDataTexts.join(',\n');
		}
	}

	private createDpodItemGroups() {
		for (const dpodItem of this.dpodItems) {
			const schemaIdCode = dpodItem.getSchemaIdCode();
			if (!this.dpodItemGroups.hasOwnProperty(schemaIdCode)) {
				this.dpodItemGroups[schemaIdCode] = [];
			}
			this.dpodItemGroups[schemaIdCode].push(dpodItem);
		}
	}

	public debug() {
		console.log(`=== DpodDataLoader ===`);
		console.log(`number of dpodItems: ${this.dpodItems.length}`);
	}

	private createItems() {
		for (const lineBlock of this.lineBlocks) {
			const lineBlockKind = lineBlock.getKind();
			if (lineBlockKind === 'item') {
				const dpodItem = new DpodItem(lineBlock, this);
				this.dpodItems.push(dpodItem);
			}
		}
	}

	public getLineBlockDataItems(): ILineBlockDataItem[] {
		return this.lineBlocks.map(m => m.getLineBlockDataItem());
	}

	private createLines() {
		this.lines = qstr.convertStringBlockToLines(this.content);
	}

	private createLineBlocks() {
		let lineBlock = new LineBlock();
		let isRecordingLineBlock = false;
		for (const line of this.lines) {

			// ignore empty lines in file
			if (!isRecordingLineBlock && qstr.isEmpty(line)) {
				continue;
			}

			// we need to start recording a line block again
			if (!isRecordingLineBlock && !qstr.isEmpty(line)) {
				lineBlock = new LineBlock();
				isRecordingLineBlock = true;
			}

			// we are recording a line block and we need to add the current line
			if (isRecordingLineBlock && !qstr.isEmpty(line)) {
				lineBlock.addLine(line);
			}

			// we need to finish recording a line block
			if (isRecordingLineBlock && qstr.isEmpty(line)) {
				this.lineBlocks.push(lineBlock);
				isRecordingLineBlock = false;
			}
		}

		// record last one
		if (isRecordingLineBlock) {
			this.lineBlocks.push(lineBlock);
		}
	}

	public createDpodSchemas(): void {
		for (const lineBlock of this.lineBlocks) {
			const lineBlockKind = lineBlock.getKind();
			if (lineBlockKind === 'schema') {
				const dpodSchema = new DpodSchema(lineBlock)
				this.dpodSchemas.push(dpodSchema);
			}
		}
	}

	public getDpodSchemas() {
		return this.dpodSchemas
	}

	public getDpodSchemaDataItems() {
		const dpodSchemaDataItems: any[] = [];
		for (const dpodSchema of this.dpodSchemas) {
			dpodSchemaDataItems.push(dpodSchema.getDataItem());
		}
		return dpodSchemaDataItems;
	}

	public getDpodItemGroupDataItems() {
		const ra = [];
		const keys = Object.keys(this.dpodItemGroups);
		for (const key of keys) {
			const dpodItems: DpodItem[] = this.dpodItemGroups[key];
			const dpodDataItems = dpodItems.map(m => m.getDataItem())
			const titlePlural = qstr.forceTitleNotation(key);
			const titleSingular = qstr.forceSingular(titlePlural);
			ra.push({
				idCode: key,
				label: titlePlural,
				singleLabel: titleSingular,
				jsonData: this.jsonData[key],
				csvData: '(csv data)',
				datapodData: '(datapod data)',
				dpodItems: dpodDataItems
			})
		}
		return ra;
	}

}