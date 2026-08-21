"use client";

import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSupabase } from "@/lib/supabase";

/**
 * Newsletter capture.
 *
 * Four states are handled explicitly: idle, loading, success, error. Skipping
 * loading and error states is the single most common way a form feels broken:
 * the user taps, nothing visibly happens, so they tap again and you get
 * duplicate rows.
 */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Cheap client-side sanity check. The database still enforces its own
    // constraints; never trust the client as your only validation layer.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    const supabase = getSupabase();
    if (!supabase) {
      setStatus("error");
      setError("Signup isn't connected yet. Add your Supabase keys to .env.local.");
      return;
    }

    setStatus("loading");

    const { error: dbError } = await supabase
      .from("subscribers")
      .insert({ email: email.trim().toLowerCase(), source: "website" });

    if (dbError) {
      // 23505 is the Postgres unique-violation code. A duplicate signup is not
      // really a failure from the visitor's point of view, so we treat it as success.
      if (dbError.code === "23505") {
        setStatus("success");
        return;
      }
      setStatus("error");
      setError("Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setEmail("");
  }

  return (
    <section className="bg-ink py-24 text-cream sm:py-32">
      <div className="container max-w-2xl text-center">
        <p className="eyebrow text-gold">Stay in the World</p>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
          New episodes, first looks, and Selah's next question.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-cream/75">
          Join the family list. No spam, just new stories as they arrive.
        </p>

        {status === "success" ? (
          <div
            role="status"
            className="mt-10 flex items-center justify-center gap-3 rounded-xl border border-gold/40 bg-gold/10 px-6 py-5 text-lg font-semibold text-gold"
          >
            <Check className="h-5 w-5" aria-hidden="true" />
            You&apos;re on the list. Welcome to the adventure.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10" noValidate>
            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Label is visually hidden but present for screen readers. */}
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={status === "error"}
                aria-describedby={status === "error" ? "newsletter-error" : undefined}
                className={`min-h-[52px] flex-1 rounded-xl border bg-cream/5 px-5 text-base text-cream placeholder:text-cream/40 transition-colors focus:bg-cream/10 ${
                  status === "error" ? "border-red-400" : "border-cream/25"
                }`}
              />
              <Button type="submit" size="lg" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Joining
                  </>
                ) : (
                  "Join the List"
                )}
              </Button>
            </div>

            {status === "error" && (
              <p id="newsletter-error" role="alert" className="mt-3 text-left text-base text-red-400">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
