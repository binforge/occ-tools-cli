import { eventName } from './EventTypes';

export default interface EventModel<dataObject extends {}> {
	name: eventName;
	data: dataObject;
}
