'use client';

import { useState } from 'react';
import { Save, Store, Mail, Bell, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  const tabs = [
    { id: 'general', name: 'General', icon: Store },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'security', name: 'Security', icon: Shield },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Store Settings</h1>
        <p className="text-gray-500 mt-1">Manage your store preferences and configurations.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  isActive 
                    ? 'bg-[#174A3A] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-white hover:text-gray-900'
                }`}
              >
                <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSave} className="space-y-8">
              
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-semibold text-gray-900">General Settings</h2>
                    <p className="text-sm text-gray-500">Update your basic store information.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Store Name</label>
                      <Input defaultValue="Fit Life Ayurvedic" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Contact Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input type="email" defaultValue="contact@fitlife.com" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-sm font-medium text-gray-700">Store Description</label>
                      <textarea 
                        className="w-full min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue="Pure Ayurvedic Wellness • Natural Ingredients • Trusted Quality"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Currency</label>
                      <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring">
                        <option value="INR">₹ INR - Indian Rupee</option>
                        <option value="USD">$ USD - US Dollar</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Email Notifications</h2>
                    <p className="text-sm text-gray-500">Choose when and how you want to be notified.</p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { id: 'new_order', label: 'New Order', desc: 'Get notified when a new order is placed.' },
                      { id: 'low_stock', label: 'Low Stock Alert', desc: 'Get notified when a product inventory is low.' },
                      { id: 'new_customer', label: 'New Customer', desc: 'Get notified when a new user registers.' },
                    ].map((item) => (
                      <div key={item.id} className="flex items-start justify-between p-4 border border-gray-100 rounded-xl">
                        <div>
                          <p className="font-medium text-gray-900">{item.label}</p>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-[#174A3A] focus:ring-[#174A3A]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'payments' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Payment Providers</h2>
                    <p className="text-sm text-gray-500">Configure your payment gateways.</p>
                  </div>
                  <div className="p-4 border border-blue-100 bg-blue-50/50 rounded-xl text-sm text-blue-800 flex items-start gap-3">
                    <CreditCard className="w-5 h-5 mt-0.5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Razorpay Integration</p>
                      <p className="mt-1">Your store is currently in test mode. Switch to live credentials in the .env file to accept real payments.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Security</h2>
                    <p className="text-sm text-gray-500">Update your admin credentials.</p>
                  </div>
                  <div className="grid grid-cols-1 gap-6 max-w-md">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Current Password</label>
                      <Input type="password" placeholder="••••••••" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">New Password</label>
                      <Input type="password" placeholder="••••••••" />
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-gray-100 flex justify-end">
                <Button 
                  type="submit" 
                  disabled={isSaving}
                  className="bg-[#174A3A] hover:bg-[#3F7655] text-white min-w-[120px]"
                >
                  {isSaving ? 'Saving...' : (
                    <>
                      <Save className="w-4 h-4 mr-2" /> Save Changes
                    </>
                  )}
                </Button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
