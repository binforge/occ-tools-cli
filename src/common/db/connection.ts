import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

export default () => {
	const adapter = new FileSync('db.json');
	const db = low(adapter);

	db.defaults({ events: [], count: 0 }).write();

	return db;
};
