// AJAX-Post Boilerplate Code Template
const xhr = new XMLHttpRequest();
const url = '~~~url~~~';
const data = JSON.stringify({id: "200"});
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		return xhr.response;   //main code block
	}
};

xhr.open('POST',url);
xhr.send(data);
