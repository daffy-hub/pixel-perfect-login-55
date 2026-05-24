import { createFileRoute, Link } from "@tanstack/react-router";
import { X, HelpCircle, User } from "lucide-react";

export const Route = createFileRoute("/")({
  component: LoginOptionsPage,
  head: () => ({
    meta: [
      { title: "Log in to TikTok" },
      { name: "description", content: "Log in to TikTok" },
    ],
  }),
});

function LoginOptionsPage() {
  return (
    <div className="min-h-screen w-full bg-white flex justify-center">
      <div className="w-full max-w-md flex flex-col bg-white relative pb-32">
        {/* Header */}
        <header className="flex items-center justify-between px-5 pt-4 pb-2">
          <button aria-label="Close" className="p-1 -ml-1 text-neutral-900 active:opacity-60">
            <X className="w-7 h-7" strokeWidth={2} />
          </button>
          <button
            aria-label="Help"
            className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 active:opacity-60"
          >
            <HelpCircle className="w-[18px] h-[18px]" strokeWidth={2} />
          </button>
        </header>

        {/* Title */}
        <div className="px-6 pt-6 text-center">
          <h1 className="text-[26px] font-bold text-neutral-900">Log in to TikTok</h1>
          <p className="mt-4 text-[15px] text-neutral-500 leading-snug">
            Manage your account, check notifications,
            <br />
            comment on videos and more.
          </p>
        </div>

        {/* Options */}
        <div className="px-5 mt-8 space-y-3">
          <Link
            to="/login/phone"
            className="flex items-center h-14 rounded-md border border-neutral-200 px-4 active:bg-neutral-50"
          >
            <User className="w-5 h-5 text-neutral-900" strokeWidth={2.25} />
            <span className="flex-1 text-center text-[15px] font-semibold text-neutral-900 -ml-5">
              Use phone / email / username
            </span>
          </Link>

          <Link
            to="/login/facebook"
            className="flex items-center h-14 rounded-md border border-neutral-200 px-4 active:bg-neutral-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
            </svg>
            <span className="flex-1 text-center text-[15px] font-semibold text-neutral-900 -ml-5">
              Continue with Facebook
            </span>
          </Link>

          <Link
            to="/login/google"
            className="flex items-center h-14 rounded-md border border-neutral-200 px-4 active:bg-neutral-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
              <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
            </svg>
            <span className="flex-1 text-center text-[15px] font-semibold text-neutral-900 -ml-5">
              Continue with Google
            </span>
          </Link>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0">
          <p className="px-8 text-center text-[12px] text-neutral-400 leading-relaxed pb-4">
            By continuing, you agree to TikTok's{" "}
            <span className="text-neutral-700 font-semibold">Terms of Service</span> and confirm
            that you have read TikTok's{" "}
            <span className="text-neutral-700 font-semibold">Privacy Policy</span>.
          </p>
          <div className="bg-neutral-50 py-4 text-center text-[14px]">
            <span className="text-neutral-700">Don't have an account? </span>
            <span style={{ color: "#FE2C55" }} className="font-semibold">
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
