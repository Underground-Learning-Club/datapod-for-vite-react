import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			{appData && appData.dataPathAndFileNames && (
				<>
					<p>App ID-Code: {appData.appIdCode}</p>
					<p>frontend port: {appData.frontendPort}</p>
					<p>backend port: {appData.backendPort}</p>
					<p>data files:</p>
					<ul className="list-disc ml-6">
						{appData.dataPathAndFileNames.map(
							(dataPathAndFileName, index) => {
								return (
									<li key={index}>{dataPathAndFileName}</li>
								);
							}
						)}
					</ul>
				</>
			)}
		</>
	);
};
