import axios, { AxiosRequestConfig } from 'axios';
import notifier from 'node-notifier';
import { withAsyncErrorHandling } from '../../helpers/errorHandler';

export default class HTTPService {
	@withAsyncErrorHandling
	async send(requestData: AxiosRequestConfig): Promise<any> {
		return axios(requestData)
			.then(response => response.data)
			.finally(() => {
				notifier.notify({
					title: 'occ-tools CLI',
					message: 'Request finished.',
					sound: true,
				});
			});
	}
}
