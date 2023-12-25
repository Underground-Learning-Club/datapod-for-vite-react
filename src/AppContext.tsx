import { createContext} from "react";
import { IAppData, blankAppData } from "./interfaces";

interface IAppContext {
	appData: IAppData,
	title: string;
}

interface IAppProvider {
	children: React.ReactNode;
}

const appData = blankAppData;
const title = 'the title';

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	// const [appData] = useState<IAppData>(blankAppData);
	
	return (
		<AppContext.Provider
			value={{
				appData,
				title
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
