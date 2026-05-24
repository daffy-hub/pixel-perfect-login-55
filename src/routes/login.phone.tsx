import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, HelpCircle, ChevronDown, X } from "lucide-react";

export const Route = createFileRoute("/login/phone")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Log in" },
      { name: "description", content: "Log in to your account" },
    ],
  }),
});

type Tab = "phone" | "email";

function LoginPage() {
  const [tab, setTab] = useState<Tab>("phone");
  const [phone, setPhone] = useState("9");
  const [emailValue, setEmailValue] = useState("");
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (tab === "phone") phoneRef.current?.focus();
    else emailRef.current?.focus();
  }, [tab]);

  return (
    <div className="min-h-screen w-full bg-white flex justify-center">
      <div className="w-full max-w-md flex flex-col bg-white">
        {/* Header */}
        <header className="relative flex items-center justify-between px-4 h-14">
          <Link
            to="/"
            aria-label="Back"
            className="p-1 -ml-1 text-neutral-900 active:opacity-60"
          >
            <ChevronLeft className="w-7 h-7" strokeWidth={2.25} />
          </Link>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-[17px] font-semibold text-neutral-900">
            Log in
          </h1>
          <button
            aria-label="Help"
            className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 active:opacity-60"
          >
            <HelpCircle className="w-[18px] h-[18px]" strokeWidth={2} />
          </button>
        </header>

        {/* Tabs */}
        <div className="relative flex border-b border-neutral-200">
          {(
            [
              { id: "phone", label: "Phone" },
              { id: "email", label: "Email / Username" },
            ] as { id: Tab; label: string }[]
          ).map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className="flex-1 py-4 text-[15px] font-semibold relative transition-colors"
                style={{ color: active ? "#161823" : "#8a8b91" }}
              >
                {t.label}
                {active && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1px] h-[3px] w-16 bg-black rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Form */}
        <div className="px-5 pt-8">
          {tab === "phone" ? (
            <div className="flex items-center border-b border-neutral-200 py-3">
              <button
                type="button"
                className="flex items-center gap-1 pr-3 text-[16px] font-semibold text-neutral-900 active:opacity-60"
              >
                <span>ET +251</span>
                <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
              </button>
              <span className="h-5 w-px bg-neutral-300" />
              <input
                ref={phoneRef}
                type="tel"
                inputMode="numeric"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                className="flex-1 pl-3 pr-2 text-[16px] text-neutral-900 placeholder-neutral-400 bg-transparent outline-none"
                placeholder="Phone number"
              />
              {phone && (
                <button
                  type="button"
                  onClick={() => {
                    setPhone("");
                    phoneRef.current?.focus();
                  }}
                  aria-label="Clear"
                  className="w-[18px] h-[18px] rounded-full bg-neutral-300 flex items-center justify-center text-white"
                >
                  <X className="w-3 h-3" strokeWidth={3} />
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center border-b border-neutral-200 py-3">
              <input
                ref={emailRef}
                type="text"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="Email or username"
                className="flex-1 pr-2 text-[16px] text-neutral-900 placeholder-neutral-400 bg-transparent outline-none"
              />
              {emailValue && (
                <button
                  type="button"
                  onClick={() => {
                    setEmailValue("");
                    emailRef.current?.focus();
                  }}
                  aria-label="Clear"
                  className="w-[18px] h-[18px] rounded-full bg-neutral-300 flex items-center justify-center text-white"
                >
                  <X className="w-3 h-3" strokeWidth={3} />
                </button>
              )}
            </div>
          )}

          <button
            type="button"
            className="mt-10 w-full h-12 rounded-md text-white text-[16px] font-bold active:opacity-90 transition-opacity"
            style={{ backgroundColor: "#FE2C55" }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
