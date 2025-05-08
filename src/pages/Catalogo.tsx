import MetaTags from "../components/MetaTags";
import { Search } from 'lucide-react';
import { useRouter } from "next/router";
import { allProducts } from '@/Data/productsData';
import { useThemeObserver } from "../components/hooks/useThemeObserver";
import { useEffect, useState } from 'react';
import { Card, Image, Grid, Group, Pagination, TextInput, Select } from '@mantine/core';


function Catalogo() {
  const theme = useThemeObserver() as { fn: { gradient: (args: { from: string; to: string }) => string }; } | "light" | "dark";
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const itemsPerPage = 12;
  const router = useRouter();
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesBadge = selectedBadge ? product.badgeText === selectedBadge : true;
    return matchesSearch && matchesBadge;
  });
  useEffect(() => {
    if (!router.isReady) return;

    const { filter } = router.query;

    if (filter && typeof filter === 'string') {
      const validBadges = allProducts.map(p => p.badgeText);
      if (validBadges.includes(filter)) {
        setSelectedBadge(filter);
        setActivePage(1);
      }
    }
  }, [router.isReady, router.query]);


  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const cardBackgroundColor = theme === "dark" ? "#213170" : "#ffffff";
  const cardBackgroundColor2 = theme === "dark" ? "#202952" : "#dee3ea";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const badgeOptions = Array.from(new Set(allProducts.map(product => product.badgeText)));

  return (
    <>
      <MetaTags title="Catálogo de Productos - Top Level Games" />
      <Card
        mt='20vh'
        mb={35}
        mr={15}
        ml={15}
        radius="lg"
        shadow="md"
        style={{ backgroundColor: cardBackgroundColor2 }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className={`font-bold text-2xl md:text-3xl ${textColor} tracking-tight`}>
              Catálogo de Juegos
            </h2>
            <p className={` ${textColor} text-sm mt-1`}>Recargas disponibles para tus juegos favoritos</p>
          </div>
        </div>

        <Group position='center' mt={15}>
          <Pagination
            total={totalPages}
            page={activePage}
            onChange={setActivePage}
            position="center"
            radius="md"
            size="lg"
            styles={(themeObj) => ({
              item: {
                '&[data-active]': {
                  backgroundImage:
                    theme === 'dark'
                      ? themeObj.fn.gradient({ from: '#213170', to: '#0c2a85' })
                      : themeObj.fn.gradient({ from: '#E4372E', to: '#FFD700' }),
                  color: '#fff',
                  fontWeight: 600,
                },
                '&:not([data-active])': {
                  backgroundColor: cardBackgroundColor,
                  color: theme === 'dark' ? '#fff' : '#000',
                  border: '1px solid transparent',
                  transition: 'background-color 0.3s, transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: theme === 'dark' ? '#2d3e8c' : '#f0f0f0',
                  },
                },
              },
            })}
          />

          <TextInput
            radius="md"
            size="md"
            icon={<Search size={18} />}
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
              setActivePage(1);
            }}
            w={300}
            styles={{
              input: {
                backgroundColor: theme === 'dark' ? '#1B1B25' : '#f9f9f9',
                borderColor: theme === 'dark' ? '#334155' : '#ccc',
                color: theme === 'dark' ? '#fff' : '#000',
                '&::placeholder': {
                  color: theme === 'dark' ? '#cbd5e1' : '#888',
                },
              },
            }}
          />

          <Select
            placeholder="Selecciona una opción"
            radius="md"
            size="md"
            w={300}
            clearable
            data={badgeOptions.map(badge => ({ value: badge, label: badge }))}
            value={selectedBadge}
            onChange={(value) => {
              setSelectedBadge(value);
              setActivePage(1);
            }}

            styles={{
              input: {
                backgroundColor: theme === 'dark' ? '#1B1B25' : '#f9f9f9',
                borderColor: theme === 'dark' ? '#334155' : '#ccc',
                color: theme === 'dark' ? '#fff' : '#000',
                '&::placeholder': {
                  color: theme === 'dark' ? '#cbd5e1' : '#888',
                },
              },
              item: {
                backgroundColor: theme === 'dark' ? '#1B1B25' : '#f0f0f0',
                color: theme === 'dark' ? '#fff' : '#000',
                '&[data-selected]': {
                  backgroundColor: theme === 'dark' ? '#2d3e8c' : '#0c2a85',
                  color: '#fff',
                },
                '&:hover': {
                  backgroundColor: theme === 'dark' ? '#213170' : '#88a3f4',
                },
              },
              dropdown: {
                backgroundColor: theme === 'dark' ? '#1B1B25' : '#fff',
                borderColor: theme === 'dark' ? '#334155' : '#ccc',
              },
            }}
          />
        </Group>

        <Grid mt={20} mb={20} className="px-4">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product, index) => (
              <Grid.Col
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
              >
                <Card
                  onClick={() => router.push(`/recargas/${product.title.toLowerCase().replace(/\s+/g, "-")}`)}
                  radius="lg"
                  shadow="md"
                  style={{ backgroundColor: cardBackgroundColor, cursor: 'pointer' }}
                  className="flex flex-col items-center hover:shadow-xl transition-shadow"
                >

                  <Card.Section>
                    <div className="relative w-full overflow-hidden rounded-lg">
                      <Image
                        src={product.imageUrl}
                        alt={`Imagen de ${product.title}`}
                      />
                    </div>
                  </Card.Section>

                  <Group position='center' mt={15}>
                    <h2 className={`text-xl font-bold ${textColor} text-center`}>
                      {product.title}
                    </h2>
                  </Group>

                </Card>
              </Grid.Col>
            ))
          ) : (
            <div className="w-full text-center mt-10">
              <p className={`text-2xl font-semibold ${textColor}`}>
                No hay productos disponibles.
              </p>
            </div>
          )}
        </Grid>

      </Card>
    </>
  );
}

export default Catalogo;