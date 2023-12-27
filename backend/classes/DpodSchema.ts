import { DataType } from "./DataType";
import { LineBlock } from "./LineBlock";
import * as qstr from '../../share/qtools/qstr';
import { Factory } from "./Factory";

export class DpodSchema {
	private lineBlock: LineBlock;
	private idCode: string = '';
	private dataTypes: DataType[] = [];

	// ** Flashcards
	// front
	// back
	// rank;wn
	constructor(lineBlock: LineBlock) {
		this.lineBlock = lineBlock;
		this.createIdCode();
		this.createDataTypes();
	}

	private createIdCode() {
		this.idCode = qstr.chopLeft(this.lineBlock.getFirstLine(), '**').trim();
	}

	private createDataTypes() {
		const fieldLines = this.lineBlock.getAllLinesButFirst();
		for (const fieldLine of fieldLines) {
			const dataType = Factory.instantiateDataType(fieldLine);
			if (dataType) {
				this.dataTypes.push();
			}
		}
	}

	public getDataItem() {
		return {
			idCode: this.idCode
		}
	}
}