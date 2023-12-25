import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			{appData && (
				<>
					<p>App ID-Code: {appData.appIdCode}</p>
					<p>frontend port: {appData.frontendPort}</p>
					<p>backend port: {appData.backendPort}</p>
				</>
			)}
		</>
	);
};
