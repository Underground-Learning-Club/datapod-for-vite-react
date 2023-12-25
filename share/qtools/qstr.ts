import * as qstr from './qstr';

// also does full trim, of array and each line
export const convertStringBlockToLines = (stringBlock: string, trimLines = true) => {
	let roughLines: string[] = [];

	if (qstr.isEmpty(stringBlock)) {
		return [];
	}
	roughLines = stringBlock.split('\n');
	if (trimLines) {
		roughLines = qstr.trimAllLinesInLinesArray(roughLines);
	}
	roughLines = qstr.trimLinesOfEndBlanks(roughLines);
	return roughLines;
}

/**
 * Check if a string is empty.
 *
 * qstr.isEmpty('');
 *
 * true
 */
export const isEmpty = (line: string) => {
	if (line === undefined || line === null) {
		return true;
	}
	line = line.toString();
	return line.trim() === '';
}

export const trimAllLinesInLinesArray = (lines: string[]) => {
	const newLines: string[] = [];
	lines.forEach(function (line) {
		const newLine = line.trim();
		newLines.push(newLine);
	});
	return newLines;
}

// returns a lines array that has front and end blank strings, as one without these blanks
export const trimLinesOfEndBlanks = (lines: string[]) => {
	lines = qstr.trimBeginningLinesOfBlanks(lines);
	lines = lines.reverse();
	lines = qstr.trimBeginningLinesOfBlanks(lines);
	lines = lines.reverse();
	return lines;
}

// if first line of lines array is blank, it will remove it
// but don't remove any blank lines from middle or end
export const trimBeginningLinesOfBlanks = (lines: string[]) => {
	const newLines: string[] = [];
	let trimmingBlanks = true;
	lines.forEach(function (line) {
		const newLine = line;
		if (trimmingBlanks && line === '') {
			// skip it since it is a preceding blank item
		} else {
			newLines.push(newLine);
			trimmingBlanks = false;
		}
	});
	return newLines;
}


