import connection from './connection';

const EVENTS = 'events';

export default class EventRepository {
	private db = connection();

	getEventById(id: number) {
		return this.db.get(EVENTS).find({ id }).value();
	}

	addEvent() {}
}
