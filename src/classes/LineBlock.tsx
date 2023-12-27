/* eslint-disable @typescript-eslint/no-explicit-any */
import * as qstr from '../../share/qtools/qstr';

export class LineBlock {
	private lines: string[] = [];

	constructor(line = '') {
		if (!qstr.isEmpty(line)) {
			this.lines.push(line);
		}
	}

	public addLine(line: string) {
		this.lines.push(line);
	}

	public setDataItem(dataItem: any) {
		this.lines = dataItem.lines;
	}

	public getNumberOfLines() {
		return this.lines.length;
	}

	public blankOutLines() {
		console.log('blanking');
		return this.lines = [];
	}

	public getJsx() {
		return (
			<p onClick={() => this.blankOutLines()}>dkjdkjf</p>
		)
	}

	public static instantiateLineBlock(lineBlockDataItem: any) {
		const lineBlock = new LineBlock();
		lineBlock.setDataItem(lineBlockDataItem);
		return lineBlock;
	}

	public static instantiateLineBlocks(lineBlockDataItems: any) {
		const lineBlocks: LineBlock[] = [];
		for (const lineBlockDataItem of lineBlockDataItems) {
			lineBlocks.push(LineBlock.instantiateLineBlock(lineBlockDataItem));
		}
		return lineBlocks;
	}
}