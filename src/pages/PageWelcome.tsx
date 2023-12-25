import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { appData, title } = useContext(AppContext);

	console.log(appData);

	return (
		<>
			<p>Welcome to this site.</p>
			{appData && <p>App ID-Code: {appData.appIdCode}</p>}
			<p>title: [{title}]</p>
		</>
	);
};
