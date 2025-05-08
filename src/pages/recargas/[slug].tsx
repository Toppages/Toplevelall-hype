import axios from "axios";
import MetaTags from "../../components/MetaTags";
import { Group, Text, TextInput, Button, Select } from '@mantine/core';
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { allProducts } from "../../Data/productsData";
import { useThemeObserver } from "../../components/hooks/useThemeObserver";

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const theme = useThemeObserver();

  const [selectedMethod, setSelectedMethod] = useState("");
  const [selectedSubProduct, setSelectedSubProduct] = useState<null | { name: string; price: string }>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const product = allProducts.find(p =>
    p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  useEffect(() => {
    if (slug && !product) {
      router.replace('/');
    }
  }, [slug, product, router]);


  if (!slug || !product) return null;


  const isFormComplete = selectedSubProduct && email && (
 
      !product?.accessMethods?.length || selectedMethod
    );

  const accessMethodLine = product.accessMethods?.length
    ? `Método de acceso: ${selectedMethod}\n`
    : "";

  const whatsappMessage = `
    Hola, estoy interesado en ${product.title} (${selectedSubProduct?.name || "No seleccionado"}).\n 
    ${accessMethodLine} 
    ${product.title === "Free Fire" ? `Mi ID: ${email}` : `Mi Correo: ${email}`}
    `.trim();

  const whatsappLink = `https://wa.me/573224234790?text=${encodeURIComponent(whatsappMessage)}`;

  const bgGradient = theme === "dark"
    ? "bg-gradient-to-r from-[#020024] to-[#0c2a85]"
    : "bg-gradient-to-r from-[#F4F8FB] to-[#D6E1F2]";

  return (
    <>
      <MetaTags title={`${product.title} - Top Level Games`} />
      <div className={`p-5 pt-30 ${bgGradient}`}>

        <Group mt={15} position="center">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        </Group>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-center mb-8">
        {product.subProducts?.map((sub, index) => {
            const isSelected = selectedSubProduct?.name === sub.name;

            return (
              <motion.div
                key={sub.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedSubProduct({ name: sub.name, price: sub.price || "" })}
                className={`relative z-1 flex flex-col items-center p-4 rounded-lg cursor-pointer
        transition-all duration-300 ease-in-out border-2 
        ${theme === "dark"
                    ? isSelected ? "border-[#17e403] bg-[#1e2e4a]" : "border-gray-600 hover:border-[#17e403] bg-[#202952]"
                    : isSelected ? "border-[#0c2a85] bg-[#e6f0ff]" : "border-gray-300 hover:border-[#17e403] bg-white"}
        hover:scale-105 hover:shadow-xl shadow-md h-auto min-h-[90px] w-full`}
              >
                <div className="relative z-1 text-center flex flex-col justify-between h-full">
                  <p className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {sub.name}
                  </p>
                   
                </div>
              </motion.div>
            );
          })}
        </div>








        <div className="max-w-3xl mx-auto backdrop-blur-sm bg-[#1f2e4e]/50 rounded-xl p-8 border border-amber-900/20 shadow-lg">
          <div className="mb-6">
            {product?.accessMethods && (
              <Select
                label={<Text c={theme === "dark" ? "#17e403" : "#0c2a85"} fz="lg">Método de acceso</Text>}
                size="lg"
                radius="md"
                mx={10}
                my={20}
                placeholder="Selecciona una opción"
                data={product.accessMethods.map(method => ({ label: method, value: method }))}
                value={selectedMethod}
                onChange={(value) => setSelectedMethod(value || "")}
                withinPortal
                searchable
                styles={() => ({
                  item: {
                    '&[data-selected]': {
                      '&, &:hover': {
                        backgroundColor: '#0c2a85',
                        color: 'white',
                      },
                    },
                  },
                })}
              />
            )}
          </div>

            <div className="mb-6">
            <TextInput
              placeholder={product.title === "Free Fire" ? "ID de jugador" : "Correo electrónico"}
              label={
              <Text c={theme === "dark" ? "#17e403" : "#0c2a85"} fz="lg">
                {product.title === "Free Fire" ? "ID" : "Correo"}
              </Text>
              }
              size="lg"
              radius="md"
              mx={10}
              my={20}
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            </div>

       

       

          <div className="flex justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                radius="md"
                variant="filled"
                disabled={!isFormComplete}
                style={{
                  backgroundColor: theme === "dark" ? "#17e403" : "#0c2a85",
                  color: "white",
                  opacity: !isFormComplete ? 0.5 : 1,
                  cursor: !isFormComplete ? "not-allowed" : "pointer"
                }}
              >
                Enviar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
