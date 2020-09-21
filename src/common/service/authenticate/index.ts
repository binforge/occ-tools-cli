import HTTPRequest from '../../HTTPRequest';
import EventModel from '../../interface/event/EventModel';
import AuthResponse from '../../interface/http/ResponseTypes';
import EVENT_TYPE from '../../interface/event/EventTypes';
import DatabaseDocument from '../../interface/DatabaseDocument';
import now from '../../helpers/now';
import EventService from '../event';
import HTTPService from '../http';

export default class AuthenticationService {
	constructor(private eventService: EventService, private httpService: HTTPService) {}

	async authenticate() {
		const data = await this.httpService.send(HTTPRequest.authenticate);
		const event: EventModel<AuthResponse> = {
			name: EVENT_TYPE.AUTH_REQUESTED,
			data,
		};
		await this.eventService.add(event);
		return data.access_token;
	}

	async getAccessToken() {
		const record = await this.eventService.get({ name: EVENT_TYPE.AUTH_REQUESTED });
		if (record && AuthenticationService.isAccessTokenValid(record)) {
			// TODO: remove below comments (ts typing)
			// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
			// @ts-ignore
			return record.data.access_token;
		}
		return await this.authenticate();
	}

	private static isAccessTokenValid(record: any | (EventModel<AuthResponse> & DatabaseDocument)): boolean {
		const expiresInMiliseconds = record.data.expires_in * 1000;
		const currentDate = now.nowInMiliseconds();
		const createdAtDate = now.dateInMiliseconds((record.createdAt || '').toString());
		return currentDate - createdAtDate < expiresInMiliseconds;
	}
}
