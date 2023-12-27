import { useContext } from "react";
import { AppContext } from "../AppContext";
import { ILineBlockDataItem } from "../interfaces";

interface IProps {
	lineBlockDataItem: ILineBlockDataItem;
}

export const CompLineBlock = ({ lineBlockDataItem }: IProps) => {
	const { appData, setAppData } = useContext(AppContext);

	const handleBlankOut = () => {
		lineBlockDataItem.lines = [];
		const _appData = structuredClone(appData);
		setAppData(_appData);
	};

	return (
		<p>
			this line block: {lineBlockDataItem.lines.length}{" "}
			<span
				className="cursor-pointer underline"
				onClick={() => handleBlankOut()}
			>
				blank out
			</span>
		</p>
	);
};
