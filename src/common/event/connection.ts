import * as path from 'path';
import Datastore from 'nedb-promises';

const permanentOptions = {
	filename: path.join(process.env.PWD || '', 'db', 'events.ndjson'),
	timestampData: true,
	autoload: true,
	corruptAlertThreshold: 0,
};

export default (options: any = permanentOptions) => {
	return Datastore.create(options);
};
