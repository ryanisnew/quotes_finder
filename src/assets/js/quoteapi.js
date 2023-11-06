async function fetchApi() {
const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '755d95763emsh054ecfccbfb050cp1e70dfjsnea335e787a5f',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	const quoteAuthor = document.querySelector('.overlay-text__author');
	quoteAuthor.innerHTML = result.originator.name;
} catch (error) {
	console.error(error);
};
};
fetchApi();