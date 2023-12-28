/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProps {
	group: any;
}
export const CompGroupDpodItems = ({ group }: IProps) => {
	return (
		<>
			<p>
				{group.dpodItems.length} {group.idCode}
			</p>
			<table className="groupDpodItems">
				<thead>
					{group.dpodItems.map((dpodItem, index: number) => {
						return (
							<tr key={index}>
								{dpodItem.dataTypes.map((dataType, index) => {
									return (
										<th key={index}>
											{dataType.label}
										</th>
									);
								})}
							</tr>
						);
					})}
				</thead>
				<tbody>
					{group.dpodItems.map((dpodItem, index: number) => {
						return (
							<tr key={index}>
								{dpodItem.dataTypes.map(
									(dataType, index: number) => {
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
		</>
	);
};
