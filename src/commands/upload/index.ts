import { flags } from '@oclif/command';
import OccCommand from '../../common/occ-command';

export default class Index extends OccCommand {
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
    const { args, flags } = this.parse(Index);

    const name = flags.name ?? 'world';
    this.log(
      `hello ${name} from /mnt/c/projects/occ/occ-cli/src/commands/upload.ts`
    );
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
