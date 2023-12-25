import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageDatapodContent = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<p>datapod content: {appData.appIdCode}</p>
		</>
	);
};
