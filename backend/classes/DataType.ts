export class DataType {
	protected idCode = '';
	protected label = '';
	protected dataTypeIdCode = '';

	constructor(idCode: string, dataTypeIdCode: string) {
		this.idCode = idCode;
		this.dataTypeIdCode = dataTypeIdCode;
	}

	public getDataItem() {
		return {
			label: "First Name",
			idCode: "firstName",
			dataTypeIdCode: "line"
		}
	}

}
