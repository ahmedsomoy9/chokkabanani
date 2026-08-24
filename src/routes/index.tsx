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

const title = "Chokka Banani | Restaurant & Café";
const description =
  "Chokka Banani — delicious food, drinks and dining in Banani. Delivery available in Banani. House 93, Road 06, Block C, Banani. Open 12 PM – 11 PM.";
const siteUrl = "https://chokkabanani.lovable.app";
const ogImage = `${siteUrl}/og-image.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Chokka Banani",
          image: ogImage,
          url: siteUrl,
          telephone: "+8801866033673",
          openingHours: "Mo-Su 12:00-23:00",
          address: {
            "@type": "PostalAddress",
            streetAddress: "House 93, Road 06, Block C, Banani",
            addressLocality: "Dhaka",
            addressCountry: "BD",
          },
        }),
      },
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
