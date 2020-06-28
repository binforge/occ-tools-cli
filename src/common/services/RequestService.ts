import axios, { AxiosRequestConfig } from 'axios';

export class RequestService {
	constructor(private requestData: AxiosRequestConfig) {}

	async send() {
		axios(this.requestData)
			.then(response => {})
			.catch(error => {})
			.finally(() => {});
	}
}
