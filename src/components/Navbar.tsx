import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MoonStar, Sun } from 'lucide-react';
import { useState, useEffect } from "react";
import { Group, Menu, Drawer, ActionIcon, Burger } from '@mantine/core';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [drawerOpened, setDrawerOpened] = useState(false);
  const router = useRouter();
  const isIndex = router.pathname === '/';
  const [opened,] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (!isIndex) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isIndex]);

  const getBackgroundClass = () => {
    if (!isIndex || scrolled) {
      return theme === "dark"
        ? "bg-[#0c2a85]/60 backdrop-blur-lg"
        : "bg-[#F4F8FB]/50 backdrop-blur-lg border-b border-black/10";
    }
    return "bg-transparent";
  };

  const shouldShowContent = !isIndex || scrolled;
  useEffect(() => {
    if (router.pathname === '/') {
      setScrolled(false);
    }
  }, [router.pathname]);

  const logoSrc =
    theme === "dark"
      ? "https://res.cloudinary.com/di0btw2pi/image/upload/v1745326797/TOPLEVEL_TITULO_cdxaf8.png"
      : "https://res.cloudinary.com/di0btw2pi/image/upload/v1745423630/TOPLEVEL_TITULO_2_fi4l11.png";

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${getBackgroundClass()}`}>
      <div className={`container mx-auto flex justify-between items-center px-4 py-2 transition-opacity duration-300 ${shouldShowContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

        <Link href="/" className="flex items-center">
          <Image src={logoSrc} alt="Logo" width={100} height={150} className="object-contain" />
        </Link>

        {/* Desktop nav */}
        <Group position="apart" className="max-w-md  md:flex">
          <Link href="/" className="hover:underline">
            <h3 className="text-lg font-semibold mb-2 hidden md:block">Inicio</h3>
          </Link>

          <Menu
            withArrow
            styles={{ dropdown: { backgroundColor: '#D1D7E7' } }}
            trigger="hover"
            openDelay={50}
            closeDelay={50}
          >
            <Menu.Target>
              <Link href="/Catalogo" className="hover:underline">
                <h3 className="text-lg font-semibold mb-2 hidden md:block">Catálogo</h3>
              </Link>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => router.push('/Catalogo?filter=Recarga%20por%20id')}>
                Recargas por ID
              </Menu.Item>
              <Menu.Item onClick={() => router.push('/Catalogo?filter=Gift%20Cards')}>
                Gift Cards
              </Menu.Item>
            
            </Menu.Dropdown>
          </Menu>

          <Link href="/recargas/free-fire" className="hover:underline">
            <h3 className="text-lg font-semibold mb-2 hidden md:block">
              Free fire
            </h3>
          </Link>

        </Group>

        <Burger
          className="md:hidden"
          opened={opened}
          onClick={() => setDrawerOpened(true)}
        />
        <div className="items-center gap-4 hidden md:flex">


          <ActionIcon aria-label="Toggle theme" onClick={toggleTheme} color="yellow" size="xl" radius="xl">
            {theme === "dark"
              ? <Sun size={25} /> : <MoonStar size={25} color='blue' />}
          </ActionIcon>


        </div>
        <Drawer
          position="right"
          opened={drawerOpened}
          onClose={() => setDrawerOpened(false)}
          padding="xl"
          size="xl"
          styles={{
            drawer: {
              backgroundColor: theme === "dark"
                ? "rgba(12, 42, 133, 0.6)"
                : "rgba(244, 248, 251, 0.5)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderLeft: theme === "light" ? "1px solid rgba(0,0,0,0.1)" : "none",
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            },
          }}
        >
          <div className={`flex flex-col gap-6 ${theme === "dark" ? "text-white" : "text-blue-600"}`}>
            <Link
              href="/"
              onClick={() => setDrawerOpened(false)}
              className={`text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 ${theme === "dark" ? "hover:text-yellow-300" : "hover:text-blue-400"
                }`}
            >
              Inicio
            </Link>
            <Link
              href="/Catalogo"
              onClick={() => setDrawerOpened(false)}
              className={`text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 ${theme === "dark" ? "hover:text-yellow-300" : "hover:text-blue-400"
                }`}
            >
              Catálogo
            </Link>
            <Link
              href="/recargas/freefire"
              onClick={() => setDrawerOpened(false)}
              className={`text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 ${theme === "dark" ? "hover:text-yellow-300" : "hover:text-blue-400"
                }`}
            >
              Freefire
            </Link>

            <ActionIcon aria-label="Toggle theme" onClick={toggleTheme} color="yellow" size="xl" radius="xl">
              {theme === "dark"
                ? <Sun size={25} /> : <MoonStar size={25} color='blue' />}
            </ActionIcon>
          </div>

        </Drawer>



      </div>
    </header>
  );
};

export default Navbar;
