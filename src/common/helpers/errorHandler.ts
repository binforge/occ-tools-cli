import catchDecorator from 'catch-decorator';
import 'reflect-metadata';
import logger from './logger';

type decorator = (target: any, key: string | symbol, descriptor: PropertyDescriptor) => object;

export const catchError: decorator = catchDecorator(Error, (error: Error) => {
	logger.fatal(error);
	process.exit(1);
});
