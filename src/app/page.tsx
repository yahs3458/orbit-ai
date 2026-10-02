import type { CSSProperties } from "react";
import Waitlist from "./Waitlist";

const FEED = [
  { t: "09:02", text: "Found 14 accounts matching your ICP in regional logistics", tag: "Prospect" },
  { t: "09:03", text: "Ridgeline Freight — new VP of Ops, hiring six dispatchers", tag: "Signal" },
  { t: "09:04", text: "Drafted a first email to Dana Whitfield, VP Operations", tag: "Write" },
  { t: "09:06", text: "Approved by Sam · sent from sam@yourco.com", tag: "Sent" },
  { t: "11:41", text: "Dana replied: “Thursday afternoon works.”", tag: "Reply" },
  { t: "11:41", text: "Meeting booked · Thu 2:00 PM · invite sent", tag: "Booked" },
];

const STEPS = [
  { n: "01", title: "Connect your stack", body: "Plug in your CRM, inbox and calendar. Orbit reads your past deals to learn who buys and why." },
  { n: "02", title: "Describe your buyer", body: "Tell Orbit your ideal customer in plain English. It turns that into a living list of accounts and signals." },
  { n: "03", title: "Approve and launch", body: "Review the first emails, tweak the tone, hit go. Orbit handles follow-ups and books into your calendar." },
];

const TOOLS = ["HubSpot", "Salesforce", "Pipedrive", "Gmail", "Outlook", "Slack", "LinkedIn", "Calendly", "Google Calendar", "Zoom"];

const FAQ = [
  { q: "When can my team start?", a: "We’re onboarding teams in waves through the private beta. Your place on the waitlist decides when your wave opens." },
  { q: "Does Orbit send emails without asking?", a: "Only if you let it. By default, every first touch waits for a rep to approve it. You can loosen that per campaign once you trust the drafts." },
  { q: "Which CRMs does it work with?", a: "HubSpot, Salesforce and Pipedrive at launch. Orbit writes every touch back to the contact record, so your reporting stays clean." },
  { q: "Will the emails sound like a robot?", a: "Orbit learns from your best-performing emails and your rep’s own voice. No “I hope this finds you well.”" },
  { q: "What does it cost?", a: "Free during the beta. We’ll share pricing with waitlist teams before the beta ends — no surprise invoices." },
];

const h2 = "text-[clamp(2.1rem,3vw+1rem,3.5rem)] leading-[1.05] font-semibold tracking-[-0.035em]";
const eyebrow = "font-mono text-xs tracking-[0.2em] text-accent uppercase";

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="16" r="5" fill="currentColor" />
      <ellipse cx="16" cy="16" rx="14" ry="6" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(-25 16 16)" />
    </svg>
  );
}

