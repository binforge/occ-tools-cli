import * as qs from 'querystring';
import HTTPRequestTypes from './interface/HTTPRequestTypes';

const SUBDOMAIN = process.env[`OCC_SUBDOMAIN_${process.env.CURRENT_ENV}`];
const AUTH_KEY = process.env[`OCC_AUTH_${process.env.CURRENT_ENV}`];

const HTTPRequest: HTTPRequestTypes = {
	authenticate: {
		method: 'POST',
		url: `https://ccadmin-${SUBDOMAIN}-${process.env.ORGANIZATION_ID}.oracleoutsourcing.com/ccadmin/v1/login`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Bearer ${AUTH_KEY}`,
		},
		data: qs.stringify({
			grant_type: 'client_credentials',
		}),
	},
};

export default HTTPRequest;
