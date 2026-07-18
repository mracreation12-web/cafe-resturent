import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";

const heroImg = "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1800&q=80";
const chefImg = "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=1200&q=80";
const grainImg = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80";
const roomImg = "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80";

const values = [
  { title: "Slow by design", body: "Everything here takes the time it takes — 48-hour doughs, 21-day dry-aged duck, six-minute pour-overs." },
  { title: "Sourced with names", body: "We buy from growers and roasters we can call by first name. Provenance is on every plate." },
  { title: "One room, one welcome", body: "A single 28-seat room. Same warmth whether you're here for espresso or the tasting menu." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70svh] flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="relative container-full pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="eyebrow"><span className="hairline" /> Our Story</span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
              Built around a single<br />
              <span className="italic text-primary">wood-fired hearth.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="container-narrow grid md:grid-cols-5 gap-12 items-start">
          <p className="md:col-span-2 font-serif text-2xl md:text-3xl italic text-primary leading-snug">
            Noir & Ember opened in the winter of 2019, in a former textile workshop lit only by candles and one glowing hearth.
          </p>
          <div className="md:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Founders Léa Marchetti and Ilias Renn met over coffee in Trieste and spent five years working in kitchens and roasteries across Europe before opening the doors. They wanted a place that felt like a private dinner among old friends, whether the door opened at eight in the morning for espresso or eight at night for the tasting menu.
            </p>
            <p>
              Today the room still seats twenty-eight. The kitchen still cooks over embers. The coffee is still roasted on Tuesdays. Nothing has grown — only deepened.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-noir border-y border-border/60">
        <div className="container-full">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-primary">0{i + 1}</p>
                <h3 className="mt-4 font-serif text-3xl md:text-4xl">{v.title}</h3>
                <div className="mt-6 hairline" />
                <p className="mt-6 text-muted-foreground leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef feature */}
      <section className="py-24 md:py-36">
        <div className="container-full grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 image-reveal aspect-[4/5]">
            <img src={chefImg} alt="Chef Léa Marchetti" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-6 md:pl-8">
            <span className="eyebrow"><span className="hairline" /> Chef & Founder</span>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
              Léa <span className="italic text-primary">Marchetti</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              Trained in Paris and Copenhagen, Léa cooks with the discipline of the classics and the restraint of the north. Her menus change with what arrives at the back door — never before, never against it.
            </p>
            <blockquote className="mt-10 pl-6 border-l-2 border-primary font-serif text-xl md:text-2xl italic">
              "A great meal is a conversation between the room, the fire, and the guest. My job is to listen."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Split imagery */}
      <section className="grid md:grid-cols-2">
        {[grainImg, roomImg].map((src, i) => (
          <div key={i} className="image-reveal aspect-[4/3] md:aspect-auto md:h-[560px]">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-noir">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
            Come and stay <span className="italic text-primary">a while.</span>
          </h2>
          <div className="mt-10">
            <Link to="/reservations" className="btn-gold">
              Reserve a Table <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
