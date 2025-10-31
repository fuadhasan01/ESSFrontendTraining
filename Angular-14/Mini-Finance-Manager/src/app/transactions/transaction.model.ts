export interface Transaction {
  id: number;
  title: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: Date;
  description: string;
}
