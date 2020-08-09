import { Command } from '@oclif/command';
import * as Config from '@oclif/config';
import EventService from '../service/EventService';

export default abstract class OCCCommand extends Command {
	private eventService = new EventService();

	protected constructor(argv: string[], config: Config.IConfig) {
		super(argv, config);
		// this.eventService.authenticate();
		this.eventService.checkIfAuthenticated();
	}
}
