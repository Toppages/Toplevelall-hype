// pages/index.tsx
import Hero from "@/components/Hero/Hero";
import MostProduct from "@/components/Productos/Productos";
import { useThemeObserver } from "../components/hooks/useThemeObserver";
import MetaTags from "../components/MetaTags";

export default function Home() {
  const theme = useThemeObserver();

  const backgroundClass =
    theme === "dark"
      ? "min-h-screen pt-24 bg-gradient-to-r from-[#020024] to-[#0c2a85]"
      : "min-h-screen pt-24 bg-gradient-to-r from-[#F4F8FB] to-[#D6E1F2]";

  return (
    <>
      <MetaTags title="Top Level Games | Recargas para Free Fire, Roblox y más" /> {/* Título único aquí */}
      <main>
        <Hero />
        <div className={backgroundClass}>
          <MostProduct />
        </div>
      </main>
    </>
  );
}
