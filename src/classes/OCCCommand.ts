import { Command } from '@oclif/command';
import * as Config from '@oclif/config';

export default abstract class OCCCommand extends Command {
  constructor(argv: string[], config: Config.IConfig) {
    super(argv, config);
  }
}
