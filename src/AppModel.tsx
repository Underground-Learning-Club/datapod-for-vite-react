/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import * as appconfig from "../share/appconfig";
import { IAppData, IJsonAppData } from "./interfaces";
import { LineBlock } from "./classes/LineBlock";

const backendUrl = `http://localhost:${appconfig.backendPort()}/appData`;

export const getAppData = async () => {
	let _appData: IAppData = {} as IAppData;
	return new Promise<IAppData>((resolve) => {
		(async () => {
			const response = await axios.get(backendUrl);
			const rawAppData: IJsonAppData = response.data;
			_appData = {
				appIdCode: rawAppData.appIdCode,
				frontendPort: Number(rawAppData.frontendPort),
				backendPort: Number(rawAppData.backendPort),
				fileObjects: rawAppData.fileObjects,
				entireContent: rawAppData.entireContent,
				lineBlocks: LineBlock.instantiateLineBlocks(
					rawAppData.lineBlockDataItems
				),
			};
			resolve(_appData);
		})();
	});
};
