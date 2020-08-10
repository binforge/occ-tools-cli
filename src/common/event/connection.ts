import * as path from 'path';
import Datastore from 'nedb-promises';

export default () => {
	return Datastore.create({
		filename: path.join(process.env.PWD || '', 'db', 'events.ndjson'),
		timestampData: true,
		autoload: true,
		corruptAlertThreshold: 0,
	});
};
