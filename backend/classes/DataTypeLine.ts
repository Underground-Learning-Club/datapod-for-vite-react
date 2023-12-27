import { DataType } from "./DataType";
import * as qstr from '../../share/qtools/qstr.js';

export class DataTypeLine extends DataType {

	protected dataTypeIdCode = 'line';

	constructor(idCode:string, dataTypeIdCode: string) {
		super(idCode, dataTypeIdCode);
	}

	public getDataItem() {
		return {
			label: qstr.forceTitleNotation(this.idCode),
			idCode: this.idCode,
			dataTypeIdCode: "line"
		}
	}
}