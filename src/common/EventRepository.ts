import connection from './dbConnection';
import EventModel from './interface/event/EventModel';
import DatabaseDocument from './interface/DatabaseDocument';
import Datastore from 'nedb-promises/index';
import { catchError } from './helpers/errorHandler';

interface EventRepositoryOperations {
	add(event: EventModel<any>): void;
	get(searchCriteria: {}, projections: {}): Promise<void | DatabaseDocument | EventModel<any>>;
}

export default class EventRepository implements EventRepositoryOperations {
	constructor(protected db: Datastore = connection()) {}

	@catchError
	async add(event: EventModel<any>) {
		await this.db.insert(event);
	}

	@catchError
	async get(searchCriteria = {}, projections = {}): Promise<any> {
		return await this.db
			.find(searchCriteria, projections)
			.sort({ createdAt: -1 })
			.limit(1)
			.then(doc => doc[0]);
	}
}
