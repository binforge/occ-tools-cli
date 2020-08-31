import { BaseType } from './interface/http/RequestTypes';

const SUBDOMAIN = process.env[`OCC_SUBDOMAIN_${process.env.CURRENT_ENV}`];
const AUTH_KEY = process.env[`OCC_AUTH_${process.env.CURRENT_ENV}`];

export const adminResourcePath = '/ccadmin/v1/';
export const baseURL = `https://ccadmin-${SUBDOMAIN}-${process.env.ORGANIZATION_ID}.oracleoutsourcing.com${adminResourcePath}`;

export const HTTPRequestBase: BaseType = ({ url, headers = {}, data = {}, ...options } = {}) => ({
  baseURL,
  url,
  headers: {
    Authorization: `Bearer ${AUTH_KEY}`,
    ...headers
  },
  ...options
});
