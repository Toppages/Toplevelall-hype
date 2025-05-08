// pages/_app.tsx
import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import MetaTags from "../components/MetaTags"; // Importa el componente MetaTags
import type { AppProps } from "next/app";
import { Toaster } from 'sonner';
import { MantineProvider } from "@mantine/core";

function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withNormalizeCSS>
      <MetaTags />
      <Navbar />
      <Component {...pageProps} />
      <Toaster richColors />
      <Footer />

    </MantineProvider>
  );
}

export default App;
