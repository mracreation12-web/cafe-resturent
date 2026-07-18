import { Link } from "react-router-dom";
import { Instagram, Facebook, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-noir text-foreground border-t border-border/60">
      <div className="container-full py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase">
              Noir <span className="text-primary">&</span> Ember
            </Link>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
              A candlelit dining room and slow-brew coffee bar in the old textile quarter. Seasonal tasting menus, single-origin espresso, hushed conversation.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[Instagram, Facebook, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-10 h-10 flex items-center justify-center border border-border/60 text-foreground/60 hover:text-primary hover:border-primary transition-colors duration-500"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.4em] uppercase text-primary mb-5">Visit</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>42 Lantern Row</li>
              <li>Textile Quarter</li>
              <li>Open Tue — Sun</li>
              <li>7:30 — 23:00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.4em] uppercase text-primary mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="tel:+15550101" className="hover:text-foreground transition-colors">+1 (555) 010-1000</a></li>
              <li><a href="mailto:hello@noirandember.co" className="hover:text-foreground transition-colors">hello@noirandember.co</a></li>
              <li><Link to="/reservations" className="hover:text-foreground transition-colors">Reserve a Table</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Private Events</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-muted-foreground tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Noir & Ember</p>
          <p>Crafted with fire, patience, and good beans.</p>
        </div>
      </div>
    </footer>
  );
};
