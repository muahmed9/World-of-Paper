import { useState, useMemo } from 'react';
import {
  Plus,
  Trash2,
  Printer,
  Phone,
  MapPin,
  Calendar,
  User,
  FileText,
  Package,
  Hash
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from './lib/utils';
import { InvoiceData, InvoiceItem } from './types';

const BUSINESS_INFO = {
  name: "عالم ورق الكاشير",
  slogan: "الجودة التي تستحقها تجارتكم",
  address: "بغداد - زيونة",
  phone: "+964 786 848 3823",
};

export default function App() {
  const [invoice, setInvoice] = useState<InvoiceData>({
    invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
    date: format(new Date(), 'yyyy-MM-dd'),
    customerName: '',
    customerPhone: '',
    items: [{ id: '1', description: '', quantity: 1, price: 0 }],
    notes: '',
  });

  const subtotal = useMemo(() => {
    return invoice.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  }, [invoice.items]);

  const addItem = () => {
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, { id: Math.random().toString(36).substr(2, 9), description: '', quantity: 1, price: 0 }]
    }));
  };

  const removeItem = (id: string) => {
    if (invoice.items.length === 1) return;
    setInvoice(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setInvoice(prev => ({
      ...prev,
      items: prev.items.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-8 p-4 md:p-8 max-w-7xl mx-auto" dir="rtl">
      {/* Form Section */}
      <div className="w-full md:w-1/2 space-y-6 no-print">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-xl font-bold text-slate-800">تفاصيل القائمة</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Hash className="w-4 h-4" /> رقم القائمة
              </label>
              <input
                type="text"
                value={invoice.invoiceNumber}
                onChange={e => setInvoice(prev => ({ ...prev, invoiceNumber: e.target.value }))}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> التاريخ
              </label>
              <input
                type="date"
                value={invoice.date}
                onChange={e => setInvoice(prev => ({ ...prev, date: e.target.value }))}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <User className="w-4 h-4" /> اسم الزبون
              </label>
              <input
                type="text"
                placeholder="اسم الزبون"
                value={invoice.customerName}
                onChange={e => setInvoice(prev => ({ ...prev, customerName: e.target.value }))}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Phone className="w-4 h-4" /> رقم الهاتف
              </label>
              <input
                type="text"
                placeholder="رقم الهاتف"
                value={invoice.customerPhone}
                onChange={e => setInvoice(prev => ({ ...prev, customerPhone: e.target.value }))}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-600" /> المواد
              </h2>
              <button
                onClick={addItem}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm"
              >
                <Plus className="w-4 h-4" /> إضافة مادة
              </button>
            </div>

            <div className="space-y-3">
              {invoice.items.map((item) => (
                <div key={item.id} className="flex flex-wrap sm:flex-nowrap gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex-1 min-w-[200px]">
                    <input
                      type="text"
                      placeholder="وصف المادة"
                      value={item.description}
                      onChange={e => updateItem(item.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-24">
                    <input
                      type="number"
                      placeholder="الكمية"
                      value={item.quantity}
                      onChange={e => updateItem(item.id, 'quantity', Number(e.target.value))}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-32">
                    <input
                      type="number"
                      placeholder="السعر"
                      value={item.price}
                      onChange={e => updateItem(item.id, 'price', Number(e.target.value))}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <label className="text-sm font-medium text-slate-600">ملاحظات إضافية</label>
            <textarea
              value={invoice.notes}
              onChange={e => setInvoice(prev => ({ ...prev, notes: e.target.value }))}
              placeholder="أي ملاحظات إضافية..."
              className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all h-24 resize-none"
            />
          </div>

          <div className="pt-6 border-t border-slate-100">
            <button
              onClick={() => window.print()}
              className="w-full flex items-center justify-center gap-3 py-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all font-bold shadow-lg shadow-slate-200"
            >
              <Printer className="w-5 h-5" /> طباعة القائمة
            </button>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="w-full md:w-1/2">
        <div className="bg-white rounded-none md:rounded-2xl shadow-none md:shadow-xl border-none md:border border-slate-200 overflow-hidden sticky top-8">
          <div id="invoice-preview" className="p-8 md:p-12 space-y-8 bg-white">
            {/* Header */}
            <div className="flex flex-col items-center text-center space-y-4 border-b-2 border-slate-900 pb-8">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div className="space-y-1">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">{BUSINESS_INFO.name}</h1>
                <p className="text-blue-600 font-bold text-lg">{BUSINESS_INFO.slogan}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" /> {BUSINESS_INFO.address}
                </div>
                <div className="flex items-center gap-2" dir="ltr">
                  <Phone className="w-4 h-4 text-blue-600" /> {BUSINESS_INFO.phone}
                </div>
              </div>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-8 py-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-bold text-xs">إلى السيد/ة:</span>
                  <span className="text-slate-900 font-bold border-b border-slate-200 flex-1 pb-1">
                    {invoice.customerName || '................................'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-bold text-xs">رقم الهاتف:</span>
                  <span className="text-slate-900 font-bold border-b border-slate-200 flex-1 pb-1" dir="ltr">
                    {invoice.customerPhone || '................................'}
                  </span>
                </div>
              </div>
              <div className="space-y-3 text-left" dir="ltr">
                <div className="flex items-center justify-end gap-3">
                  <span className="text-slate-900 font-bold">{invoice.invoiceNumber}</span>
                  <span className="text-slate-400 font-bold text-xs">:رقم القائمة</span>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-slate-900 font-bold">{invoice.date}</span>
                  <span className="text-slate-400 font-bold text-xs">:التاريخ</span>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="border-2 border-slate-900 rounded-xl overflow-hidden">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold text-sm border-l border-slate-700 w-12 text-center">#</th>
                    <th className="p-4 font-bold text-sm border-l border-slate-700">المادة</th>
                    <th className="p-4 font-bold text-sm border-l border-slate-700 text-center">الكمية</th>
                    <th className="p-4 font-bold text-sm border-l border-slate-700 text-center">السعر</th>
                    <th className="p-4 font-bold text-sm text-center">المجموع</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {invoice.items.map((item, index) => (
                    <tr key={item.id} className={cn(index % 2 === 0 ? 'bg-white' : 'bg-slate-50')}>
                      <td className="p-4 text-sm font-bold text-slate-400 text-center border-l border-slate-200">{index + 1}</td>
                      <td className="p-4 text-sm font-bold text-slate-900 border-l border-slate-200">{item.description || '---'}</td>
                      <td className="p-4 text-sm font-bold text-slate-900 text-center border-l border-slate-200">{item.quantity}</td>
                      <td className="p-4 text-sm font-bold text-slate-900 text-center border-l border-slate-200">{item.price.toLocaleString()} د.ع</td>
                      <td className="p-4 text-sm font-black text-slate-900 text-center">{(item.quantity * item.price).toLocaleString()} د.ع</td>
                    </tr>
                  ))}
                  {Array.from({ length: Math.max(0, 8 - invoice.items.length) }).map((_, i) => (
                    <tr key={`empty-${i}`} className="h-12">
                      <td className="border-l border-slate-200"></td>
                      <td className="border-l border-slate-200"></td>
                      <td className="border-l border-slate-200"></td>
                      <td className="border-l border-slate-200"></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex justify-between items-start pt-4">
              <div className="w-1/2 space-y-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">ملاحظات:</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {invoice.notes || 'شكراً لتعاملكم معنا. البضاعة المباعة لا ترد ولا تستبدل بعد مرور ٢٤ ساعة.'}
                </p>
              </div>
              <div className="w-1/3 space-y-3">
                <div className="flex justify-between items-center p-4 bg-slate-900 text-white rounded-xl shadow-lg">
                  <span className="text-sm font-bold">المجموع الكلي:</span>
                  <span className="text-xl font-black">{subtotal.toLocaleString()} د.ع</span>
                </div>
              </div>
            </div>

            {/* Signatures */}
            <div className="pt-12 flex justify-between items-end">
              <div className="text-center space-y-8">
                <div className="w-40 border-b-2 border-slate-200 pb-2"></div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">توقيع المستلم</p>
              </div>
              <div className="text-center space-y-8">
                <div className="w-40 border-b-2 border-slate-200 pb-2"></div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">توقيع المحاسب</p>
              </div>
            </div>

            <div className="pt-8 text-center">
              <p className="text-[10px] font-bold text-slate-300 tracking-[0.2em]">
                عالم ورق الكاشير — بغداد، زيونة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
