import { useContext } from "react";
import { AppContext } from "../AppContext";
import { CompLineBlock } from "../components/CompLineBlock";

export const PageImport = () => {
	const { appData } = useContext(AppContext);

	return (
		<div className="pageImport">
			<h2>Files to import</h2>
			<ul className="list-disc ml-6">
				{appData.fileObjects.map((fileObject, index) => {
					return (
						<li key={index}>
							<span className="font-mono font-semibold">
								{fileObject.pathAndFileName}
							</span>
							<textarea
								value={fileObject.content}
								readOnly
								className="block mb-3 w-1/2 h-48 p-3 font-mono text-xs text-orange-700"
							></textarea>
						</li>
					);
				})}
			</ul>

			<h2>Entire content</h2>
			<textarea
				value={appData.entireContent}
				readOnly
				className="block mb-3 w-1/2 h-[20rem] p-3 font-mono text-xs text-orange-700 ml-6"
			/>

			<h2>Line blocks</h2>
			<div className="ml-6">
				<p className="mb-3">
					Number of LineBlocks: {appData.lineBlockDataItems.length}
				</p>
				{appData.lineBlockDataItems.map((lineBlockDataItem, index) => {
					return (
						<div key={index}>
							<CompLineBlock
								lineBlockDataItem={lineBlockDataItem}
							/>
						</div>
					);
				})}
			</div>

			<h2>Datapod content</h2>
			<div className="ml-6">
coming...
			</div>
		</div>
	);
};
