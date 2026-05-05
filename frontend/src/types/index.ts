export type UserRole = "USER" | "MODERATOR" | "ADMIN" | "OWNER";
export type UserLevel = "BRONZE" | "SILVER" | "GOLD" | "PLATINUM";

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  role: UserRole;
  balance: number;
  verified: boolean;
  rating: number;
  salesCount: number;
  level: UserLevel;
  createdAt: string;
}

export interface Game {
  id: string;
  name: string;
  cover: string;
  activeListings: number;
}

export interface Listing {
  id: string;
  title: string;
  price: number;
  currency: string;
  images: string[];
  seller: User;
  game: string;
  category: string;
  deliveryTime: string;
  rating: number;
  reviews: number;
  isHot: boolean;
}

export type DeliveryType = "AUTO" | "MANUAL" | "INSTANT";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  isOfficial: boolean;
  deliveryType: DeliveryType;
  stock: number;
  sold: number;
  isHot: boolean;
}

export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "PROCESSING"
  | "DELIVERING"
  | "COMPLETED"
  | "DISPUTED"
  | "CANCELLED"
  | "REFUNDED";

export type PaymentStatus =
  | "UNPAID"
  | "PAID"
  | "PARTIALLY_REFUNDED"
  | "REFUNDED"
  | "FAILED";

export interface Order {
  id: string;
  buyerId: string;
  sellerId: string;
  items: { name: string; price: number; quantity: number }[];
  subtotal: number;
  fee: number;
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
}

export type TransactionType =
  | "DEPOSIT"
  | "WITHDRAWAL"
  | "PURCHASE"
  | "SALE"
  | "REFUND"
  | "FEE"
  | "BONUS"
  | "REFERRAL";

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  balance: number;
  description: string;
  createdAt: string;
  status: "PENDING" | "COMPLETED" | "FAILED" | "CANCELLED";
}

export type BotStatus = "RUNNING" | "PAUSED" | "STOPPED" | "ERROR";
export type BotType =
  | "FUNPAY"
  | "STEAM"
  | "PLAYEROK"
  | "STARVELL"
  | "DISCORD"
  | "TELEGRAM";

export interface Bot {
  id: string;
  name: string;
  type: BotType;
  status: BotStatus;
  uptime: number;
  messagesProcessed: number;
  salesCount: number;
}

export interface Rental {
  id: string;
  gameId: string;
  gameName: string;
  cover: string;
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  isAvailable: boolean;
}

export type TicketStatus = "OPEN" | "PENDING" | "RESOLVED" | "CLOSED";
export type TicketPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export interface Ticket {
  id: string;
  subject: string;
  status: TicketStatus;
  priority: TicketPriority;
  category: string;
  messages: number;
  createdAt: string;
  userId: string;
}

export interface Review {
  id: string;
  authorName: string;
  avatar: string;
  rating: number;
  text: string;
  createdAt: string;
}

export type NotificationType =
  | "ORDER"
  | "PAYMENT"
  | "REVIEW"
  | "SUPPORT"
  | "SYSTEM"
  | "PROMOTION"
  | "BOT";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  isRead: boolean;
  createdAt: string;
}
