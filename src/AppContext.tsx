import { createContext, useEffect, useState } from "react";
import { IAppData, blankAppData } from "./interfaces";
import * as AppModel from "./AppModel";

interface IAppContext {
	appData: IAppData;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [appData, setAppData] = useState<IAppData>(blankAppData);

	useEffect(() => {
		(async () => {
			const _appData = await AppModel.getAppData();
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
