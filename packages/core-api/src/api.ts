import type {
  ApiResponse,
  Cart,
  Order,
  PaginatedResponse,
  Product,
  SearchFilters,
  SearchResult,
  User,
} from '@noufex/types';

import { createApiClient, type RequestConfig } from './client';

export interface ProductsQuery extends Partial<SearchFilters> {
  page?: number;
  pageSize?: number;
  limit?: number;
}

const defaultClient = createApiClient();

export const api = {
  products: {
    list: (query: ProductsQuery = {}, config?: RequestConfig) =>
      defaultClient
        .get<PaginatedResponse<Product>>('/products', { params: query, ...config })
        .then((r) => r.data),

    byId: (id: string, config?: RequestConfig) =>
      defaultClient
        .get<ApiResponse<Product>>(`/products/${encodeURIComponent(id)}`, config)
        .then((r) => r.data.data),

    search: (filters: SearchFilters, config?: RequestConfig) =>
      defaultClient
        .post<ApiResponse<SearchResult>>('/products/search', filters, config)
        .then((r) => r.data.data),
  },

  cart: {
    get: (userId: string, config?: RequestConfig) =>
      defaultClient
        .get<ApiResponse<Cart>>(`/users/${encodeURIComponent(userId)}/cart`, config)
        .then((r) => r.data.data),
  },

  orders: {
    list: (userId: string, config?: RequestConfig) =>
      defaultClient
        .get<ApiResponse<Order[]>>(`/users/${encodeURIComponent(userId)}/orders`, config)
        .then((r) => r.data.data),

    byId: (id: string, config?: RequestConfig) =>
      defaultClient
        .get<ApiResponse<Order>>(`/orders/${encodeURIComponent(id)}`, config)
        .then((r) => r.data.data),
  },

  users: {
    me: (config?: RequestConfig) =>
      defaultClient.get<ApiResponse<User>>('/users/me', config).then((r) => r.data.data),
  },
};

export async function fetchProducts(query: ProductsQuery = {}, config?: RequestConfig) {
  const response = await api.products.list(query, config);
  return response.data;
}
