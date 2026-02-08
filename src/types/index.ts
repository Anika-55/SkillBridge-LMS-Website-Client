// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: "ADMIN" | "TUTOR" | "STUDENT";
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tutor Types
export interface Tutor {
  id: string;
  userId: string;
  user?: User;
  bio: string;
  hourlyRate: number;
  rating: number;
  totalReviews: number;
  expertise: string[];
  availability: Availability[];
  categories: Category[];
  reviews?: Review[];
  bookings?: Booking[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TutorProfile extends Tutor {
  user: User;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  tutors?: Tutor[];
  createdAt: Date;
  updatedAt: Date;
}

// Booking Types
export interface Booking {
  id: string;
  studentId: string;
  tutorId: string;
  student?: User;
  tutor?: Tutor;
  startTime: Date;
  endTime: Date;
  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
  totalPrice: number;
  notes?: string;
  review?: Review;
  createdAt: Date;
  updatedAt: Date;
}

// Review Types
export interface Review {
  id: string;
  bookingId: string;
  studentId: string;
  tutorId: string;
  rating: number;
  comment?: string;
  student?: User;
  tutor?: Tutor;
  booking?: Booking;
  createdAt: Date;
  updatedAt: Date;
}

// Availability Types
export interface Availability {
  id: string;
  tutorId: string;
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string; // HH:mm format
  endTime: string; // HH:mm format
  tutor?: Tutor;
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form Types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  role: "STUDENT" | "TUTOR";
}

export interface BookingFormData {
  tutorId: string;
  startTime: Date;
  endTime: Date;
  notes?: string;
}

export interface ReviewFormData {
  bookingId: string;
  rating: number;
  comment?: string;
}

export interface TutorProfileFormData {
  bio: string;
  hourlyRate: number;
  expertise: string[];
  categoryIds: string[];
}

// Filter Types
export interface TutorFilters {
  search?: string;
  categoryId?: string;
  minRate?: number;
  maxRate?: number;
  minRating?: number;
  sortBy?: "rating" | "price" | "reviews";
  sortOrder?: "asc" | "desc";
}

// Dashboard Stats Types
export interface AdminStats {
  totalUsers: number;
  totalTutors: number;
  totalStudents: number;
  totalBookings: number;
  totalRevenue: number;
  recentBookings: Booking[];
}

export interface TutorStats {
  totalBookings: number;
  totalEarnings: number;
  averageRating: number;
  totalReviews: number;
  upcomingBookings: Booking[];
  recentReviews: Review[];
}

export interface StudentStats {
  totalBookings: number;
  totalSpent: number;
  upcomingBookings: Booking[];
  completedBookings: Booking[];
}
