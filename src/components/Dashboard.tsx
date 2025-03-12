import React, { useState } from 'react';
import { CreditCard, CheckCircle, History, AlertCircle, Receipt, Calendar } from 'lucide-react';

interface Bill {
  id: string;
  period: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending';
  usage: number;
  paidOn?: string;
}

const Dashboard: React.FC = () => {
  const [bills, setBills] = useState<Bill[]>([
    {
      id: 'EB2024031001',
      period: 'March 2024',
      amount: 2450,
      dueDate: '2024-03-25',
      status: 'pending',
      usage: 320
    },
    {
      id: 'EB2024021001',
      period: 'February 2024',
      amount: 2100,
      dueDate: '2024-02-25',
      status: 'paid',
      usage: 280,
      paidOn: '2024-02-20'
    },
    {
      id: 'EB2024011001',
      period: 'January 2024',
      amount: 1950,
      dueDate: '2024-01-25',
      status: 'paid',
      usage: 260,
      paidOn: '2024-01-18'
    }
  ]);

  const pendingBill = bills.find(bill => bill.status === 'pending');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    if (!pendingBill) return;
    
    setIsProcessing(true);
    setTimeout(() => {
      setBills(bills.map(bill => 
        bill.id === pendingBill.id 
          ? { ...bill, status: 'paid', paidOn: new Date().toISOString().split('T')[0] }
          : bill
      ));
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Current Bill Section */}
      {pendingBill && (
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 mb-8 transform transition-all duration-500 hover:shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Current Bill</h2>
            <div className="flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full animate-pulse">
              <AlertCircle className="h-4 w-4 mr-1" />
              Payment Due
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Bill Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Bill Number</span>
                  <span className="font-medium">{pendingBill.id}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Period</span>
                  <span className="font-medium">{pendingBill.period}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Due Date</span>
                  <span className="font-medium text-red-600">{pendingBill.dueDate}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-gray-900 font-semibold">Amount</span>
                  <span className="text-2xl font-bold text-blue-600">₹{pendingBill.amount}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Usage Overview</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Current Usage</span>
                    <span className="font-medium">{pendingBill.usage} kWh</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${(pendingBill.usage / 400) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`${
                isProcessing
                  ? 'bg-gray-400'
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center mx-auto`}
            >
              <CreditCard className="h-5 w-5 mr-2" />
              {isProcessing ? 'Processing Payment...' : 'Pay Now'}
            </button>
          </div>
        </div>
      )}

      {/* Bill History Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bills.map((bill) => (
          <div
            key={bill.id}
            className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 ${
              bill.status === 'pending' ? 'border-l-4 border-yellow-400' : 'border-l-4 border-green-400'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{bill.period}</h3>
                <p className="text-sm text-gray-500">{bill.id}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                bill.status === 'paid' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Amount</span>
                <span className="font-semibold">₹{bill.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Usage</span>
                <span>{bill.usage} kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Due Date</span>
                <span>{bill.dueDate}</span>
              </div>
              {bill.paidOn && (
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-gray-600">Paid On</span>
                  <span className="text-green-600">{bill.paidOn}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;