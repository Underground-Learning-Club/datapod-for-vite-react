import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageLineBlocks = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<p>Number of LineBlocks: {appData.lineBlocks.length}</p>

			{appData.lineBlocks.map((lineBlock, index) => {
				return (
					<div key={index}>
						<p>nnn</p>
						{/* <p>nnn: {lineBlock.lines[0]}</p> */}
						{/* <p>test: {lineBlock.getTest()}</p> */}
					</div>
				);
			})}
		</>
	);
};
