import { Package, ShoppingBag, Users, IndianRupee } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { name: 'Total Revenue', value: '₹45,231', icon: IndianRupee, change: '+12.5%' },
    { name: 'Active Orders', value: '124', icon: ShoppingBag, change: '+5.2%' },
    { name: 'Total Products', value: '45', icon: Package, change: '0%' },
    { name: 'Total Customers', value: '892', icon: Users, change: '+18.1%' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FAF7EF] flex items-center justify-center text-[#174A3A]">
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-gray-500'}>
                {stat.change}
              </span>
              <span className="text-gray-400 ml-2">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table Placeholder */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm mt-8">
        <div className="px-6 py-5 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        </div>
        <div className="p-6">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="text-xs uppercase bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 rounded-tl-lg">Order ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3 rounded-tr-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#ORD-001', customer: 'Priya Sharma', date: 'Today, 2:30 PM', amount: '₹1,299', status: 'Processing' },
                { id: '#ORD-002', customer: 'Rahul Verma', date: 'Today, 11:15 AM', amount: '₹499', status: 'Shipped' },
                { id: '#ORD-003', customer: 'Anjali Desai', date: 'Yesterday', amount: '₹2,450', status: 'Delivered' },
              ].map((order, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-3 font-medium text-gray-900">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">{order.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
