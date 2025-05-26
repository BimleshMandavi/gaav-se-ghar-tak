import React from 'react'

const page = () => {
  return (
    <div>
      Log In Page
      <form className="flex flex-col items-center justify-center h-screen">
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Log In
        </button>
        <p className="mt-4">
          Don't have an account? <a href="/SignUp" className="text-blue-500">Sign Up</a>
        </p>
      </form>
      <div className="bg-[#aa7235] h-[150px] flex justify-center items-center">
        <h1 className="text-2xl sm:text-6xl font-bold text-[#351d0a]">
          Welcome Back!
        </h1>
    </div>
    </div>
 
  )
}

export default page
