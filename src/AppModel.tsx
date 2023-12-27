/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import * as appconfig from "../backend/appconfig";
import { IAppData } from "./interfaces";

const backendUrl = `http://localhost:${appconfig.backendPort()}/appData`;

export const getAppData = async () => {
	return new Promise<IAppData>((resolve) => {
		(async () => {
			const response = await axios.get(backendUrl);
			const _appData: IAppData = response.data;
			console.log(_appData);
			resolve(_appData);
		})();
	});
};
