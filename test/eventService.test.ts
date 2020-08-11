import assert from 'assert';
import MockHTTPService from '../src/common/http/service/MockHTTPService';
import EventService from '../src/common/event/service/EventService';
import EVENT_TYPE from '../src/common/event/interface/EventTypes';
import connection from '../src/common/event/connection';
import EventRepository from '../src/common/event/EventRepository';

describe('EventService', function () {
	it('should register auth request event', async function () {
		// GIVEN
		const httpService = new MockHTTPService();
		const inMemoryEventRepository = new EventRepository(connection({ inMemoryOnly: true }));
		const eventService = new EventService(inMemoryEventRepository, httpService);

		// WHEN
		await eventService.authenticate();
		const data = await inMemoryEventRepository.getEvent();
		// THEN
		assert.deepStrictEqual(data.name, EVENT_TYPE.AUTH_REQUESTED);
	});
});
