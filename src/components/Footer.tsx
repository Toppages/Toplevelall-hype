import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import { useThemeObserver } from "../components/hooks/useThemeObserver";
import Image from "next/image";

const Footer = () => {
  const theme = useThemeObserver();



  const logoSrc = theme === "dark"
    ? "https://res.cloudinary.com/di0btw2pi/image/upload/v1745326600/Logo_TopLevel_PNG_a_ifjw1y.png"
    : "https://res.cloudinary.com/di0btw2pi/image/upload/v1745326601/Logo_TopLevel_PNG_pjuitf.png";

  const dividerColor = theme === "dark" ? "border-white/10" : "border-black/10";
  const textColor = theme === "dark" ? "text-muted-foreground" : "text-gray-700";
  const hoverColor = theme === "dark" ? "hover:text-white" : "hover:text-black";
  const bgGradient = theme === "dark"
    ? "bg-gradient-to-t from-[#1B1B25] to-transparent"
    : "bg-gradient-to-t from-white to-gray-100";

  return (
    <footer className={`relative ${bgGradient} backdrop-blur-md border-t ${dividerColor} p-10 transition-all duration-300`}>
      <div className="container animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="relative h-16 w-40 transition-transform duration-300 hover:scale-105">
  <Image
    src={logoSrc}
    alt="Top Level Logo"
    fill
    style={{ objectFit: "contain" }}
    sizes="160px"
    priority
  />
</div>
            <p className={`text-sm ${textColor} max-w-xs`}>
              Centro de recargas para Free Fire, Roblox y más. Rápido, seguro y confiable.
            </p>
           
          </div>

          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-lg font-semibold mb-2">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li className={`${textColor} ${hoverColor} cursor-pointer transition-colors duration-200`}>Inicio</li>
              <li className={`${textColor} ${hoverColor} cursor-pointer transition-colors duration-200`}>Recargar</li>
              <li>
                <a href="#" className={`${textColor} ${hoverColor} transition-colors duration-200`}>
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-lg font-semibold mb-2">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-accent" />
                <a href="mailto:soporte.toplevelstore@gmail.com" className={`${textColor} ${hoverColor} transition-colors duration-200`}>
                  soporte.toplevelstore@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={18} className="text-accent" />
                <a href="https://wa.me/573224234790" target="_blank" rel="noopener noreferrer" className={`${textColor} ${hoverColor} transition-colors duration-200`}>
                  WhatsApp de Soporte
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`border-t ${dividerColor} mt-10 pt-6 text-sm text-center ${textColor}`}>
          <p>© {new Date().getFullYear()} Top Level. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
