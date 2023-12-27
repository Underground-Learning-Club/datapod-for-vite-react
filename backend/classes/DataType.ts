import * as qstr from '../../share/qtools/qstr.js';

export class DataType {
	protected idCode = '';
	protected label = '';
	protected dataTypeIdCode = '';

	constructor(label: string) {
		this.label = label;
		this.idCode = qstr.forceCamelNotation(this.label);
	}

	public getDataItem() {
		return {
			label: qstr.forceTitleNotation(this.idCode),
			idCode: this.idCode,
			dataTypeIdCode: this.dataTypeIdCode
		}
	}

}
