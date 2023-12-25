import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageFiles = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<ul className="list-disc ml-6">
				{appData.fileObjects.map((fileObject, index) => {
					return (
						<li key={index}>
							<span className="font-mono font-semibold">
								{fileObject.pathAndFileName}
							</span>
							<textarea className="block mb-3 w-1/2 h-48 p-3 font-mono text-xs text-orange-700">
								{fileObject.content}
							</textarea>
						</li>
					);
				})}
			</ul>
		</>
	);
};
