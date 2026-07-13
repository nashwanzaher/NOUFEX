// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = 'customer' | 'merchant' | 'admin';

// Product Types
export interface Product {
  id: string;
  merchantId: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: Category;
  stock: number;
  rating: number;
  reviewCount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  icon?: string;
  productCount?: number;
}

// Cart Types
export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedVariants?: Record<string, string>;
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  currency: string;
}

// Order Types
export interface Order {
  id: string;
  userId: string;
  merchantId: string;
  items: OrderItem[];
  status: OrderStatus;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
  shippingAddress: Address;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  createdAt: string;
  updatedAt: string;
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export interface OrderItem {
  productId: string;
  product: Product;
  quantity: number;
  price: number;
  variants?: Record<string, string>;
}

export interface Address {
  id: string;
  userId: string;
  label: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export type PaymentMethod =
  | 'cod'
  | 'card'
  | 'wallet'
  | 'bank_transfer';

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, string[]>;
}

// Platform Types (for Omni-Channel)
export type Platform = 'web' | 'ios' | 'android' | 'pwa';

export interface PlatformConfig {
  platform: Platform;
  apiBaseUrl: string;
  wsUrl?: string;
  cdnUrl?: string;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  body: string;
  data?: Record<string, unknown>;
  isRead: boolean;
  createdAt: string;
}

export type NotificationType =
  | 'order_update'
  | 'payment'
  | 'promotion'
  | 'system'
  | 'chat';

// Review Types
export interface Review {
  id: string;
  productId: string;
  userId: string;
  user: Pick<User, 'id' | 'name' | 'avatar'>;
  rating: number;
  title?: string;
  content: string;
  images?: string[];
  helpful: number;
  verified: boolean;
  createdAt: string;
}

// Search Types
export interface SearchFilters {
  query?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  sortBy?: 'relevance' | 'price_asc' | 'price_desc' | 'rating' | 'newest';
}

export interface SearchResult {
  products: Product[];
  facets: SearchFacets;
  total: number;
}

export interface SearchFacets {
  categories: Category[];
  priceRange: { min: number; max: number };
  brands: { name: string; count: number }[];
  ratings: { value: number; count: number }[];
}
