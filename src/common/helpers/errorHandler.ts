import { Logger } from 'tslog';
import 'reflect-metadata';

type decorator = (target: any, key: string | symbol, descriptor: PropertyDescriptor) => object;

const logger = new Logger();

function handleError(error: Error) {
	logger.fatal(error);
	process.exit(1);
}

export const withAsyncErrorHandling: decorator = (target, key, descriptor) => {
	console.log({ target, key, descriptor });
	return {
		value: async function (...args: any[]): Promise<any> {
			try {
				return await descriptor.value.apply(target, ...args);
			} catch (error) {
				handleError(error);
			}
		},
	};
};

export const withErrorHandling: decorator = (target, key, descriptor) => {
	return {
		value: function (...args: any[]): any {
			try {
				return descriptor.value.apply(target, ...args);
			} catch (error) {
				handleError(error);
			}
		},
	};
};
