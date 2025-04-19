
import React from 'react';

const AppPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Visualize o QuickApp
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interface intuitiva e elegante para valorizar seu negócio
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white shadow-xl rounded-xl p-4 md:p-6 max-w-sm">
            <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-gray-500">
                <span className="text-3xl font-bold text-primary-green block mb-2">QuickApp</span>
                <span className="text-sm">Prévia da interface em breve</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-6 bg-gray-100 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded w-full"></div>
              <div className="h-4 bg-gray-100 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
