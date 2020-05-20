import { flags } from '@oclif/command';
import OCCCommand from '../classes/OCCCommand';

export default class Config extends OCCCommand {
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
    const { args, flags } = this.parse(Config);

    const name = flags.name ?? 'world';
    this.log(
      `hello ${name} from /home/programmer/WebstormProjects/occ-tools-cli/src/commands/config.ts`
    );
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
