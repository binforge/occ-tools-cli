import HTTPService from './HTTPService';

export default class MockHTTPService extends HTTPService {
	async send(response: any) {
		return Promise.resolve(response);
	}
}
