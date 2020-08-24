import HTTPService from './index';

export default class MockHTTPService extends HTTPService {
	constructor(private response: any) {
		super();
	}

	async send() {
		return Promise.resolve(this.response);
	}
}
