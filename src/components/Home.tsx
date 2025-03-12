import React from 'react';
import { Sun, Wind, Droplet, Leaf, Battery, Lightbulb, AlertTriangle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
            alt="Power Generation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply" />
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Powering Tamil Nadu's Future
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Delivering reliable and sustainable electricity to millions of homes and businesses across Tamil Nadu.
          </p>
        </div>
      </div>

      {/* Power Generation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Power Generation Sources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Sun,
              title: "Solar Power",
              description: "Harnessing the power of the sun with over 2GW of solar capacity.",
              color: "text-yellow-500"
            },
            {
              icon: Wind,
              title: "Wind Energy",
              description: "Leading wind energy producer with extensive wind farms.",
              color: "text-blue-500"
            },
            {
              icon: Droplet,
              title: "Hydro Power",
              description: "Clean and renewable hydroelectric power generation.",
              color: "text-cyan-500"
            }
          ].map((source, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105"
            >
              <source.icon className={`h-12 w-12 ${source.color} mb-4`} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{source.title}</h3>
              <p className="text-gray-600">{source.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Energy Saving Tips */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Energy Saving Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Use LED Bulbs",
                tip: "Switch to LED bulbs to save up to 80% on lighting energy consumption."
              },
              {
                icon: Battery,
                title: "Smart Power Strips",
                tip: "Use smart power strips to eliminate phantom energy consumption."
              },
              {
                icon: Leaf,
                title: "Natural Ventilation",
                tip: "Use natural ventilation when possible to reduce AC usage."
              },
              {
                icon: AlertTriangle,
                title: "Peak Hours",
                tip: "Avoid using heavy appliances during peak hours (6-9 PM)."
              }
            ].map((tip, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-2"
              >
                <tip.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;