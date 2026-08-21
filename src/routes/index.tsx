import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import {
  Hero,
  About,
  Featured,
  MenuSection,
  Events,
  Delivery,
  LocationContact,
  Footer,
} from "@/components/site/Sections";

const title = "Chokka Banani — Pizza, Pasta & Cha in Banani, Dhaka";
const description =
  "Chokka Banani serves handmade pizza, creamy pasta, rice plates, bites and cha in Banani, Dhaka. Open 12 PM–11 PM. Events and workspace available.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Featured />
        <MenuSection />
        <Events />
        <Delivery />
        <LocationContact />
      </main>
      <Footer />
    </div>
  );
}
