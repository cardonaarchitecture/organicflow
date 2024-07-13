import React from 'react';
import Link from 'next/link';


const BasicArchitectUI: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">W.A — ARCHITECT</h1>
          <nav>
            <ul className="flex space-x-4">
              {['Projects', 'Services', 'The Studio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`}>
                    <span className="text-blue-600 hover:text-blue-800 cursor-pointer">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-3xl font-bold mb-4">Garden Villa</h2>
          <p className="text-xl mb-4">2800 Sq Ft, 3 Bedroom, 3 Units</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Project
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>01 04</div>
          <div className="flex space-x-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BasicArchitectUI;