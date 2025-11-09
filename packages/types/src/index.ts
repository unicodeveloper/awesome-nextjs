// User and Authentication Types
export enum UserRole {
  BUYER = 'BUYER',
  SELLER = 'SELLER',
  ADMIN = 'ADMIN',
}

export interface User {
  id: string
  email: string
  role: UserRole
  firstName: string
  lastName: string
  avatarUrl?: string
  createdAt: string
  updatedAt: string
}

// Product Types
export enum ProductCategory {
  BEEF = 'BEEF',
  PORK = 'PORK',
  POULTRY = 'POULTRY',
  LAMB = 'LAMB',
  SEAFOOD = 'SEAFOOD',
  OTHER = 'OTHER',
}

export interface Product {
  id: string
  sellerId: string
  name: string
  description: string
  category: ProductCategory
  price: number
  unit: string
  stockQuantity: number
  imageUrls: string[]
  productionMethod?: string
  sourceLocation?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

// Group Purchase Types
export enum GroupPurchaseStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED',
}

export interface PriceTier {
  minQuantity: number
  maxQuantity?: number
  price: number
  discountPercentage: number
}

export interface GroupPurchase {
  id: string
  productId: string
  organizerId: string
  name: string
  description: string
  minimumQuantity: number
  currentQuantity: number
  priceTiers: PriceTier[]
  expiresAt: string
  status: GroupPurchaseStatus
  createdAt: string
  updatedAt: string
}

export interface GroupPurchaseParticipant {
  id: string
  groupPurchaseId: string
  userId: string
  quantity: number
  joinedAt: string
}

// Order Types
export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
}

export interface OrderItem {
  id: string
  productId: string
  quantity: number
  unitPrice: number
  subtotal: number
}

export interface Order {
  id: string
  buyerId: string
  sellerId: string
  items: OrderItem[]
  total: number
  orderStatus: OrderStatus
  paymentStatus: PaymentStatus
  stripePaymentIntentId?: string
  shippingAddress: Address
  createdAt: string
  updatedAt: string
}

// Address Type
export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

// Community Types
export interface ForumPost {
  id: string
  authorId: string
  title: string
  content: string
  categoryId?: string
  viewCount: number
  createdAt: string
  updatedAt: string
}

export interface ForumComment {
  id: string
  postId: string
  authorId: string
  content: string
  createdAt: string
  updatedAt: string
}

export interface Review {
  id: string
  productId: string
  userId: string
  rating: number
  title: string
  content: string
  verified: boolean
  createdAt: string
  updatedAt: string
}

export interface Message {
  id: string
  senderId: string
  receiverId: string
  content: string
  isRead: boolean
  createdAt: string
}

// API Response Types
export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}
