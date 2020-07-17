import { Command } from '@oclif/command';
import * as Config from '@oclif/config';
import { RequestService } from '../services/RequestService';
import { Logger } from 'tslog';
import * as qs from 'querystring';

export default abstract class OCCCommand extends Command {
	// protected token: string;
	private logger = new Logger();

	private requestService = new RequestService();

	constructor(argv: string[], config: Config.IConfig) {
		super(argv, config);
		this.authenticate();
	}

	private async authenticate() {
		const subdomain = process.env[`OCC_SUBDOMAIN_${process.env.CURRENT_ENV}`];
		const authKey = process.env[`OCC_AUTH_${process.env.CURRENT_ENV}`];
		const data = await this.requestService.send({
			method: 'POST',
			url: `https://ccadmin-${subdomain}-zd8a.oracleoutsourcing.com/ccadmin/v1/login`,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Bearer ${authKey}`,
			},
			data: qs.stringify({
				grant_type: 'client_credentials',
			}),
		});
		// this.logger.info(data);
		this.log(data);
	}
}
