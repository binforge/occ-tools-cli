import assert from 'assert';
import MockHTTPService from '../src/common/service/http/mock';
import EventService from '../src/common/service/event/index';
import connection from '../src/common/dbConnection';
import EventRepository from '../src/common/EventRepository';
import { beforeEach } from 'mocha';
import EVENT_TYPE from '../src/common/interface/event/EventTypes';
import { AUTH_RESPONSE } from './data/authResponse';

let httpService: MockHTTPService;
let inMemoryEventRepository: EventRepository;
let eventService: EventService;

describe('EventService', function () {
	beforeEach(function () {
		httpService = new MockHTTPService(AUTH_RESPONSE);
		inMemoryEventRepository = new EventRepository(connection({ inMemoryOnly: true }));
		eventService = new EventService(inMemoryEventRepository, httpService);
	});

	it('should register auth request event with correct access token', async function () {
		// WHEN
		await eventService.authenticate();
		const record = await inMemoryEventRepository.getEvent();
		// THEN
		assert.deepStrictEqual(record.name, EVENT_TYPE.AUTH_REQUESTED);
		assert.deepStrictEqual(record.data.access_token, AUTH_RESPONSE.access_token);
	});

	it('should get access token', async function () {
		// WHEN
		const accessToken = await eventService.getAccessToken();
		// THEN
		assert.deepStrictEqual(accessToken, AUTH_RESPONSE.access_token);
	});
});
