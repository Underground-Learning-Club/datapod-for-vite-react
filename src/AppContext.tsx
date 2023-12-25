import { createContext, useState} from "react";
import { IAppData, blankAppData } from "./interfaces";

interface IAppContext {
	appData: IAppData
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [appData] = useState<IAppData>(blankAppData);
	
	return (
		<AppContext.Provider
			value={{
				appData
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
