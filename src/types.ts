export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  date: string;
  customerName: string;
  customerPhone: string;
  items: InvoiceItem[];
  notes: string;
}
