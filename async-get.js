// Async-Get Javascript requests
// requires ES6 or higher versions
const getData = async() => {
	try {
		const response = await fetch('~~~url~~~');
		if(response.ok) {
			const jsonResponse = await response.json();
			return jsonResponse;
		}
		throw new Error('Request failed!');

	} catch(error) {
		console.log(error);
	}
}