"use client";

import { useState } from "react";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-300">
      <div className="w-full max-w-md shadow-lg rounded-2xl ">
        <div className="flex justify-center">
          <div className="flex w-full">
            <button
              // variant={activeTab === "login" ? "default" : "ghost"}
              // className="flex-1"
               className={`flex-1 py-2 font-semibold transition ${
              activeTab === "login"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              // variant={activeTab === "register" ? "default" : "ghost"}
              // className="flex-1"
              className={`flex-1 py-2 font-semibold transition ${
              activeTab === "register"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
          </div>
        </div>
        <div>
          {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
}


function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit" className="w-full">
        Login
      </button>
    </form>
  );
}

function RegisterForm() {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />

      {/* Role selector */}
      <select className="border rounded-lg p-2" required>
        <option value="">I am a...</option>
        <option value="HOMEOWNER">Homeowner</option>
        <option value="CONTRACTOR">Contractor</option>
      </select>

      <button type="submit" className="w-full">
        Register
      </button>
    </form>
  );
}
