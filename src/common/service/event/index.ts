import HTTPService from '../../service/http/index';
import HTTPRequest from '../../HTTPRequest';
import EventRepository from '../../EventRepository';
import EventModel from '../../interface/event/EventModel';
import EVENT_TYPE from '../../interface/event/EventTypes';
import AuthResponse from '../../interface/http/ResponseTypes';
import DatabaseDocument from '../../interface/DatabaseDocument';
import now from '../../helpers/now';
import { catchError } from '../../helpers/errorHandler';

export default class EventService {
	constructor(private eventRepository: EventRepository, private httpService: HTTPService) {}

	async authenticate() {
		const data = await this.httpService.send(HTTPRequest.authenticate());
		const event: EventModel<AuthResponse> = {
			name: EVENT_TYPE.AUTH_REQUESTED,
			data,
		};
		await this.eventRepository.addEvent(event);
		return data.access_token;
	}

	async getAccessToken() {
		const record = await this.eventRepository.getEvent({ name: EVENT_TYPE.AUTH_REQUESTED });
		if (record && this.isAccessTokenValid(record)) {
			// TODO: remove below comments (ts typing)
			// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
			// @ts-ignore
			return record.data.access_token;
		}
		return await this.authenticate();
	}

	@catchError
	private isAccessTokenValid(record: any | (EventModel<AuthResponse> & DatabaseDocument)): boolean {
		const expiresInMiliseconds = record.data.expires_in * 1000;
		const currentDate = now.nowInMiliseconds();
		const createdAtDate = now.dateInMiliseconds((record.createdAt || '').toString());
		return currentDate - createdAtDate < expiresInMiliseconds;
	}
}
