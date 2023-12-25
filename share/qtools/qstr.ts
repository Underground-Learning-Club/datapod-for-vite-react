// // also does full trim, of array and each line
// export const convertStringBlockToLines = (stringBlock: string, trimLines = true) => {
// 	let roughLines: string[] = [];

// 	if (qstr.isEmpty(stringBlock)) {
// 		return [];
// 	}
// 	roughLines = stringBlock.split('\n');
// 	if (trimLines) {
// 		roughLines = qstr.trimAllLinesInLinesArray(roughLines);
// 	}
// 	roughLines = qstr.trimLinesOfEndBlanks(roughLines);
// 	return roughLines;
// }