import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — EVOLONWEAR" },
      { name: "description", content: "Get in touch with the Evolonwear team. We usually reply within 24 hours." },
      { property: "og:title", content: "Contact — EVOLONWEAR" },
      { property: "og:description", content: "Get in touch with the Evolonwear team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-ivory pt-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-20 md:grid-cols-2 md:px-12">
        <div data-reveal>
          <span className="font-display text-2xl text-charcoal" style={{ letterSpacing: "6px" }}>EVOLON</span>
          <h1 className="font-serif-i mt-8 text-6xl leading-tight text-charcoal md:text-7xl">Let's talk.</h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-warm-gray">
            Questions about a piece, an order, or a collab — we'd love to hear from you. We usually reply within 24 hours.
          </p>
          <div className="mt-12 space-y-6 border-t border-charcoal/10 pt-10">
            <div>
              <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>Email</p>
              <a href="mailto:hello@evolonwear.com" className="font-serif-i mt-2 block text-2xl text-charcoal hover:text-gold">hello@evolonwear.com</a>
            </div>
            <div>
              <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>Studio</p>
              <p className="mt-2 text-base text-charcoal">Indiranagar, Bengaluru, India</p>
            </div>
            <div className="flex items-center gap-5 pt-4">
              <a href="#" aria-label="Instagram" className="text-charcoal hover:text-gold"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-[10px] uppercase text-charcoal hover:text-gold" style={{ letterSpacing: "3px" }}>WhatsApp</a>
              <a href="#" className="text-[10px] uppercase text-charcoal hover:text-gold" style={{ letterSpacing: "3px" }}>Pinterest</a>
            </div>
          </div>
        </div>

        <form
          data-reveal
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="border border-charcoal/10 bg-ivory-dark p-8 md:p-12"
        >
          {sent ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold">
                <Check className="h-8 w-8 text-charcoal" />
              </div>
              <h2 className="font-serif-i mt-6 text-3xl text-charcoal">Message sent.</h2>
              <p className="mt-3 text-sm text-warm-gray">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <>
              <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>Send a Message</p>
              <h2 className="font-display mt-2 text-3xl text-charcoal">GET IN TOUCH</h2>
              <div className="mt-8 space-y-5">
                <Field label="Name"><input required className="input" placeholder="Your name" /></Field>
                <Field label="Email"><input required type="email" className="input" placeholder="you@example.com" /></Field>
                <Field label="Subject">
                  <select className="input" defaultValue="">
                    <option value="" disabled>Select a subject</option>
                    <option>Order</option>
                    <option>Returns</option>
                    <option>Collaboration</option>
                    <option>General</option>
                  </select>
                </Field>
                <Field label="Message"><textarea required rows={5} className="input resize-none" placeholder="How can we help?" /></Field>
                <button
                  type="submit"
                  className="btn-gold-sweep mt-4 inline-flex w-full items-center justify-center gap-3 bg-charcoal py-4 text-[10px] uppercase text-ivory hover:text-charcoal"
                  style={{ letterSpacing: "3px" }}
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </div>
            </>
          )}
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgba(26,26,24,.15);
          padding: 12px 0;
          font-family: var(--font-sans);
          color: var(--charcoal);
          outline: none;
          transition: border-color .3s;
        }
        .input:focus { border-bottom-color: var(--gold); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase text-warm-gray" style={{ letterSpacing: "3px" }}>{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}