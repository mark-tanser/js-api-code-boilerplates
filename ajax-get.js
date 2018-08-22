// AJAX-Get Boilerplate Code Template
const xhr = new XMLHttpRequest();
const url = '~~~url~~~';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		return xhr.response;   //main code block
	}
};

xhr.open('GET',url);
xhr.send();
