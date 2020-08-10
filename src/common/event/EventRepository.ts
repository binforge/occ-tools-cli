import connection from './connection';
import EventModel from './interface/EventModel';
import { Logger } from 'tslog';
import DatabaseDocument from '../interface/DatabaseDocument';

interface EventRepositoryOperations<dataObject> {
	addEvent(event: EventModel<dataObject>): void;
	getEvent(searchCriteria: {}, projections: {}): Promise<void | DatabaseDocument | EventModel<any>>;
}

export default class EventRepository<dataObject> implements EventRepositoryOperations<dataObject> {
	private db = connection();
	private logger = new Logger();

	async addEvent(event: EventModel<dataObject>) {
		await this.db.insert(event);
	}

	async getEvent(searchCriteria = {}, projections = {}) {
		return await this.db
			.find(searchCriteria, projections)
			.sort({ createdAt: -1 })
			.limit(1)
			.then(doc => doc[0])
			.catch(error => {
				this.logger.error(error);
			});
	}
}
