import * as qs from 'querystring';

const SUBDOMAIN = process.env[`OCC_SUBDOMAIN_${process.env.CURRENT_ENV}`];
const AUTH_KEY = process.env[`OCC_AUTH_${process.env.CURRENT_ENV}`];

export default {
	authenticate() {
		return {
			method: 'POST',
			url: `https://ccadmin-${SUBDOMAIN}-zd8a.oracleoutsourcing.com/ccadmin/v1/login`,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Bearer ${AUTH_KEY}`,
			},
			data: qs.stringify({
				grant_type: 'client_credentials',
			}),
		};
	},
};
