import * as qstr from '../../share/qtools/qstr';
import { DataTypeLine } from './DataTypeLine';

export class DataType {
	protected idCode = '';
	protected label = '';
	protected dataTypeIdCode = '';

	constructor(idCode:string, dataTypeIdCode: string) {
		this.idCode = idCode;
		this.dataTypeIdCode = dataTypeIdCode;
	}

	public static instantiate(dataTypeDefinitionLine: string) {
		// "First Name"
		// "level;judoBelt"
		// "Description"
		// "Description;p"

		if (!dataTypeDefinitionLine.includes(';')) {
			dataTypeDefinitionLine += ';line';
		}

		// "First Name;line"
		// "level;judoBelt"
		// "Description;line"
		// "Description;p"
		const parts = qstr.breakIntoParts(';');
		const idCode = parts[0];
		const dataTypeIdCode = parts[1]; // TODO: make a type
		switch (dataTypeIdCode) {
			case 'line':
				return new DataTypeLine(idCode, dataTypeIdCode);
			default:
				return null;
		}
	}
}