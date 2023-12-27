import * as qstr from '../../share/qtools/qstr';
import { DataTypeJudoBelt } from './DataTypeJudoBelt';
import { DataTypeKilometers } from './DataTypeKilometers';
import { DataTypeLine } from './DataTypeLine';
import { DataTypeWholeNumber } from './DataTypeLine copy';
import { DataTypeUnknown } from './DataTypeUnknown';

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
				return new DataTypeLine(idCode);
			case 'km':
			case 'kilometers':
				return new DataTypeKilometers(idCode);
			case 'wn':
			case 'wholeNumber':
				return new DataTypeWholeNumber(idCode);
			case 'judoBelt':
				return new DataTypeJudoBelt(idCode);
			default:
				return new DataTypeUnknown(idCode, dataTypeIdCode);
		}
	}
}