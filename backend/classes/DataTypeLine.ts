import { DataType } from "./DataType";

export class DataTypeLine extends DataType {

	protected dataTypeIdCode = 'line';

	constructor(idCode:string, dataTypeIdCode: string) {
		super(idCode, dataTypeIdCode);
	}
}