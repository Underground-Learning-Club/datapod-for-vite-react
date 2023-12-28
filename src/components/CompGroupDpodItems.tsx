/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProps {
	group: any;
}
export const CompGroupDpodItems = ({ group }: IProps) => {
	return (
		<section className="groupDpodItems">
			<h3 className="text-xl mb-2">
				{group.dpodItems.length} {group.idCode}
			</h3>
			<table>
				<thead>
					{group.dpodItems.map((dpodItem, index: number) => {
						return (
							<>
								{index === 0 && (
									<tr key={index}>
										{dpodItem.dataTypes.map(
											(dataType, index) => {
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
		</section>
	);
};
