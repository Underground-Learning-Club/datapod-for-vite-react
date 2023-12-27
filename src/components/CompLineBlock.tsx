import { LineBlock } from "../classes/LineBlock";

interface IProps {
	lineBlock: LineBlock;
}

export const CompLineBlock = ({ lineBlock }: IProps) => {
	return (
		<p>this line block: {lineBlock.getNumberOfLines()}</p>
	)
};