/* Hand-built SVG: a core with leads riding three rings at different speeds */
function OrbitVisual() {
  const ring = (r: number, dur: string, dots: number[], rev = false) => (
    <g className={`orbit ${rev ? "orbit-rev" : ""}`} style={{ "--dur": dur } as CSSProperties}>
      <circle cx="300" cy="300" r={r} fill="none" stroke="var(--color-muted)" strokeOpacity="0.45" strokeDasharray="2 6" />
      {dots.map((deg) => (
        <circle
          key={deg}
          cx={300 + r * Math.cos((deg * Math.PI) / 180)}
          cy={300 + r * Math.sin((deg * Math.PI) / 180)}
          r={deg % 2 ? 4 : 6}
          fill={deg % 3 ? "var(--color-ink)" : "var(--color-accent)"}
        />
      ))}
    </g>
  );

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <svg viewBox="0 0 600 600" className="h-full w-full" role="img" aria-label="Leads orbiting the Orbit AI core">
        {ring(270, "70s", [20, 141, 250])}
        {ring(200, "48s", [75, 190, 305], true)}
        {ring(130, "30s", [0, 160])}
        <circle cx="300" cy="300" r="70" fill="var(--color-accent-dim)" className="pulse" />
        <circle cx="300" cy="300" r="44" fill="var(--color-accent)" />
        <text x="300" y="305" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="15" fill="var(--color-paper)">
          ORBIT
        </text>
      </svg>
      {/* stationary chips: what the agent is doing right now */}
      {[
        ["top-[12%] left-[2%]", "Lead researched"],
        ["top-[46%] -right-[2%] sm:right-0", "Email drafted"],
        ["bottom-[10%] left-[14%]", "Meeting booked"],
      ].map(([pos, label], i) => (
        <span
          key={label}
          className={`rise absolute ${pos} flex items-center gap-2 rounded-full border border-rule bg-paper-2/90 px-3 py-1.5 font-mono text-xs whitespace-nowrap backdrop-blur`}
          style={{ animationDelay: `${600 + i * 250}ms` }}
        >
          <span className="size-1.5 rounded-full bg-accent" aria-hidden />
          {label}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* N5 floating pill nav */}
      <header className="fixed inset-x-0 top-4 z-20 px-4">
        <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-full border border-rule bg-paper-2/75 py-2 pr-2 pl-5 backdrop-blur-md">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight whitespace-nowrap">
            <Logo className="size-6 text-accent" />
            Orbit AI
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted md:flex">
            <a href="#product" className="transition-colors hover:text-ink">Product</a>
            <a href="#how" className="transition-colors hover:text-ink">How it works</a>
            <a href="#faq" className="transition-colors hover:text-ink">FAQ</a>
          </div>
          <a
            href="#join"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium whitespace-nowrap text-paper transition-colors duration-200 hover:bg-accent"
          >
            Join waitlist
          </a>
        </nav>
      </header>

      <main>
        {/* Marquee hero */}
        <section className="space relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-36 pb-20 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:pt-44 lg:pb-28">
            <div>
              <p className="rise inline-flex items-center gap-2 rounded-full border border-rule bg-paper-2/80 px-3 py-1 font-mono text-xs text-muted">
                <span className="pulse size-1.5 rounded-full bg-accent" aria-hidden />
                Private beta · invites in waves
              </p>
              <h1
                className="rise mt-6 text-[clamp(3rem,6vw+0.5rem,5.25rem)] leading-[0.98] font-semibold tracking-[-0.045em] [overflow-wrap:anywhere]"
                style={{ animationDelay: "100ms" }}
              >
                Your pipeline, on <span className="text-accent">autopilot.</span>
              </h1>
              <p className="rise mt-6 max-w-lg text-lg leading-relaxed text-muted" style={{ animationDelay: "200ms" }}>
                Orbit is an AI sales agent that researches leads, writes the first email, follows up
                and books the meeting — while your reps do the part only humans can: close.
              </p>
              <div className="rise mt-9" style={{ animationDelay: "300ms" }}>
                <Waitlist id="email-hero" />
                <p className="mt-3 text-sm text-muted">Free during beta. No credit card, no spam.</p>
              </div>
            </div>
            <OrbitVisual />
          </div>
        </section>

        {/* live agent feed — the product, shown working */}
        <section id="product" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-10 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-20">
            <div className="reveal">
              <p className={eyebrow}>Watch it work</p>
              <h2 className={`mt-4 ${h2}`}>A morning of prospecting, done before standup.</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Orbit works your territory around the clock — and logs every step, so you always know
                what it did and why.
              </p>
            </div>
            <div className="reveal rounded-2xl border border-rule bg-paper-2 p-2">
              <div className="flex items-center justify-between border-b border-rule px-4 py-3 font-mono text-xs text-muted">
                <span>orbit · agent session</span>
                <span className="flex items-center gap-2 text-accent">
                  <span className="pulse size-1.5 rounded-full bg-accent" aria-hidden />
                  live
                </span>
              </div>
              <ol className="divide-y divide-rule/70">
                {FEED.map((line, i) => (
                  <li
                    key={i}
                    className="arrive grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-2 px-4 py-4 sm:grid-cols-[auto_minmax(0,1fr)_auto]"
                    style={{ "--i": i } as CSSProperties}
                  >
                    <span className="pt-0.5 font-mono text-xs text-muted tabular-nums">{line.t}</span>
                    <span className="text-[0.95rem]">{line.text}</span>
                    <span
                      className={`col-start-2 justify-self-start rounded-full px-2.5 py-0.5 font-mono text-[0.7rem] sm:col-start-auto ${
                        line.tag === "Booked" ? "bg-accent text-paper" : "bg-paper-3 text-muted"
                      }`}
                    >
                      {line.tag}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* features — asymmetric bento, each tile shows its own mini-UI */}
        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-10 md:pb-32">
          <h2 className={`reveal mb-12 max-w-2xl ${h2}`}>Four jobs your reps stop doing by hand.</h2>
          <div className="grid gap-4 md:grid-cols-6">
            <article className="reveal rounded-2xl border border-rule bg-paper-2 p-7 md:col-span-4">
              <p className={eyebrow}>Prospect</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Finds the accounts worth your time</h3>
              <p className="mt-3 max-w-md text-muted">
                Orbit watches hiring, funding, tech changes and leadership moves, then ranks who&rsquo;s
                most likely to buy this quarter.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
                {["Hiring SDRs", "New VP Sales", "Raised Series A", "Switched CRM", "Opened 2nd office"].map((s) => (
                  <span key={s} className="rounded-full border border-rule px-3 py-1.5 text-muted">
                    {s}
                  </span>
                ))}
              </div>
            </article>
            <article className="reveal rounded-2xl border border-rule bg-paper-2 p-7 md:col-span-2">
              <p className={eyebrow}>Write</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">First emails that sound like you</h3>
              <p className="mt-5 rounded-xl bg-paper-3 p-4 text-sm leading-relaxed text-muted">
                &ldquo;Hi Dana — saw Ridgeline is hiring six dispatchers. Teams your size usually hit
                scheduling chaos around then…&rdquo;
              </p>
            </article>
            <article className="reveal rounded-2xl border border-rule bg-paper-2 p-7 md:col-span-2">
              <p className={eyebrow}>Follow up</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Never lets a thread go cold</h3>
              <ol className="mt-6 space-y-3 font-mono text-xs text-muted">
                {["Day 1 · First touch", "Day 4 · Value nudge", "Day 9 · Breakup note"].map((d, i) => (
                  <li key={d} className="flex items-center gap-3">
                    <span className={`size-2 rounded-full ${i === 0 ? "bg-accent" : "bg-rule"}`} aria-hidden />
                    {d}
                  </li>
                ))}
              </ol>
            </article>
            <article className="reveal rounded-2xl border border-rule bg-paper-2 p-7 md:col-span-4">
              <p className={eyebrow}>Book</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Turns “sounds good” into a calendar invite</h3>
              <p className="mt-3 max-w-md text-muted">
                When a prospect says yes, Orbit finds a slot that works for both sides and sends the
                invite — no back-and-forth.
              </p>
              <div className="mt-6 grid max-w-md grid-cols-5 gap-2 text-center font-mono text-xs">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
                  <div
                    key={d}
                    className={`rounded-lg border py-3 ${
                      d === "Thu" ? "border-accent bg-accent-dim text-ink" : "border-rule text-muted"
                    }`}
                  >
                    {d}
                    {d === "Thu" && <span className="mt-1 block text-accent">2:00</span>}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="how" className="scroll-mt-24 border-y border-rule bg-paper-2">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-10 md:py-32">
            <h2 className={`reveal max-w-2xl ${h2}`}>Live in an afternoon.</h2>
            <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {STEPS.map((s) => (
                <li key={s.n} className="reveal border-t border-rule pt-6">
                  <span className="font-mono text-sm text-accent">{s.n}</span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* integrations ticker */}
        <section aria-label="Integrations" className="py-20">
          <p className="mb-8 text-center text-sm text-muted">Works with the tools your team already lives in</p>
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <ul className="marquee flex w-max gap-4">
              {[...TOOLS, ...TOOLS].map((t, i) => (
                <li
                  key={i}
                  aria-hidden={i >= TOOLS.length || undefined}
                  className="rounded-full border border-rule px-5 py-2.5 font-mono text-sm whitespace-nowrap text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-24 sm:px-10 md:py-32">
          <h2 className={`reveal ${h2}`}>Questions, answered.</h2>
          <div className="mt-12 border-t border-rule">
            {FAQ.map((f) => (
              <details key={f.q} className="reveal group border-b border-rule">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-lg font-medium transition-colors hover:text-accent">
                  {f.q}
                  <span className="plus text-2xl leading-none text-accent transition-transform duration-200" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* final CTA */}
        <section id="join" className="space scroll-mt-24 border-t border-rule">
          <div className="reveal mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-28 sm:px-10 md:py-36">
            <h2 className="max-w-3xl text-[clamp(2.5rem,5vw+1rem,4.5rem)] leading-[1.02] font-semibold tracking-[-0.04em]">
              Let Orbit work the pipeline. <span className="text-accent">You close.</span>
            </h2>
            <Waitlist id="email-final" />
          </div>
        </section>
      </main>

      {/* Ft5 statement footer */}
      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:px-10">
          <p className="flex items-center gap-4 text-[clamp(3.5rem,12vw,9rem)] leading-none font-semibold tracking-[-0.06em]">
            <Logo className="size-[0.7em] text-accent" />
            orbit
          </p>
          <div className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>Concept product — Orbit AI is fictional, built as a design demo.</p>
            <div className="flex gap-6">
              <a href="#faq" className="hover:text-ink">FAQ</a>
              <a href="#join" className="hover:text-ink">Waitlist</a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-ink">X / Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
