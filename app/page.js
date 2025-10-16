import Hero from "../components/Hero";
import { Header } from "../components/Header.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
    </main>
  );
}
