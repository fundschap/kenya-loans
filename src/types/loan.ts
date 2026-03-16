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
{ amount: 5900, fee: 240 },
{ amount: 6800, fee: 260 },
{ amount: 7800, fee: 280 },
{ amount: 9800, fee: 300 },
{ amount: 11200, fee: 330 },
{ amount: 16800, fee: 380 },
{ amount: 21200, fee: 420 },
{ amount: 25600, fee: 500 },
{ amount: 30000, fee: 600 },
{ amount: 35400, fee: 720 },
{ amount: 39800, fee: 880 },
{ amount: 44200, fee: 1100 },
{ amount: 48600, fee: 1600 },
{ amount: 60600, fee: 2100 },
];

export const LOAN_TYPES = [
  "Business Loan",
  "Personal Loan",
  "Education Loan",
  "Medical Loan",
  "Emergency Loan",
] as const;

export type LoanType = typeof LOAN_TYPES[number];
