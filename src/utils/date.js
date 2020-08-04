const date = (date) => {
	const options = {year: 'numeric', month: 'numeric', day: 'numeric',
		hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true};
	return new Intl.DateTimeFormat('fr-FR', options).format(date || new Date());
};

export default date;
