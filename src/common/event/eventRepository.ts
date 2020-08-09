import connection from './connection';
import EventModel from '../interface/EventModel';
import { Logger } from 'tslog';

interface EventRepositoryOperations {
	addEvent(event: EventModel): void;
	getEvent(searchCriteria = {}, projections = {}): [];
}

export default class EventRepository implements EventRepositoryOperations {
	private db = connection();
	private logger = new Logger();

	addEvent(event: EventModel) {
		this.db.insert(event);
	}

	getEvent(searchCriteria, projections) {
		this.db
			.find(searchCriteria, projections)
			.sort({ updatedAt: -1 })
			.exec((error, docs) => {
				if (error) {
					this.logger.error(error);
					return;
				}
				return docs;
			});
	}
}
