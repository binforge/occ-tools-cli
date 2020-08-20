import { flags } from '@oclif/command';
import OCCCommand from '../common/class/OCCCommand';

export default class Upload extends OCCCommand {
	static description = 'describe the command here';

	static flags = {
		help: flags.help({ char: 'h' }),
		// flag with a value (-n, --name=VALUE)
		name: flags.string({ char: 'n', description: 'name to print' }),
		// flag with no value (-f, --force)
		force: flags.boolean({ char: 'f' }),
	};

	static args = [{ name: 'file' }];

	async run() {
		const { args, flags } = this.parse(Upload);

		const name = flags.name ?? 'world';
		this.log(`hello ${name} from /mnt/c/projects/occ/occ-cli/src/commands/upload.ts`);
		if (args.file && flags.force) {
			this.log(`you input --force and --file: ${args.file}`);
		}
	}
}
