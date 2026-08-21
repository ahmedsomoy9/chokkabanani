import { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  Navigation,
  MessageCircle,
  Bike,
} from "lucide-react";
import { menu, contact } from "@/data/menu";
import logo from "@/assets/logo.jpeg.asset.json";
import shrimpRice from "@/assets/shrimp-rice.jpeg.asset.json";
import wedges from "@/assets/wedges.jpeg.asset.json";
import menuFood from "@/assets/menu-food.jpeg.asset.json";
import menuDrinks from "@/assets/menu-drinks.jpeg.asset.json";

const taka = "৳";

/* ---------------------------------- Hero ---------------------------------- */

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden surface-wood">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="rise">
          <p className="eyebrow">Banani, Dhaka</p>
          <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Chokka Banani
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-secondary-foreground/90 sm:text-lg">
            Good food, warm moments, and a space to gather.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-wood-deep"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-primary/25 bg-card/80 px-6 py-3 text-sm font-semibold text-secondary-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/50"
            >
              Contact Us
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="eyebrow">Open Daily</dt>
              <dd className="mt-1 text-secondary-foreground">{contact.hours}</dd>
            </div>
            <div className="min-w-0">
              <dt className="eyebrow">Find Us</dt>
              <dd className="mt-1 text-secondary-foreground">House 93, Road 6, Block C</dd>
            </div>
          </dl>
        </div>

        <div className="rise relative" style={{ animationDelay: "120ms" }}>
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={shrimpRice.url}
              alt="Garlic butter shrimp served with herbed rice on a terracotta plate"
              width={768}
              height={880}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft sm:flex">
            <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-secondary-foreground">
              <img src={logo.url} alt="" width={40} height={40} className="size-10 object-cover" />
            </span>
            <span className="text-xs leading-tight text-muted-foreground">
              Pasta · Pizza · Rice
              <br />
              <span className="text-secondary-foreground">Cha & cool drinks</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- About ---------------------------------- */

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">A warm corner of Banani</h2>
        </div>
        <div className="space-y-5 text-[1.02rem] leading-relaxed text-muted-foreground">
          <p>
            Chokka is a relaxed dining space in Banani built around handmade food and
            unhurried afternoons — Neapolitan-style pizza, creamy pastas, rice plates, crisp
            bites, and a proper cup of cha.
          </p>
          <p>
            The room is soft-lit and quiet enough to work in, generous enough to share a long
            table with friends. Come for lunch, stay for a slow evening, or reserve the space
            for a gathering or a working session.
          </p>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-wood-deep"
          >
            See what we're cooking
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Featured -------------------------------- */

const featured = [
  {
    img: shrimpRice.url,
    label: "Rice Creation",
    title: "Garlic Butter Shrimp",
    price: "745",
    position: "object-center",
  },
  {
    img: wedges.url,
    label: "Bites",
    title: "Wedges",
    price: "285",
    position: "object-bottom",
  },
];

