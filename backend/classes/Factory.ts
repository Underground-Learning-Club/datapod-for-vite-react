import * as qstr from '../../share/qtools/qstr';
import { DataTypeLine } from './DataTypeLine';

export class Factory {

	public static instantiateDataType(dataTypeDefinitionLine: string) {
		if (!dataTypeDefinitionLine.includes(';')) {
			dataTypeDefinitionLine += ';line';
		}

		const parts = qstr.breakIntoParts(dataTypeDefinitionLine,';');
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