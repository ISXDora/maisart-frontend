export interface UserData {
  id: number;
  name: string;
  cpf: string;
  email: string;
  birthDate: Date;
  photoURL: string;
  studioName: string;
  user_id: number | undefined;
  created_at: Date;
  updated_at: Date;
}

export interface Studio {
  id?: number;
  cnpj?: string;
  created_at?: Date;
  updated_at?: Date;
  data?: Promise<void>
}

export interface Product {
  id: number;
  price: number;
  studio_id: number;
  created_at: Date;
  updated_at: Date;

}

export interface VariabelProductExpense {
  id: Number;
  name: string;
  value: Number;
  product_id: Number;
  created_at: Date;
  updated_at: Date;
}

export interface VariabelExpense {
  id: Number;
  name: string;
  value: number;
  studio_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface FixedExpense {
  id: Number;
  name: string;
  value: number;
  studio_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface WorkHour {
  id: Number;
  compensation: Number;
  working_hours_per_day: number;
  working_days_per_week: number;
  hourly_rate: number;
  user_id: Number;
  created_at: Date;
  updated_at: Date;
}