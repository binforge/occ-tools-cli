import { Command } from '@oclif/command';
import * as Config from '@oclif/config';
import { RequestService } from '../service/RequestService';
import { Logger } from 'tslog';
import RequestData from '../service/RequestData';

export default abstract class OCCCommand extends Command {
	private logger = new Logger();

	private requestService = new RequestService();

	protected constructor(argv: string[], config: Config.IConfig) {
		super(argv, config);
		this.authenticate().then(() => this.logger.silly('Auth finished'));
	}

	private async authenticate() {
		const data = await this.requestService.send(RequestData.authenticate);
		this.logger.silly(data);
	}
}
