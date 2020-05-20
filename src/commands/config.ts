import { flags } from '@oclif/command';
import OCCCommand from '../classes/OCCCommand';
import axios from 'axios';

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
    const loggedIn = await axios.post();
  }
}
