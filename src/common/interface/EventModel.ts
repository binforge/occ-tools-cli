import { eventName } from './EventTypes';

export default interface EventModel {
	name: eventName;
	data: object;
}
