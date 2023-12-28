/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import * as qstr from "../../share/qtools/qstr";
import React from "react";

type DisplayFormatType = "table" | "json" | "csv" | "datapod";

interface IProps {
	group: any;
}

export const CompGroupDpodItems = ({ group }: IProps) => {
	const [displayFormat, setDisplayFormat] =
		useState<DisplayFormatType>("json");

	const handleMenuSelect = (desiredDisplayForm: DisplayFormatType) => {
		if (desiredDisplayForm !== displayFormat) {
			setDisplayFormat(desiredDisplayForm);
		}
	}

	return (
		<section className="groupDpodItems">
			<h3 className="text-xl mb-2 flex gap-4">
				<span>
					{qstr.smartPlural(
						group.dpodItems.length,
						group.singleLabel
					)}
				</span>
				<span className="flex gap-3 text-[1rem] items-center bg-gray-300 px-4 rounded shadow-inner shadow-gray-700">
					<span
						className={
							displayFormat === "table"
								? "selected"
								: "unselected"
						}
						onClick={() => handleMenuSelect('table')}
					>
						table
					</span>
					<span
						className={
							displayFormat === "json" ? "selected" : "unselected"
						}
						onClick={() => handleMenuSelect('json')}
					>
						JSON
					</span>
				</span>
			</h3>
			<table>
				<thead>
					{group.dpodItems.map((dpodItem: any, index: number) => {
						return (
							<React.Fragment key={index}>
								{index === 0 && (
									<tr>
										{dpodItem.dataTypes.map(
											(dataType: any, index: number) => {
												return (
													<th key={index}>
														{dataType.label}
													</th>
												);
											}
										)}
									</tr>
								)}
							</React.Fragment>
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
