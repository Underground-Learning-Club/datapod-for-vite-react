import * as qstr from '../../share/qtools/qstr';
import { LineBlock } from './LineBlock';

export class DpodDataLoader {
	private content = '';
	private lines: string[] = [];

	constructor(content: string) {
		console.log('in constr');
		this.content = content;
		this.createLines();
		this.createLineBlocks();
	}

	createLines() {
		this.lines = qstr.convertStringBlockToLines(this.content);
	}

	createLineBlocks() {
		let lineBlock = new LineBlock();
		console.log('here');
		for (const line of this.lines) {
			if (qstr.isEmpty(line)) {
				continue;
			}
			// console.log(line);
		}
	}

	getNumberOfLines() {
		return this.lines.length;
	}
}