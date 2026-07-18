import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Calendar, Clock, MapPin, Phone, Mail, Users } from "lucide-react";
import { Layout } from "@/components/Layout";

const occasions = ["Just dinner", "Anniversary", "Birthday", "Business", "Tasting menu"];
const partySizes = ["1", "2", "3", "4", "5", "6", "7", "8+"];
const times = ["07:30", "09:00", "11:00", "12:30", "14:00", "18:00", "19:30", "21:00"];

const Reservations = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    date: "", time: "19:30", party: "2",
    occasion: "Just dinner", notes: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date) {
      toast.error("Please add your name, email, and date.");
      return;
    }
    toast.success("Reservation request received", {
      description: `We'll confirm ${form.party} guests on ${form.date} at ${form.time} within 24 hours.`,
    });
    setForm({ ...form, notes: "" });
  };

  const input =
    "w-full h-12 px-4 bg-transparent border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors";

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 text-center">
        <div className="container-full">
          <span className="eyebrow justify-center"><span className="hairline" /> Reservations</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05]">
            Hold a seat by the <span className="italic text-primary">fire.</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            We seat guests in two intimate services each evening. Tell us a little about your visit and we'll write back within a day.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-full grid md:grid-cols-5 gap-10 md:gap-16">
          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3 border border-border p-8 md:p-12 bg-card"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block md:col-span-2">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary">Full name</span>
                <input className={`${input} mt-2`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary">Email</span>
                <input type="email" className={`${input} mt-2`} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
              </label>
              <label className="block">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary">Phone</span>
                <input className={`${input} mt-2`} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Optional" />
              </label>

              <label className="block">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary flex items-center gap-2"><Calendar className="w-3 h-3" /> Date</span>
                <input type="date" className={`${input} mt-2`} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </label>
              <label className="block">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary flex items-center gap-2"><Clock className="w-3 h-3" /> Time</span>
                <select className={`${input} mt-2`} value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}>
                  {times.map((t) => <option key={t} className="bg-background">{t}</option>)}
                </select>
              </label>

              <label className="block">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary flex items-center gap-2"><Users className="w-3 h-3" /> Party size</span>
                <select className={`${input} mt-2`} value={form.party} onChange={(e) => setForm({ ...form, party: e.target.value })}>
                  {partySizes.map((p) => <option key={p} className="bg-background">{p}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary">Occasion</span>
                <select className={`${input} mt-2`} value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })}>
                  {occasions.map((o) => <option key={o} className="bg-background">{o}</option>)}
                </select>
              </label>

              <label className="block md:col-span-2">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary">Notes for the kitchen</span>
                <textarea rows={4} className={`${input} mt-2 h-auto py-3`} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Dietary requests, allergies, celebrations…" />
              </label>
            </div>

            <button type="submit" className="btn-gold mt-8 w-full">
              Request Reservation
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              We hold each request for 24 hours and confirm by email.
            </p>
          </motion.form>

          {/* Info */}
          <aside className="md:col-span-2 space-y-8">
            <div className="border border-border p-8 bg-card">
              <h3 className="font-serif text-2xl">Visit</h3>
              <div className="mt-6 space-y-4 text-sm">
                <p className="flex gap-3 text-muted-foreground"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 42 Lantern Row<br />Textile Quarter</p>
                <p className="flex gap-3 text-muted-foreground"><Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" /> +1 (555) 010-1000</p>
                <p className="flex gap-3 text-muted-foreground"><Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" /> hello@noirandember.co</p>
              </div>
            </div>

            <div className="border border-border p-8 bg-card">
              <h3 className="font-serif text-2xl">Hours</h3>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  ["Tue — Fri", "7:30 — 23:00"],
                  ["Saturday", "9:00 — 23:00"],
                  ["Sunday", "9:00 — 21:00"],
                  ["Monday", "Closed"],
                ].map(([d, h]) => (
                  <li key={d} className="flex justify-between text-muted-foreground">
                    <span className="text-foreground/80">{d}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-primary/40 p-8 bg-primary/5">
              <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-primary">Private events</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                The full room is available for private buyouts Sunday and Monday evenings. Write to us at{" "}
                <a href="mailto:events@noirandember.co" className="text-primary link-underline">events@noirandember.co</a>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Reservations;
