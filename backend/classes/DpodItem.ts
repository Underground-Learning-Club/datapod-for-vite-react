import { LineBlock } from "./LineBlock";
import * as qstr from '../../share/qtools/qstr';
import { DpodDataLoader } from "./DpodDataLoader";
import { DpodSchema } from "./DpodSchema";

export class DpodItem {
	private lineBlock: LineBlock;
	private schemaIdCode: string = '';
	private singularSchemaIdCode: string = '';
	private dpodSchema!: DpodSchema;
	private dpodDataLoader;

	constructor(lineBlock: LineBlock, dpodDataLoader: DpodDataLoader) {
		this.lineBlock = lineBlock;
		this.dpodDataLoader = dpodDataLoader;
		this.createProperties();
		this.defineDpodSchema();
	}

	private defineDpodSchema() {
		for (const dpodSchema of this.dpodDataLoader.getDpodSchemas()) {
			if (dpodSchema.getIdCode() === this.schemaIdCode) {
				this.dpodSchema = dpodSchema;
			}
		}
	}
	
	public getSchemaIdCode() {
		return this.schemaIdCode;
	}

	private createProperties() {
		this.singularSchemaIdCode = qstr.chopLeft(this.lineBlock.getFirstLine(), '==').trim();
		this.schemaIdCode = qstr.forceCamelNotation(qstr.forcePlural(this.singularSchemaIdCode));
	}

	public debug() {
		console.log(`=== DpodItem ===`);
		console.log(`schemaIdCode: ${this.schemaIdCode}`);
		console.log(`singularSchemaIdCode: ${this.singularSchemaIdCode}`);
		if (this.dpodSchema) {
			console.log(`dpodSchema idCode: ${this.dpodSchema.getIdCode()}`);
		}
		console.log(``);
	}


}