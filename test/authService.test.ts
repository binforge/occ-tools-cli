import assert from 'assert';
import MockHTTPService from '../src/common/service/http/mock';
import EventService from '../src/common/service/event';
import connection from '../src/common/dbConnection';
import EventRepository from '../src/common/EventRepository';
import { beforeEach } from 'mocha';
import EVENT_TYPE from '../src/common/interface/event/EventTypes';
import { AUTH_RESPONSE } from './data/authResponse';
import AuthenticationService from '../src/common/service/authenticate';

let httpService: MockHTTPService;
let inMemoryEventRepository: EventRepository;
let eventService: EventService;
let authService: AuthenticationService;

describe('EventService', function () {
	beforeEach(function () {
		// GIVEN
		httpService = new MockHTTPService(AUTH_RESPONSE);
		inMemoryEventRepository = new EventRepository(connection({ inMemoryOnly: true }));
		eventService = new EventService(inMemoryEventRepository);
		authService = new AuthenticationService(eventService, httpService);
	});

	it('should register auth request event with correct access token', async function () {
		// WHEN
		await authService.authenticate();
		const record = await inMemoryEventRepository.get();
		// THEN
		assert.deepStrictEqual(record.name, EVENT_TYPE.AUTH_REQUESTED);
		assert.deepStrictEqual(record.data.access_token, AUTH_RESPONSE.access_token);
	});

	it('should get access token', async function () {
		// WHEN
		const accessToken = await authService.getAccessToken();
		// THEN
		assert.deepStrictEqual(accessToken, AUTH_RESPONSE.access_token);
	});
});
