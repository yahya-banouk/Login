'use client';

import React from 'react';
import Image from 'next/image';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <div className="mb-6">
            {/* Logo or Header */}
            <img src="/images/maroc.jpeg" alt="Logo" className="w-full h-auto" />
          </div>
          <nav>
            <ul>
              <li className="mb-4 flex items-center">
                <span className="mr-3">📄</span>
                <a href="#" className="text-gray-700">Gestion des inscriptions</a>
              </li>
              <li className="mb-4 flex items-center">
                <span className="mr-3">✅</span>
                <a href="#" className="text-gray-700">Valider les inscriptions</a>
              </li>
              <li className="mb-4 flex items-center">
                <span className="mr-3">👥</span>
                <a href="#" className="text-gray-700">Gestion des utilisateurs</a>
              </li>
              <li className="mb-4 flex items-center">
                <span className="mr-3">🔑</span>
                <a href="#" className="text-gray-700">Gestion des droits</a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Gestion Des Inscriptions</h1>
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column: General Information */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Informations générales</h3>
            <div className="space-y-4">
              <div>
                <span className="block text-gray-600">Nom</span>
                <span>Chaoui</span>
              </div>
              <div>
                <span className="block text-gray-600">Email</span>
                <span>Soufian123@gmail.com</span>
              </div>
              <div>
                <span className="block text-gray-600">Adresse</span>
                <span>9 Hay alnibiaat Lot issafen Temara</span>
              </div>
              <div>
                <span className="block text-gray-600">Ville</span>
                <span>Rabat</span>
              </div>
              {/* Add more fields as needed */}
            </div>
          </div>

          {/* Right Column: Document Information */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Documents fournis</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Baccalauréat</span>
                <span className="text-red-500">PDF</span>
              </div>
              <div className="flex justify-between">
                <span>Cin</span>
                <span className="text-red-500">PDF</span>
              </div>
              <div className="flex justify-between">
                <span>Bulletin de notes</span>
                <span className="text-red-500">PDF</span>
              </div>
              <div className="flex justify-between">
                <span>Lettre de motivation</span>
                <span className="text-red-500">PDF</span>
              </div>
              {/* Add more documents as needed */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
