import { DataType } from "./DataType";

export class DataTypeKilometers extends DataType {

	protected dataTypeIdCode = 'kilometers';

	constructor(idCode:string) {
		super(idCode);
	}

}