import { JSX } from 'react';
import { Image } from '@mantine/core';
import ProductCarousel from './ProductCarousel';
import CarrouselBanner from "@/components/Banners/CarrouselBanner";
import { allProducts, Product } from '@/Data/productsData';

function MostProduct(): JSX.Element {
  const getProductsByBadge = (badge: Product['badgeText']) =>
    allProducts.filter((product) => product.badgeText === badge);

  return (
    <>
      <ProductCarousel
        title="Recargas más vendidas"
        description="Recargas populares en Free Fire y otros juegos"
        products={allProducts.filter(product => product.top).map(product => ({
          ...product,
          subProducts: product.subProducts?.map(subProduct => ({
            ...subProduct,
            price: subProduct.price ?? ''
          }))
        }))}
      />


      <ProductCarousel
        title="Recargas por ID"
        description="Recarga directamente con tu ID de jugador"
        products={getProductsByBadge('Recarga por id').map(product => ({
          ...product,
          subProducts: product.subProducts?.map(subProduct => ({
            ...subProduct,
            price: subProduct.price ?? ''
          }))
        }))}
      />

      <CarrouselBanner />

      <ProductCarousel
        title="Recargas internas"
        description="Pon tus datos para recargar"
        products={getProductsByBadge('Recarga interna').map(product => ({
          ...product,
          subProducts: product.subProducts?.map(subProduct => ({
            ...subProduct,
            price: subProduct.price ?? ''
          }))
        }))}
      />

      <div style={{ padding: '20px' }}>
        <Image
          radius="md"
          src="https://res.cloudinary.com/di0btw2pi/image/upload/v1745874658/TOPLEVEL_BANNER_CODM_1_bbc97c.png"
          alt="COD banner"
        />
      </div>

      <ProductCarousel
        title="Gift Cards"
        description="Compra tarjetas de regalo para tus plataformas favoritas"
        products={getProductsByBadge('Gift Cards').map(product => ({
          ...product,
          subProducts: product.subProducts?.map(subProduct => ({
            ...subProduct,
            price: subProduct.price ?? ''
          }))
        }))}
      />

      <div style={{ padding: '20px' }}>
        <Image
          radius="md"
          src="https://res.cloudinary.com/di0btw2pi/image/upload/v1745874657/TOPLEVEL_BANNER_GIFT_CARDS_1_sgifme.png"
          alt="Gift Cards banner"
        />
      </div>

    
    </>
  );
}

export default MostProduct;