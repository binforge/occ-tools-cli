export type eventName = 'AUTH_REQUESTED';

export interface EventTypeInterface {
	[key: string]: eventName;
}

const EVENT_TYPE: EventTypeInterface = {
	AUTH_REQUESTED: 'AUTH_REQUESTED',
};

export default EVENT_TYPE;
