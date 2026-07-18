import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Utensils } from "lucide-react";
import { Layout } from "@/components/Layout";

const heroImg =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80";
const dishImg =
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80";
const coffeeImg =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80";
const roomImg =
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80";

const signatures = [
  {
    name: "Ember Espresso",
    detail: "Ethiopian Yirgacheffe, stone fruit, dark cocoa.",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Butter-Poached Lobster",
    detail: "Saffron beurre blanc, sea vegetables.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Basque Cheesecake",
    detail: "Burnt top, silken center, aged sherry caramel.",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Candlelit dining room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          <div className="absolute inset-0 grain" />
        </div>

        <div className="relative container-full py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <span className="eyebrow">
              <span className="hairline" /> EST. 2023 · TEXTILE QUARTER
            </span>
            <h1 className="mt-8 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              A quiet fire,<br />
              <span className="italic text-primary">slowly tended.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              A premium cafe by day, a candlelit tasting room by night. Single-origin
              coffee, seasonal menus, and an unhurried welcome.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/reservations" className="btn-gold">
                Reserve a Table <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/menu" className="btn-outline-gold">
                View the Menu
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 inset-x-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground"
          >
            Scroll
          </motion.div>
        </div>
      </section>

      {/* HOURS BAR */}
      <section className="border-y border-border/60 bg-noir">
        <div className="container-full py-8 grid gap-6 md:grid-cols-3 md:gap-0 text-sm">
          {[
            { Icon: Clock, label: "Hours", value: "Tue — Sun · 7:30 — 23:00" },
            { Icon: MapPin, label: "Where", value: "42 Lantern Row, Textile Quarter" },
            { Icon: Utensils, label: "Tasting Menu", value: "Seven courses · from $145" },
          ].map(({ Icon, label, value }, idx) => (
            <div
              key={label}
              className={`flex items-center gap-4 md:px-8 ${
                idx > 0 ? "md:border-l md:border-border/60" : ""
              }`}
            >
              <Icon className="w-4 h-4 text-primary shrink-0" />
              <div>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                  {label}
                </p>
                <p className="mt-1 text-foreground/80">{value}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* PHILOSOPHY / STORY */}
      <section className="py-24 md:py-36">
        <div className="container-full grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <span className="eyebrow"><span className="hairline" /> Our Craft</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Fire, patience,<br />and <span className="italic text-primary">good beans.</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              We roast our coffee in-house every Tuesday, ferment our own sodas,
              and cook over live embers in a room built for lingering.
              Everything here is made to be tasted twice — first with the eye,
              then with the tongue.
            </p>
            <Link to="/about" className="mt-10 inline-flex items-center gap-3 text-xs font-medium tracking-[0.3em] uppercase text-primary link-underline">
              Read our story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            <div className="image-reveal aspect-[3/4] mt-12">
              <img src={coffeeImg} alt="Slow pour coffee" className="w-full h-full object-cover" />
            </div>
            <div className="image-reveal aspect-[3/4]">
              <img src={roomImg} alt="Candlelit dining room" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURES */}
      <section className="py-24 md:py-32 bg-noir border-y border-border/60">
        <div className="container-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="eyebrow"><span className="hairline" /> Signatures</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Three things<br />worth <span className="italic text-primary">a visit.</span>
              </h2>
            </div>
            <Link to="/menu" className="text-xs font-medium tracking-[0.3em] uppercase text-primary link-underline inline-flex items-center gap-3">
              Explore the full menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {signatures.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group"
              >
                <div className="image-reveal aspect-[4/5] mb-6 border border-border/40">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-primary/70">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-serif text-2xl md:text-3xl group-hover:text-primary transition-colors">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHEF QUOTE */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img src={dishImg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/30" />
        </div>
        <div className="relative container-narrow text-center">
          <span className="text-primary text-5xl font-serif leading-none">"</span>
          <blockquote className="mt-4 font-serif text-3xl md:text-5xl leading-[1.15] tracking-tight italic">
            We are not in the business of speed. We are in the business of <span className="text-primary not-italic">memory.</span>
          </blockquote>
          <div className="mt-10 divider-ornament">
            <span className="text-[10px] font-semibold tracking-[0.4em] uppercase">
              Léa Marchetti · Chef & Founder
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-noir">
        <div className="container-narrow text-center">
          <span className="eyebrow justify-center"><span className="hairline" /> Reserve</span>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            A table by candlelight,<br />
            <span className="italic text-primary">held for you.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            Seatings are intimate — we recommend reserving at least three days in advance for the tasting menu.
          </p>
          <div className="mt-10">
            <Link to="/reservations" className="btn-gold">
              Book a Table <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
