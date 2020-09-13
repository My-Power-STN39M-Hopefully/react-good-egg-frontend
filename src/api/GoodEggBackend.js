import axios from 'axios';
import Cookies from 'js-cookie';

function getLocalBackendUrl() {
	return JSON.parse(process.env.REACT_APP_RUN_LOCAL_CONNECT_DEV.toLowerCase())
		? process.env.REACT_APP_DEV_ENDPOINT
		: 'https://localhost:8000';
}

const backendUrl =
	JSON.parse(process.env.REACT_APP_IS_LOCAL.toLowerCase())
		? getLocalBackendUrl()
		: process.env.REACT_APP_BACKEND_URL;

function GoodEggBackend() {
	console.log('backendUrl: ' + backendUrl);
	return axios.create({
		baseURL: backendUrl,
		headers: {
			'Content-Type': 'application/json',
			'X-CSRFToken': Cookies.get('csrftoken'),
		},
	});
}

export { GoodEggBackend };
