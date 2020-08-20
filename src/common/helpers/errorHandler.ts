import { Logger } from 'tslog';
import catchDecorator from 'catch-decorator';
import 'reflect-metadata';

type decorator = (target: any, key: string | symbol, descriptor: PropertyDescriptor) => object;

const logger = new Logger();

export const catchError: decorator = catchDecorator(Error, (error: Error) => {
	logger.fatal(error);
	process.exit(1);
});
