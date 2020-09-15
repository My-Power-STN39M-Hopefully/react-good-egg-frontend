import axios from 'axios';

function getLocalBackendUrl() {
	return JSON.parse(process.env.REACT_APP_RUN_LOCAL_CONNECT_DEV.toLowerCase())
		? process.env.REACT_APP_DEV_ENDPOINT
		: 'http://localhost:8000';
}

const backendUrl = JSON.parse(process.env.REACT_APP_IS_LOCAL.toLowerCase())
	? getLocalBackendUrl()
	: process.env.REACT_APP_BACKEND_URL;

function GoodEggBackend() {
	let headers = {}
	let token = sessionStorage.getItem('userToken');
	if(token != null){
		headers['authorization'] = 'Token ' +token;
	}

	return axios.create({
		baseURL: backendUrl,
		headers: headers,
	});
}

export { GoodEggBackend };
