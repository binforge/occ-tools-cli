import EventRepository from '../../EventRepository';
import EventModel from '../../interface/event/EventModel';

export default class EventService {
	constructor(private eventRepository: EventRepository) {}

	async add(event: EventModel<any>) {
		return await this.eventRepository.add(event);
	}

	async get(searchCriteria = {}, projections = {}) {
		return await this.eventRepository.get(searchCriteria, projections);
	}
}
