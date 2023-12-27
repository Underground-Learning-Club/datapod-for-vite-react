import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageImport = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<p>import page: {appData.appIdCode}</p>
		</>
	);
};