export function Featured() {
  return (
    <section className="surface-paper border-y border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="max-w-xl">
          <p className="eyebrow">From the kitchen</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Plates we're proud of</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featured.map((d) => (
            <figure
              key={d.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  loading="lazy"
                  width={768}
                  height={640}
                  className={`aspect-4/3 w-full object-cover ${d.position} transition-transform duration-700 group-hover:scale-105`}
                />
              </div>
              <figcaption className="flex items-end justify-between gap-4 px-5 py-5">
                <div className="min-w-0">
                  <p className="eyebrow">{d.label}</p>
                  <h3 className="mt-1 truncate text-lg">{d.title}</h3>
                </div>
                <p className="shrink-0 font-display text-lg text-primary">
                  {taka} {d.price}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Menu ----------------------------------- */

export function MenuSection() {
  const [active, setActive] = useState(menu[0]!.id);
  const category = menu.find((c) => c.id === active) ?? menu[0]!;

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="max-w-xl">
        <p className="eyebrow">Menu</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Everything on the table</h2>
        <p className="mt-4 text-muted-foreground">All prices in BDT ({taka}).</p>
      </div>

      <div className="mt-8 -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <div role="tablist" aria-label="Menu categories" className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
          {menu.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={c.id === active}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-all ${
                c.id === active
                  ? "border-primary bg-primary text-primary-foreground shadow-soft"
                  : "border-border bg-card text-secondary-foreground hover:border-accent hover:text-primary"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      <div key={category.id} className="rise mt-8 rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-8 md:p-10">
        <h3 className="text-2xl sm:text-3xl">{category.title}</h3>
        {category.note && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {category.note}
          </p>
        )}

        {category.pizzaSizes && (
          <div className="mt-6 hidden justify-end gap-10 pr-1 sm:flex">
            <span className="eyebrow w-16 text-right">8 inch</span>
            <span className="eyebrow w-16 text-right">12 inch</span>
          </div>
        )}

        <ul className="mt-4 divide-y divide-border">
          {category.items.map((item) => (
            <li key={item.name} className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2 py-5">
              <div className="min-w-0 flex-1 basis-full sm:basis-auto">
                <h4 className="text-[1.05rem] font-semibold tracking-normal">{item.name}</h4>
                {item.description && (
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>
              {category.pizzaSizes ? (
                <div className="flex shrink-0 gap-10">
                  <span className="w-16 text-right font-display text-primary">
                    <span className="mr-1 text-xs text-muted-foreground sm:hidden">8"</span>
                    {taka} {item.price8}
                  </span>
                  <span className="w-16 text-right font-display text-primary">
                    <span className="mr-1 text-xs text-muted-foreground sm:hidden">12"</span>
                    {taka} {item.price12}
                  </span>
                </div>
              ) : (
                <span className="shrink-0 font-display text-primary">
                  {taka} {item.price}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {[
          { src: menuFood.url, alt: "Chokka Banani printed food menu" },
          { src: menuDrinks.url, alt: "Chokka Banani printed tea and drinks menu" },
        ].map((m) => (
          <div key={m.src} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={m.src}
              alt={m.alt}
              loading="lazy"
              width={1200}
              height={850}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------- Events & Workspace --------------------------- */

export function Events() {
  return (
    <section id="events" className="surface-wood border-y border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-3xl shadow-lift">
          <img
            src={wedges.url}
            alt="Crispy potato wedges with chili dip on a serving plate"
            loading="lazy"
            width={768}
            height={640}
            className="aspect-4/3 w-full object-cover object-bottom"
          />
        </div>
        <div>
          <p className="eyebrow">Events & Workspace</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">A space that adapts to your day</h2>
          <p className="mt-5 leading-relaxed text-secondary-foreground/90">
            Chokka Banani can be used for events as well as a workspace — a get-together, a
            small celebration, a team session, or a quiet afternoon of focused work over cha.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Tell us what you have in mind and we'll walk you through the details.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-wood-deep"
          >
            <MessageCircle className="size-4" />
            Inquire About the Space
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Delivery -------------------------------- */

export function Delivery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
      <div className="flex flex-col items-start gap-8 rounded-3xl border border-border surface-paper p-6 shadow-soft sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-secondary-foreground">
            <Bike className="size-3.5" /> Delivery
          </span>
          <h2 className="mt-4 text-3xl">Delivery Available in Banani</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We deliver within Banani. Message or call us for delivery details and to place your
            order.
          </p>
        </div>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-wood-deep"
        >
          <MessageCircle className="size-4" />
          Order on WhatsApp
        </a>
      </div>
    </section>
  );
}

/* --------------------------- Location & Contact ---------------------------- */

export function LocationContact() {
  const details = [
    { icon: MapPin, label: "Address", value: contact.address },
    { icon: Clock, label: "Opening Hours", value: contact.hours },
    { icon: Phone, label: "Phone / WhatsApp", value: contact.phoneDisplay, href: contact.phoneHref },
  ];

  const actions = [
    { icon: MessageCircle, label: "WhatsApp", href: contact.whatsapp, primary: true },
    { icon: Instagram, label: "Instagram", href: contact.instagram },
    { icon: Facebook, label: "Facebook", href: contact.facebook },
    { icon: Navigation, label: "Directions", href: contact.maps },
  ];

  return (
    <section id="location" className="surface-wood border-t border-border">
      <div id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 md:py-28">
        <div className="max-w-xl">
          <p className="eyebrow">Location & Contact</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Come sit with us</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <h3 className="text-xl">{contact.name}</h3>
            <ul className="mt-6 space-y-5">
              {details.map((d) => (
                <li key={d.label} className="flex min-w-0 items-start gap-4">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <d.icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="eyebrow block">{d.label}</span>
                    {d.href ? (
                      <a href={d.href} className="mt-1 block text-secondary-foreground hover:text-primary">
                        {d.value}
                      </a>
                    ) : (
                      <span className="mt-1 block text-secondary-foreground">{d.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                    a.primary
                      ? "bg-primary text-primary-foreground shadow-soft hover:bg-wood-deep"
                      : "border border-border bg-card text-secondary-foreground hover:border-accent hover:text-primary"
                  }`}
                >
                  <a.icon className="size-4" />
                  {a.label}
                </a>
              ))}
            </div>
          </div>

          <a
            href={contact.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative grid overflow-hidden rounded-3xl border border-border bg-secondary-foreground/90 p-8 text-primary-foreground shadow-soft"
          >
            <span className="relative z-10 self-end">
              <span className="block font-display text-2xl">House 93, Road 6</span>
              <span className="mt-1 block text-sm text-primary-foreground/80">
                Block C, Banani, Dhaka
              </span>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm transition-colors group-hover:border-primary-foreground/70">
                <Navigation className="size-4" /> Open in Google Maps
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer --------------------------------- */

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-secondary-foreground">
                <img src={logo.url} alt="Chokka Banani logo" loading="lazy" width={44} height={44} className="size-11 object-cover" />
              </span>
              <span className="font-display text-lg">Chokka Banani</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Good food, warm moments, and a space to gather.
            </p>
          </div>
          <div>
            <p className="eyebrow">Address</p>
            <p className="mt-3 text-sm text-muted-foreground">{contact.address}</p>
          </div>
          <div>
            <p className="eyebrow">Hours</p>
            <p className="mt-3 text-sm text-muted-foreground">{contact.hours}</p>
            <p className="eyebrow mt-5">Phone</p>
            <a href={contact.phoneHref} className="mt-3 block text-sm text-muted-foreground hover:text-primary">
              {contact.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="eyebrow">Follow</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Instagram className="size-4" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Facebook className="size-4" /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Chokka Banani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
