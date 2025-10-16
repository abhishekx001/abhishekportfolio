import Hero from "../components/Hero";
import { NavBarDemo } from "../components/NavBarDemo.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBarDemo />
      <Hero />
    </main>
  );
}
