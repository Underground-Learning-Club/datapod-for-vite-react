/* eslint-disable @typescript-eslint/no-explicit-any */
import * as qstr from '../../share/qtools/qstr.js';

export class DataType {
	protected idCode = '';
	protected label = '';
	protected dataTypeIdCode = '';
	public value = '';

	constructor(label: string) {
		this.label = label;
		this.idCode = qstr.forceCamelNotation(this.label);
	}

	public getLabel() {
		return this.label;
	}

	private getTextValue() {
		return this.value ? this.value : '';
	}
	
	public getJsonDataLine() {
		return `\t"${this.idCode}": "${this.getTextValue()}"`
	}

	public getDataItem() {
		return {
			label: qstr.forceTitleNotation(this.idCode),
			idCode: this.idCode,
			dataTypeIdCode: this.dataTypeIdCode,
			value: this.value
		}
	}

	public setValue(value: string) {
		this.value = value;
	}

}
