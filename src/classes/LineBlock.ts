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
}