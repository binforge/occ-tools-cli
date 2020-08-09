import { HTTPService } from './HTTPService';
import HTTPRequest from './HTTPRequest';
import EventRepository from '../event/eventRepository';
import EventModel from '../interface/EventModel';
import EVENT_TYPE from '../interface/EventTypes';

export default class EventService {
	private httpService = new HTTPService();
	private eventRepository = new EventRepository();

	authenticate() {
		this.httpService.send(HTTPRequest.authenticate).then(data => {
			const event: EventModel = {
				name: EVENT_TYPE.AUTH_REQUESTED,
				data,
			};
			this.eventRepository.addEvent(event);
		});
	}

	checkIfAuthenticated() {
		console.log(this.eventRepository.getEvent({}, { 'data.access_token': 1 }));
	}
}
