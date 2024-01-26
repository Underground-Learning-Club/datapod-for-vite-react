import { DataType } from "./DataType";

export class DataTypeDecimal extends DataType {

	protected dataTypeIdCode = 'decimal';

	constructor(idCode:string) {
		super(idCode);
	}

}