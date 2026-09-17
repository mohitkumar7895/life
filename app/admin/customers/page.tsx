'use client';
import { Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function AdminCustomersPage() {
  const customers = [
    { name: 'Priya Sharma', email: 'priya@example.com', orders: 4, spent: '₹4,500' },
    { name: 'Rahul Verma', email: 'rahul@example.com', orders: 1, spent: '₹499' },
    { name: 'Anjali Desai', email: 'anjali@example.com', orders: 2, spent: '₹2,450' },
    { name: 'Vikram Singh', email: 'vikram@example.com', orders: 8, spent: '₹9,890' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search customers..." className="pl-10 h-10 bg-gray-50 border-transparent focus:bg-white" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 font-semibold">Customer Name</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Total Orders</th>
                <th className="px-6 py-4 font-semibold">Total Spent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {customers.map((cust, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#174A3A]/10 text-[#174A3A] flex items-center justify-center font-bold">
                      {cust.name.charAt(0)}
                    </div>
                    {cust.name}
                  </td>
                  <td className="px-6 py-4">{cust.email}</td>
                  <td className="px-6 py-4">{cust.orders}</td>
                  <td className="px-6 py-4 font-medium text-green-700">{cust.spent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
