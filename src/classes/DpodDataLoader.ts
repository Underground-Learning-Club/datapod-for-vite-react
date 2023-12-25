import * as qstr from '../../share/qtools/qstr';

export class DpodDataLoader {
	private content = '';
	private lines: string[] = [];

	constructor(content: string) {
		this.content = content;
		this.lines = qstr.convertStringBlockToLines(this.content);
	}

	getNumberOfLines() {
		return this.lines.length;
	}
}