import connection from './connection';
import EventModel from './interface/EventModel';
import { Logger } from 'tslog';
import DatabaseDocument from '../interface/DatabaseDocument';
import Datastore from 'nedb-promises/index';

interface EventRepositoryOperations {
	addEvent(event: EventModel<any>): void;
	getEvent(searchCriteria: {}, projections: {}): Promise<void | DatabaseDocument | EventModel<any>>;
}

export default class EventRepository implements EventRepositoryOperations {
	private logger = new Logger();

	constructor(protected db: Datastore = connection()) {}

	async addEvent(event: EventModel<any>) {
		await this.db.insert(event);
	}

	async getEvent(searchCriteria = {}, projections = {}): Promise<any> {
		return await this.db
			.find(searchCriteria, projections)
			.sort({ createdAt: -1 })
			.limit(1)
			.then(doc => doc[0])
			.catch(error => {
				this.logger.error(error);
			});
	}

	async getEvents() {
		return await this.db
			.find({})
			.sort({ createdAt: -1 })
			.then(docs => docs)
			.catch(error => {
				this.logger.error(error);
			});
	}
}
