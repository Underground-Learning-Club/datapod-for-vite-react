/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import * as qstr from "../../share/qtools/qstr";

type DisplayFormatType = "table" | "json" | "csv" | "datapod";

interface IProps {
	group: any;
}

export const CompGroupDpodItems = ({ group }: IProps) => {
	const [displayFormat, setDisplayFormat] =
		useState<DisplayFormatType>("table");

	return (
		<section className="groupDpodItems">
			<h3 className="text-xl mb-2 flex gap-4">
				<span>{qstr.smartPlural(group.dpodItems.length, group.singleLabel)}</span>
				<span className="flex gap-3 text-[1rem] items-center bg-gray-300 px-4 rounded shadow-inner shadow-gray-700">
					<p>table</p>
					<p>JSON</p>
				</span>
			</h3>
			<table>
				<thead>
					{group.dpodItems.map((dpodItem: any, index: number) => {
						return (
							<>
								{index === 0 && (
									<tr key={index}>
										{dpodItem.dataTypes.map(
											(dataType: any, index: number) => {
												return (
													<>
														<th key={index}>
															{dataType.label}
														</th>
													</>
												);
											}
										)}
									</tr>
								)}
							</>
						);
					})}
				</thead>
				<tbody>
					{group.dpodItems.map((dpodItem: any, index: number) => {
						return (
							<tr key={index}>
								{dpodItem.dataTypes.map(
									(dataType: any, index: number) => {
										return (
											<td key={index}>
												{dataType.value}
											</td>
										);
									}
								)}
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
};
