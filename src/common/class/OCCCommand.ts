import { Command } from '@oclif/command';
import * as Config from '@oclif/config';
import EventService from '../service/event';
import EventRepository from '../EventRepository';
import HTTPService from '../service/http';
import AuthenticationService from '../service/authenticate';

export default abstract class OCCCommand extends Command {
	private eventRepository = new EventRepository();
	private httpService = new HTTPService();
	private eventService = new EventService(this.eventRepository);
	private authenticationService = new AuthenticationService(this.eventService, this.httpService);
	protected accessToken: string | undefined;

	protected constructor(argv: string[], config: Config.IConfig) {
		super(argv, config);
		this.authenticationService.getAccessToken().then(response => {
			this.accessToken = response;
		});
	}
}
