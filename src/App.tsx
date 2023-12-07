import Nav from "./components/Nav";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l padding-b">
        <Hero />
      </section>
    </main>
  );
}
