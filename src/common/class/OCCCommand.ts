import { Command } from '@oclif/command';
import * as Config from '@oclif/config';
import EventService from '../service/event/index';
import EventRepository from '../EventRepository';
import HTTPService from '../service/http/index';

export default abstract class OCCCommand extends Command {
	private eventRepository = new EventRepository();
	private httpService = new HTTPService();
	private eventService = new EventService(this.eventRepository, this.httpService);
	protected accessToken: string | undefined;

	protected constructor(argv: string[], config: Config.IConfig) {
		super(argv, config);
		this.eventService.getAccessToken().then(response => {
			this.accessToken = response;
		});
	}
}
