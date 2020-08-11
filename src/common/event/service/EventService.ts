import HTTPService from '../../http/service/HTTPService';
import HTTPRequest from '../../http/HTTPRequest';
import EventRepository from '../EventRepository';
import EventModel from '../interface/EventModel';
import EVENT_TYPE from '../interface/EventTypes';
import AuthResponse from '../../http/interface/HTTPResponseTypes';
import DatabaseDocument from '../../interface/DatabaseDocument';
import now from '../../helpers/now';
import { Logger } from 'tslog';

export default class EventService {
	private logger = new Logger();

	constructor(private eventRepository: EventRepository, private httpService: HTTPService) {}

	async authenticate() {
		const data = await this.httpService.send(HTTPRequest.authenticate);
		const event: EventModel<AuthResponse> = {
			name: EVENT_TYPE.AUTH_REQUESTED,
			data,
		};
		await this.eventRepository.addEvent(event);
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

	isAccessTokenValid(record: any | (EventModel<AuthResponse> & DatabaseDocument)): boolean {
		try {
			const expiresInMiliseconds = record.data.expires_in * 1000;
			const currentDate = now.nowInMiliseconds();
			const createdAtDate = now.dateInMiliseconds((record.createdAt || '').toString());
			return currentDate - createdAtDate < expiresInMiliseconds;
		} catch (error) {
			throw this.logger.error(error);
		}
	}
}
