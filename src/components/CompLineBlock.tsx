import { useContext } from "react";
import { LineBlock } from "../classes/LineBlock";
import { AppContext } from "../AppContext";

interface IProps {
	lineBlock: LineBlock;
}

export const CompLineBlock = ({ lineBlock }: IProps) => {
	const { appData, setAppData } = useContext(AppContext);

	const handleBlankOut = () => {
		lineBlock.blankOutLines();
		const _appData = structuredClone(appData);
		// setAppData(_appData);
	};

	return (
		<p>
			this line block: {lineBlock.getNumberOfLines()}{" "}
			<span
				className="cursor-pointer underline"
				onClick={() => handleBlankOut()}
			>
				blank out
			</span>
		</p>
	);
};
