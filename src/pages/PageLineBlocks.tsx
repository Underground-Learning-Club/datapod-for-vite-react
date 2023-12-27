import { useContext } from "react";
import { AppContext } from "../AppContext";
import { CompLineBlock } from "../components/CompLineBlock";

export const PageLineBlocks = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<p>Number of LineBlocks: {appData.lineBlockDataItems.length}</p>

			{appData.lineBlockDataItems.map((lineBlockDataItem, index) => {
				return (
					<div key={index}>
						<CompLineBlock lineBlockDataItem={lineBlockDataItem} />
					</div>
				);
			})}
		</>
	);
};
