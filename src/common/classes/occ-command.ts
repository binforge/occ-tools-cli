import { Command } from '@oclif/command';
import * as Config from '@oclif/config';
import { RequestService } from '../services/RequestService';
import { Logger } from 'tslog';

export default abstract class OccCommand extends Command {
	// protected token: string;
	private logger = new Logger();
  private requestService = new RequestService();
	constructor(argv: string[], config: Config.IConfig) {
		super(argv, config);
		this.authenticate();
	}

	private async authenticate() {
		const data = await this.requestService.send({
			method: 'POST',
			url: 'https://<subdomain>.<domain>.com:<port>/<resource-path>',
		});
		this.logger.info(data);
	}
}
