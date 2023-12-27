/* eslint-disable @typescript-eslint/no-explicit-any */
import * as qstr from '../../share/qtools/qstr';

export class LineBlock {
	private lines: string[] = [];

	constructor(line = '') {
		if (!qstr.isEmpty(line)) {
			this.lines.push(line);
		}
	}

	addLine(line: string) {
		this.lines.push(line);
	}

	getTest() {
		return 'this is a line block';
	}

	setDataItem(dataItem: any) {
		this.lines = dataItem.lines;
	}

	static instantiateLineBlock(lineBlockDataItem: any) {
		const lineBlock = new LineBlock();
		lineBlock.setDataItem(lineBlockDataItem);
		return lineBlock;
	}

	static instantiateLineBlocks(lineBlockDataItems: any) {
		const lineBlocks: LineBlock[] = [];
		for (const lineBlockDataItem of lineBlockDataItems) {
			lineBlocks.push(LineBlock.instantiateLineBlock(lineBlockDataItem));
		}
		return lineBlocks;
	}
}