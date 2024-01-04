import { DataType } from "./DataType";

export class DataTypeParagraph extends DataType {

	constructor(idCode:string) {
		super(idCode);
		this.dataTypeIdCode = 'paragraph';
	}
	
	public getTextValue() {
		return this.value ? this.value + 'para' : '';
	}


}