export interface LoanOption {
  amount: number;
  fee: number;
}

export interface UserData {
  fullName: string;
  phoneNumber: string;
  idNumber: string;
  loanType: string;
}

export interface PaymentResponse {
  success: boolean;
  message?: string;
  transaction_request_id?: string;
  data?: any;
}

export const LOAN_OPTIONS: LoanOption[] = [
  { amount: 10000, fee: 500 },
  { amount: 15000, fee: 650 },
  { amount: 20000, fee: 800 },
  { amount: 25000, fee: 950 },
  { amount: 30000, fee: 1100 },
  { amount: 35000, fee: 1300 },
  { amount: 40000, fee: 1500 },
  { amount: 45000, fee: 1700 },
  { amount: 50000, fee: 2000 },
  { amount: 60000, fee: 2400 },
  { amount: 70000, fee: 2800 },
  { amount: 80000, fee: 3200 },
  { amount: 90000, fee: 3600 },
  { amount: 100000, fee: 4000 },
];

export const LOAN_TYPES = [
  "Business Loan",
  "Personal Loan",
  "Education Loan",
  "Medical Loan",
  "Emergency Loan",
] as const;

export type LoanType = typeof LOAN_TYPES[number];
