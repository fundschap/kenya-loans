export interface LoanOption { amount: number; fee: number; }

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
  { amount: 5700, fee: 200 },
  { amount: 6800, fee: 220 },
  { amount: 7800, fee: 240 },
  { amount: 9800, fee: 260 },
  { amount: 11200, fee: 280 },
  { amount: 16800, fee: 320 },
  { amount: 21200, fee: 360 },
  { amount: 25600, fee: 470 },
  { amount: 30000, fee: 500 },
  { amount: 35400, fee: 600 },
  { amount: 39800, fee: 750 },
  { amount: 44200, fee: 1100 },
  { amount: 48600, fee: 1600 },
  { amount: 60600, fee: 2050 },
];

export const LOAN_TYPES = [
  "Business Loan",
  "Personal Loan",
  "Education Loan",
  "Medical Loan",
  "Emergency Loan",
] as const;

export type LoanType = typeof LOAN_TYPES[number];
