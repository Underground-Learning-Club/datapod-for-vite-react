import { IDpodSchemaDataItem } from "../interfaces"

/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProps {
	dpodSchemaDataItem: IDpodSchemaDataItem;
}

export const CompDpodSchemaItem = ({ dpodSchemaDataItem }:IProps) => {
	return (
		<table className="dpodSchema">
			<tbody>
				<tr><td className="title">{dpodSchemaDataItem.idCode}</td></tr>
				<tr><td>
					{dpodSchemaDataItem.dataTypes.map((dataType, index) => {
						return (
							<div key={index}>
							<p>{dataType.idCode}</p>
							</div>
						)
					})}
				</td></tr>
			</tbody>
		</table>
	)
}