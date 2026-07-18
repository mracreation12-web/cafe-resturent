import { Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/reservations", label: "Reservations" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container-full">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <span className="text-primary text-xl leading-none">✦</span>
            <span className="font-serif text-xl md:text-2xl tracking-[0.15em] uppercase text-foreground group-hover:text-primary transition-colors duration-500">
              Noir <span className="text-primary">&</span> Ember
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link, idx) => {
              const active = location.pathname === link.to;
              return (
                <div key={link.to} className="flex items-center">
                  {idx > 0 && (
                    <span
                      aria-hidden
                      className="h-3 w-px bg-border/60 mx-1"
                    />
                  )}
                  <Link
                    to={link.to}
                    className={cn(
                      "relative px-5 py-2 text-[11px] font-medium tracking-[0.3em] uppercase transition-colors duration-300",
                      active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-px bg-primary transition-all duration-300",
                        active ? "w-6 opacity-100" : "w-0 opacity-0"
                      )}
                    />
                  </Link>
                </div>
              );
            })}
          </div>


          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to day mode" : "Switch to night mode"}
              className="relative h-10 w-10 flex items-center justify-center border border-border/60 text-foreground/70 hover:text-primary hover:border-primary transition-colors duration-300"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <Sun className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <Moon className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <Link to="/reservations" className="btn-gold h-11 px-6">
              Book a Table
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to day mode" : "Switch to night mode"}
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">

              {mobileMenuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <MenuIcon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
            </button>
          </div>
        </div>


        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="md:hidden overflow-hidden border-t border-border/60"
            >
              <div className="py-8 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div key={link.to} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link
                      to={link.to}
                      className="block px-2 py-3 text-sm font-medium tracking-[0.2em] uppercase text-foreground/80 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-6">
                  <Link to="/reservations" className="btn-gold w-full">Book a Table</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
