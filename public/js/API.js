// const fetch = require('node-fetch');

// const url = 'https://streaming-availability.p.rapidapi.com/countries';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '3f01ce3775mshc65e5fdb455e382p181b75jsn99eeab1b46ee',
//     'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// const fetch = require('node-fetch');

// const url = 'https://streaming-availability.p.rapidapi.com/countries';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '3f01ce3775mshc65e5fdb455e382p181b75jsn99eeab1b46ee',
//     'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
//   }
// };

// Use for later API end point
// add event listener to get the value of the country
//pass the country to the fetch and display
async function fetchDataAndDisplay() {
  try {
    const response = await fetch(url, options);
    const data = await response.json(); // Parse JSON response
    displayData(data);
  } catch (error) {
    console.error(error);
  }
}

function displayData(data) {
  const dataContainer = document.getElementById('dataContainer');
  // Clear previous content
  dataContainer.innerHTML = '';

  // Create a list to display the data
  const ul = document.createElement('ul');

  // Iterate over the data and create list items
  data.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country.name;
    ul.appendChild(li);
  });

  // Append the list to the container
  dataContainer.appendChild(ul);
}

fetchDataAndDisplay();
