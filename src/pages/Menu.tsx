import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { menuSections } from "@/data/menu";
import { cn } from "@/lib/utils";

const tagStyle: Record<string, string> = {
  signature: "text-primary",
  vegan: "text-emerald-400/80",
  new: "text-rose-300/80",
};

const Menu = () => {
  const [active, setActive] = useState(menuSections[0].id);
  const current = menuSections.find((s) => s.id === active)!;

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 border-b border-border/60">
        <div className="container-full text-center">
          <span className="eyebrow justify-center"><span className="hairline" /> The Menu</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05]">
            Cooked over <span className="italic text-primary">embers,</span><br />
            poured with intent.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Menus evolve weekly with what our farmers, foragers, and roasters bring us. Dietary requests always welcome.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-20 md:top-24 z-40 bg-background/90 backdrop-blur-xl border-b border-border/60">
        <div className="container-full">
          <div className="flex overflow-x-auto py-5 scrollbar-none">
            {menuSections.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={cn(
                  "relative shrink-0 px-5 md:px-7 py-2 text-[11px] font-medium tracking-[0.3em] uppercase transition-colors duration-300",
                  idx > 0 && "border-l border-border/60",
                  active === s.id
                    ? "text-primary"
                    : "text-foreground/50 hover:text-foreground"
                )}
              >
                {s.title}
                <span
                  className={cn(
                    "pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-px bg-primary transition-all duration-300",
                    active === s.id ? "w-8 opacity-100" : "w-0 opacity-0"
                  )}
                />
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Section body */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="text-center mb-14">
                <h2 className="font-serif text-4xl md:text-5xl italic text-primary">
                  {current.title}
                </h2>
                <p className="mt-4 text-sm md:text-base text-muted-foreground">
                  {current.subtitle}
                </p>
                <div className="mt-8 mx-auto hairline" />
              </div>

              <ul className="divide-y divide-border/50">
                {current.items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="py-6 md:py-8"
                  >
                    <div className="menu-leader">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl">
                          {item.name}
                          {item.tag && (
                            <span className={cn(
                              "ml-3 align-middle text-[9px] font-semibold tracking-[0.3em] uppercase",
                              tagStyle[item.tag]
                            )}>
                              · {item.tag}
                            </span>
                          )}
                        </h3>
                      </div>
                      <div className="leader" />
                      <div className="font-serif text-lg md:text-xl text-primary tabular-nums whitespace-nowrap">
                        {item.price}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <p className="mt-16 text-center text-xs text-muted-foreground italic">
            A 5% service charge is added to all bills and shared equally among our team.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
