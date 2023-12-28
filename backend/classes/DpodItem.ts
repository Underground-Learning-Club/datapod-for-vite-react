import { LineBlock } from "./LineBlock";
import * as qstr from '../../share/qtools/qstr';
import { DpodDataLoader } from "./DpodDataLoader";
import { DpodSchema } from "./DpodSchema";
import { DataType } from "./DataType";

export class DpodItem {
	private lineBlock: LineBlock;
	private schemaIdCode: string = '';
	private singularSchemaIdCode: string = '';
	private dpodSchema!: DpodSchema;
	private dpodDataLoader;
	public dataTypes: DataType[] = [];

	constructor(lineBlock: LineBlock, dpodDataLoader: DpodDataLoader) {
		this.lineBlock = lineBlock;
		this.dpodDataLoader = dpodDataLoader;
		this.createProperties();
		this.defineDpodSchema();
		this.createDataTypes();
	}

	private createDataTypes() {
		const _dataTypes = this.dpodSchema.getDataTypes();
		const fieldLines = this.lineBlock.getAllLinesButFirst();
		if (this.dpodSchema) {
			let index = 0;
			for (const _dataType of _dataTypes) {
				const __dataType = new DataType(_dataType.getLabel());
				const fieldLine = fieldLines[index];
				__dataType.setValue(fieldLine);
				this.dataTypes.push(__dataType);
				index++;
			}
		}
	}

	private createDataTypes2() {
		const fieldLines = this.lineBlock.getAllLinesButFirst();
		if (this.dpodSchema) {
			const _dataTypes = this.dpodSchema.getDataTypes();
			let index = 0;
			for (const fieldLine of fieldLines) {
				const _dataType = _dataTypes[index];
				_dataType.setValue(fieldLine);
				this.dataTypes.push(_dataType);
				index++;
			}
		}
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

	public getDataItem() {
		return {
			singularSchemaIdCode: this.singularSchemaIdCode,
			dataTypes: this.dataTypes.map(m => m.getDataItem())
		}
	}

	private getJsonDataFieldText() {
		const jsonDataLines = [];
		for (const dataType of this.dataTypes) {
			jsonDataLines.push(`${dataType.getJsonDataLine()}`);
		}
		return jsonDataLines.join(',\n');
	}

	private getDatapodDataFieldText() {
		const datapodDataLines = [];
		for (const dataType of this.dataTypes) {
			datapodDataLines.push(`${dataType.getDatapodDataLine()}`);
		}
		return datapodDataLines.join('\n');
	}

	public getJsonData() {
		return `
{
${this.getJsonDataFieldText()}
}
		`.trim();
	}

	public getDatapodData() {
		return `
==${this.singularSchemaIdCode}
${this.getDatapodDataFieldText()}
		`.trim();
	}

	public getCsvLabelLine() {
		const csvDataFields = [];
		for (const dataType of this.dataTypes) {
			csvDataFields.push(`"${dataType.getLabel()}"`);
		}
		return csvDataFields.join(',');
	}

	public getCsvData() {
		const csvDataFields = [];
		for (const dataType of this.dataTypes) {
			csvDataFields.push(`"${dataType.getTextValue()}"`);
		}
		return csvDataFields.join(',');
	}

	public getXmlData() {
		const xmlDataFields = [];
		for (const dataType of this.dataTypes) {
			xmlDataFields.push(`\t\t<${dataType.getIdCode()}>${dataType.getTextValue()}</${dataType.getIdCode()}>`);
		}
		return `\t<${this.singularSchemaIdCode}>
${xmlDataFields.join('\n')}
\t</${this.singularSchemaIdCode}>`
	}
}