export const extractPortNumber = (text: string) => {
	const regex = /(\d+)/;
	const match = text.match(regex);
	return match ? parseInt(match[0], 10) : 0;
}