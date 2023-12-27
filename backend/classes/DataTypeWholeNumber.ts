import { DataType } from "./DataType";

export class DataTypeWholeNumber extends DataType {

	protected dataTypeIdCode = 'wholeNumber';

	constructor(idCode:string) {
		super(idCode);
	}

}