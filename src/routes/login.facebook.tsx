import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login/facebook")({
  component: FacebookLoginPage,
  head: () => ({
    meta: [{ title: "Log in to Facebook" }],
  }),
});

function FacebookLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen w-full bg-[#f0f2f5] flex flex-col items-center pt-16 px-4">
      {/* Facebook logo */}
      <div className="text-[#1877F2] text-[60px] font-bold leading-none tracking-tight" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
        facebook
      </div>

      <div className="mt-5 w-full max-w-[396px] bg-white rounded-lg shadow-md p-4">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address or phone number"
          autoFocus
          className="w-full h-[52px] border border-neutral-300 rounded-md px-4 text-[17px] outline-none focus:border-[#1877F2] focus:ring-1 focus:ring-[#1877F2]"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mt-3 w-full h-[52px] border border-neutral-300 rounded-md px-4 text-[17px] outline-none focus:border-[#1877F2] focus:ring-1 focus:ring-[#1877F2]"
        />
        <button className="mt-3 w-full h-12 rounded-md bg-[#1877F2] text-white text-[20px] font-bold hover:bg-[#166fe5]">
          Log in
        </button>
        <div className="mt-4 text-center">
          <Link to="/" className="text-[14px] text-[#1877F2] hover:underline">
            Forgotten password?
          </Link>
        </div>
        <div className="my-5 border-t border-neutral-200" />
        <div className="flex justify-center">
          <button className="h-12 px-4 rounded-md bg-[#42b72a] text-white text-[17px] font-bold hover:bg-[#36a420]">
            Create new account
          </button>
        </div>
      </div>

      <p className="mt-7 text-[14px] text-neutral-900 text-center">
        <Link to="/" className="font-semibold hover:underline">
          Create a Page
        </Link>{" "}
        for a celebrity, brand or business.
      </p>
    </div>
  );
}
