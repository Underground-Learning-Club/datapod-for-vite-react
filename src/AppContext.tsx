import { createContext, useEffect, useState } from "react";
import { IAppData, blankAppData } from "./interfaces";
import * as appconfig from '../share/appconfig';
import axios from 'axios';

interface IAppContext {
	appData: IAppData;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

const backendUrl = `http://localhost:${appconfig.backendPort()}/appData`;

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [appData, setAppData] = useState<IAppData>(blankAppData);

	useEffect(() => {
		(async () => {
			const response = await axios.get(backendUrl);
			const _appData = response.data;
			setAppData(_appData);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
