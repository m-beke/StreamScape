const fetch = require('node-fetch');

const url = 'https://streaming-availability.p.rapidapi.com/countries';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3f01ce3775mshc65e5fdb455e382p181b75jsn99eeab1b46ee',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

