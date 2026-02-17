"use client"

import Image from 'next/image'
import { useState } from 'react'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login data:', formData)
    // Add login logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className=" bg-gray-50">
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl w-full  overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Left Side - Image and Content */}
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww"
                alt="Travel destination"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-indigo-600/70 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
                  <p className="text-lg mb-6">Your journey begins here</p>
                  <div className="space-y-2">
                    <p className="text-sm opacity-90">✨ Exclusive travel deals</p>
                    <p className="text-sm opacity-90">🌍 Explore new destinations</p>
                    <p className="text-sm opacity-90">🎯 Personalized experiences</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="p-8 md:p-12">
              <div className="max-w-sm mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
                  <p className="text-gray-600">Enter your credentials to access your account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Enter your username"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Enter your password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105 shadow-lg"
                  >
                    Sign In
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
