import * as qstr from '../../share/qtools/qstr';
import { ILineBlockDataItem } from '../../src/interfaces';
import { DpodSchema } from './DpodSchema';
import { LineBlock } from './LineBlock';

export class DpodDataLoader {
	private content = '';
	private lines: string[] = [];
	private lineBlocks: LineBlock[] = [];
	private dpodSchemas: DpodSchema[] = [];

	constructor(content: string) {
		this.content = content;
		this.createLines();
		this.createLineBlocks();
		this.createDpodSchemas();
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

}