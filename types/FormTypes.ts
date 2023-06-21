export interface Password {
  password: string;
  confirmPassword: string;
}

export interface Account {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  job: string;
  bio: string;
}

export interface Reservation {
  fullName: string;
  phoneNumber: string;
  email: string;
  persons: string;
  date: string;
}

export interface Category {
  category: string;
}

export interface AdminIndex {
  username: string;
  password: string;
}
export interface AuthLogin {
  email: string;
  password: string;
}
export interface AuthRegister {
  email: string;
  password: string;
  fullName: string;
  confirmPassword: string;
}

export interface FooterType {
  location: string;
  email: string;
  phoneNumber: string;
  desc: string;
  day: string;
  time: string;
}

export interface FormActions {
  resetForm: () => void;
}
