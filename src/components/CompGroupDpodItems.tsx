/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProps {
	group: any;
}
export const CompGroupDpodItems = ({ group }: IProps) => {
	return (
		<>
			<p>{group.dpodItems.length} {group.idCode}</p>
			<table className="groupDpodItems">
				<thead>
					<tr>
						<th>111</th>
						<th>222</th>
					</tr>
				</thead>
				<tbody>
					{group.dpodItems.map((dpodItem, index) => {
						return (
							<tr>
								{dpodItem.dataTypes.map((dataType, index) => {
									return (
										<td key={index}>nnn</td>	
)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	);
};
