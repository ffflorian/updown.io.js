import {URL} from 'url';

export interface ClientOptions {
  apiKey: string;
  apiUrl?: URL;
}

export interface CustomHeaders {
  [key: string]: string | number | boolean;
}

export type HttpMethod = 'delete' | 'get' | 'post' | 'put';

export enum HttpStatus {
  'FORBIDDEN' = 403,
  'NOT_FOUND' = 404,
  'UNAUTHORIZED' = 403,
}

export interface RequestOptions {
  apiKey?: string;
  alias?: string;
  apdex_t?: number;
  customHeaders?: CustomHeaders;
  disabledLocations?: string[];
  enabled?: boolean;
  muteUntil?: string;
  period?: number;
  published?: boolean;
  stringMatch?: string;
  url?: string;
}
