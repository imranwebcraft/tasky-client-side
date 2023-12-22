export const formatDate = (date) => {
	const options = { day: 'numeric', month: 'short', year: 'numeric' };
	return new Intl.DateTimeFormat('en-US', options).format(date);
};
