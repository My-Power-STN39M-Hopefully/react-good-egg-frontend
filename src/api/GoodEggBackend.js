import axios from 'axios';
import Cookies from 'js-cookie';

function getLocalBackendUrl() {
	return process.env.REACT_APP_RUN_LOCAL_CONNECT_DEV === true
		? process.env.REACT_APP_DEV_ENDPOINT
		: 'https://localhost:8000';
}

const backendUrl =
	process.env.REACT_APP_IS_LOCAL === true
		? getLocalBackendUrl()
		: process.env.REACT_APP_BACKEND_URL;

function GoodEggBackend() {
	return axios.create({
		baseURL: 'http://localhost:8000',
		headers: {
			'Content-Type': 'application/json',
			'X-CSRFToken': Cookies.get('csrftoken'),
		},
	});
}

export { GoodEggBackend };
