import React from 'react'

function Login() {
  return (
    <div>
      <form className="flex flex-col items-center justify-center h-screen ">
        <div className="bg-base-300 p-6 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </div>
        <p className="mt-4 text-gray-600">
          Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
        </p>
      </form>
    </div>
  )
}

export default Login
