/* eslint-disable @typescript-eslint/no-explicit-any */
import * as qstr from '../../share/qtools/qstr';

interface IProps {
	group: any;
}
export const CompGroupDpodItems = ({ group }: IProps) => {
	return (
		<section className="groupDpodItems">
			<h3 className="text-xl mb-2">
				{qstr.smartPlural(group.dpodItems.length, group.singleLabel)}
			</h3>
			<table>
				<thead>
					{group.dpodItems.map((dpodItem:any, index: number) => {
						return (
							<>
								{index === 0 && (
									<tr key={index}>
										{dpodItem.dataTypes.map(
											(dataType:any, index:number) => {
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
					{group.dpodItems.map((dpodItem:any, index: number) => {
						return (
							<tr key={index}>
								{dpodItem.dataTypes.map(
									(dataType:any, index: number) => {
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
