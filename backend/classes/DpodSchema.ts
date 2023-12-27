import { DataType } from "./DataType";
import { LineBlock } from "./LineBlock";
import * as qstr from '../../share/qtools/qstr';

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
			const dataType = DataType.instantiate(fieldLine);
			if (dataType) {
				this.dataTypes.push();
			}
		}

	}
}