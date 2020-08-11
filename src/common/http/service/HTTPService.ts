import axios, { AxiosRequestConfig } from 'axios';
import notifier from 'node-notifier';
import { Logger } from 'tslog';

export default class HTTPService {
	private logger = new Logger();

	async send(requestData: AxiosRequestConfig): Promise<any> {
		return axios(requestData)
			.then(response => {
				return response.data;
			})
			.catch(error => {
				this.logger.error(error);
			})
			.finally(() => {
				notifier.notify({
					title: 'occ-tools CLI',
					message: 'Request finished.',
					sound: true,
				});
			});
	}
}
