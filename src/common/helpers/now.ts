function now(): Date {
	return new Date();
}

now.dateInMiliseconds = function (dateTime: string): number {
	if (!dateTime) throw new Error('dateTime should be a valid string');
	return Date.parse(dateTime);
};

now.nowInMiliseconds = function (): number {
	return Date.now();
};

export default now;
