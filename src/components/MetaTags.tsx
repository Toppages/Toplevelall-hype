// components/MetaTags.tsx
import Head from "next/head";

interface MetaTagsProps {
  title?: string;  // El título es opcional
}

const MetaTags: React.FC<MetaTagsProps> = ({ title }) => (
  <Head>
    <meta name="description" content="Recarga rápida y segura para tus juegos favoritos como Free Fire y Roblox. ¡Únete a la comunidad Top Level Games!" />
    <meta name="keywords" content="recargas, Free Fire, Roblox, Top Level Games, juegos, diamantes, tienda gamer" />
    <meta name="author" content="Top Level Games" />
    <meta property="og:title" content={title || "Top Level Games - Recargas de confianza"} />
    <meta property="og:description" content="Compra diamantes para Free Fire, Robux y más. Atención rápida y personalizada." />
    <meta property="og:image" content="/og-image.jpg" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://freefirerecarga.com" />
    <link rel="icon" href="https://res.cloudinary.com/di0btw2pi/image/upload/v1745423630/Top_level_icon_1_x0dlzn.png" />
    {title && <title>{title}</title>} {/* Si se pasa un título, lo usa */}
  </Head>
);

export default MetaTags;
