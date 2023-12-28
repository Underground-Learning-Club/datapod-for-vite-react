import { DataType } from "./DataType";
import * as qstr from '../../share/qtools/qstr';

export class DataTypeUuid extends DataType {

	protected dataTypeIdCode = 'uuid';

	constructor(idCode:string) {
		super(idCode);
		this.value = qstr.generateShortUUID();
	}

}