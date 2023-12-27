import { ChangeEvent, useState } from "react";

const _texts = {
	originalText: "nnn",
	titleNotation: "ttt",
	textNotation: "text",
	pascalNotation: "ppp",
	camelNotation: "ccc",
};

export const PageNotation = () => {
	const [texts, setTexts] = useState(_texts);

	const handleOriginalTextChange = (e: ChangeEvent<HTMLInputElement>) => {
		texts.originalText = e.target.value;
		const _texts = structuredClone(texts);
		setTexts(_texts);
	};

	return (
		<>
			<form className="flex gap-3 mb-4 place-items-center">
				original text:{" "}
				<input
				className="p-1 rounded"
					value={texts.originalText}
					onChange={(e) => handleOriginalTextChange(e)}
				/>
			</form>
			<table className="notation">
				<tbody>
					<tr>
						<td>Camel notation</td>
						<td>nnn</td>
					</tr>
					<tr>
						<td>Pascal notation</td>
						<td>nnn</td>
					</tr>
					<tr>
						<td>Title notation</td>
						<td>nnn</td>
					</tr>
					<tr>
						<td>Text notation</td>
						<td>nnn</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
