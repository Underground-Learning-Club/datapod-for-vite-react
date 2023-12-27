import axios from "axios";
import * as appconfig from "../share/appconfig";
import { IAppData } from "./interfaces";

const backendUrl = `http://localhost:${appconfig.backendPort()}/appData`;

export const getAppData = async () => {
	return new Promise<IAppData>((resolve) => {
		(async () => {
			const response = await axios.get(backendUrl);
			const _appData = response.data;
			resolve(_appData);
		})();
	});
};
