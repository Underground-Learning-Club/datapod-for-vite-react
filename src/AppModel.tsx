/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import * as appconfig from "../share/appconfig";
import { IAppData } from "./interfaces";

const backendUrl = `http://localhost:${appconfig.backendPort()}/appData`;

export const getAppData = async () => {
	let _appData: IAppData = {} as IAppData;
	return new Promise<IAppData>((resolve) => {
		(async () => {
			const response = await axios.get(backendUrl);
			const rawAppData:any = response.data;
			_appData = structuredClone(rawAppData);
			resolve(_appData);
		})();
	});
};
