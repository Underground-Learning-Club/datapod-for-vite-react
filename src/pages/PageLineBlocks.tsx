import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageLineBlocks = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<p>line blocks page: {appData.appIdCode}</p>
		</>
	);
};
