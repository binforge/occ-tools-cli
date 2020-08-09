import * as Datastore from 'nedb';
import * as path from 'path';
import Nedb from 'nedb';

export default (): Nedb => {
	return new Datastore({
		filename: path.join(process.env.PWD, 'db', 'events.ndjson'),
		timestampData: true,
		autoload: true,
		corruptAlertThreshold: 0,
	});
};
