import axios, { AxiosRequestConfig } from 'axios';
import notifier from 'node-notifier';
import { catchError } from '../../helpers/errorHandler';

export default class HTTPService {
	@catchError
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
