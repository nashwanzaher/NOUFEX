import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export interface ApiClientOptions {
  baseURL?: string;
  getAccessToken?: () => string | null | Promise<string | null>;
  timeout?: number;
  defaultHeaders?: Record<string, string>;
}

const DEFAULT_BASE_URL = process.env['NOUFEX_API_URL'] ?? 'https://api.noufex.com/v1';

export function createApiClient(options: ApiClientOptions = {}): AxiosInstance {
  const instance = axios.create({
    baseURL: options.baseURL ?? DEFAULT_BASE_URL,
    timeout: options.timeout ?? 15_000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.defaultHeaders,
    },
  });

  instance.interceptors.request.use(async (config) => {
    if (options.getAccessToken) {
      const token = await options.getAccessToken();
      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 401) {
          // Surface to a single, app-wide handler if needed.
          const target = globalThis as { dispatchEvent?: (event: Event) => boolean };
          if (typeof target.dispatchEvent === 'function') {
            target.dispatchEvent(new CustomEvent('noufex:unauthorized'));
          }
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
}

export type RequestConfig = AxiosRequestConfig;
