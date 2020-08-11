import { Command } from '@oclif/command';
import * as Config from '@oclif/config';
import EventService from '../event/service/EventService';
import EventRepository from '../event/EventRepository';
import HTTPService from '../http/service/HTTPService';

export default abstract class OCCCommand extends Command {
	private eventRepository = new EventRepository();
	private httpService = new HTTPService();
	private eventService = new EventService(this.eventRepository, this.httpService);
	protected accessToken: string;

	protected constructor(argv: string[], config: Config.IConfig) {
		super(argv, config);
		this.eventService.getAccessToken().then(response => {
			console.log({ response });
			this.accessToken = response;
		});
	}
}
