// Fetch-Get Javascript requests
// requires ES6 or higher versions
fetch('~~~endpoint-url~~~', {
	method: 'POST',
	body: JSON.stringify({id: "200"})
}).then(response => {
	if(response.ok) {
		return response.json();
	}
	throw new Error('Request Failed!');
}, networkError => {
	console.log(networkError.message);
}).then(jsonResponse => {
	console.log(jsonResponse);
})

