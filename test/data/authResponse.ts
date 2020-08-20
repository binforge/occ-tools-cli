import AuthResponse from '../../src/common/http/interface/HTTPResponseTypes';

export const AUTH_RESPONSE: AuthResponse = {
	access_token: 'access_token',
	links: [{ rel: 'self', href: 'https://ccadmin-uat-zd8a.oracleoutsourcing.com/ccadmin/v1/login' }],
	token_type: 'bearer',
	expires_in: 300,
};
