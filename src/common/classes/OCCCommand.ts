import { Command } from '@oclif/command';
import * as Config from '@oclif/config';
import { RequestService } from '../services/RequestService';
import { Logger } from 'tslog';
import RequestData from '../services/RequestData';

export default abstract class OCCCommand extends Command {
	// protected token: string;
	private logger = new Logger();

	private requestService = new RequestService();

	constructor(argv: string[], config: Config.IConfig) {
		super(argv, config);
		this.authenticate();
	}

	private async authenticate() {
		const data = await this.requestService.send(RequestData.authenticate());
		this.logger.silly(data);
	}
}
