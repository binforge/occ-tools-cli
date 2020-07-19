import axios, { AxiosRequestConfig } from 'axios';
import * as notifier from 'node-notifier';
import { Logger } from 'tslog';

export class RequestService {
	private logger = new Logger();

	async send(
		requestData:
			| AxiosRequestConfig
			| {
					headers: { Authorization: string; 'Content-Type': string };
					method: string;
					data: string;
					url: string;
			  }
	) {
		return axios(requestData)
			.then(response => response.data)
			.catch(error => {
				this.logger.error(error);
			})
			.finally(() => {
				notifier.notify({
					title: 'occ-tools CLI',
					message: 'Request finished.',
				});
			});
	}
}
