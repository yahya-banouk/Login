'use client';

import React from 'react';
import Image from 'next/image';

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left side: Login form */}
      <div className="flex flex-col justify-center w-1/2 p-8 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-left">Se connecter</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="w-full px-3 py-2 border rounded" placeholder="mail@simmple.com" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="w-full px-3 py-2 border rounded" placeholder="Min. 8 characters" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Rester connecté
              </label>
              <a href="#" className="text-sm text-blue-500">Mot de passe oublié?</a>
            </div>
            <button className="w-full px-3 py-2 text-white bg-blue-600 rounded">Se connecter</button>
          </form>
          <p className="mt-4 text-center text-sm">
            Pas encore inscrit? <a href="#" className="text-blue-500">Créer un compte</a>
          </p>
        </div>
      </div>
      {/* Right side: Image */}
      <div className="w-1/2 relative rounded-bl-[200px] rounded-tr-[200px] overflow-hidden">
        <Image src="/images/students.jpeg" alt="Students" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
