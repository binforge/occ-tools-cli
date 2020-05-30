import { Command } from '@oclif/command';
import * as Config from '@oclif/config';

export default abstract class OCCCommand extends Command {
  static url = ``;
  constructor(argv: string[], config: Config.IConfig) {
    super(argv, config);
    console.log('env', process.env['OCC_ENV']);
  }
}
