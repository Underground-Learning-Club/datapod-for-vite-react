import { useContext } from "react";
import { AppContext } from "../AppContext";
import { CompLineBlock } from "../components/CompLineBlock";

export const PageLineBlocks = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<p>Number of LineBlocks: {appData.lineBlocks.length}</p>

			{appData.lineBlocks.map((lineBlock, index) => {
				return (
					<div key={index}>
						<CompLineBlock lineBlock={lineBlock} />
					</div>
				);
			})}
		</>
	);
};
