import * as qstr from '../../share/qtools/qstr.js';

export class DataType {
	protected idCode = '';
	protected label = '';
	protected dataTypeIdCode = '';

	constructor(idCode: string) {
		this.idCode = idCode;
	}

	public getDataItem() {
		return {
			label: qstr.forceTitleNotation(this.idCode),
			idCode: this.idCode,
			dataTypeIdCode: this.dataTypeIdCode
		}
	}

}
