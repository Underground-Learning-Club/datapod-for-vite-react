export class DpodDataLoader {
	private content = '';
	private lines: string[] = [];

	constructor(content: string) {
		this.content = content;
		this.lines = [];
	}

	getLines() {
		return this.content
	}
}