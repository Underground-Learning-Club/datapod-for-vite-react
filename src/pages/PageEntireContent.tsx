import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageEntireContent = () => {
	const { appData } = useContext(AppContext);

	return (
		<textarea
			value={appData.entireContent}
			readOnly
			className="block mb-3 w-1/2 h-48 p-3 font-mono text-xs text-orange-700"
		/>
	);
};
