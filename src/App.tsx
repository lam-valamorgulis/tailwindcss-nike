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
      <section className="xl:padding-x padding-b">
        <Hero />
      </section>
    </main>
  );
}
