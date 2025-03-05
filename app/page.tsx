
"use client";

import { Hero } from "./components/Hero";
import { How } from "./components/How";
import { Aboutus } from "./components/Aboutus";
import { BeforeAndAfter } from "./components/BeforeAndAfter";
import { Faq } from "./components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="¡Transforma tu negocio con Webgo!"
              subheadline="Webgo crea páginas web especializadas en ventas, 100% optimizadas en velocidad, textos persuasivos, tecnología y sistemas AI para llevar tu negocio al siguiente nivel."
              cta1="Descubre cómo podemos ayudarte"
              cta2="Comienza tu transformación digital ahora"
            />

            <How
              step1Title="Consulta inicial"
              step1Desc="Contacte a nuestro equipo de Webgo para discutir sus necesidades de diseño web y ventas. Durante esta consulta, aprenderemos más sobre su negocio y sus objetivos para asegurarnos de que podamos proporcionar la mejor solución posible."
              step2Title="Diseño y desarrollo"
              step2Desc="Nuestro equipo de expertos en diseño web creará un sitio web optimizado en velocidad y con textos persuasivos para atraer a su audiencia y convertir visitas en ventas. Usamos tecnología avanzada y sistemas AI para asegurar una experiencia de usuario excepcional."
              step3Title="Lanzamiento y optimización"
              step3Desc="Una vez que esté satisfecho con el diseño, lanzaremos su sitio web y continuaremos trabajando en su optimización. Nuestro objetivo es asegurar que su sitio web esté siempre al día con las últimas tendencias y tecnologías para maximizar sus resultados de ventas."
            />

            <Aboutus
              step1Title="Acerca de nosotros"
              step1Desc="Descripción"
              step2Title="Beneficio 1"
              step2Desc="Descripción beneficio 1"
              step3Title="Beneficio 2"
              step3Desc="Descripción beneficio 2"
            />
<Services />
<BeforeAndAfter />

            <Faq
              faqs={[{"pregunta":"¿Qué tipo de páginas webs crea Webgo?","respuesta":"Webgo se especializa en la creación de páginas webs que son expertas en ventas. Estas páginas están 100% optimizadas en velocidad y están equipadas con textos persuasivos, tecnología y sistemas AI."},{"pregunta":"¿Cómo puede Webgo ayudar a mi negocio a vender más?","respuesta":"Webgo utiliza una combinación de velocidad óptima del sitio web, textos persuasivos y tecnología avanzada, incluyendo sistemas AI, para atraer y convertir a los visitantes del sitio web en clientes."},{"pregunta":"¿Cómo se asegura Webgo de que mi sitio web se cargue rápidamente?","respuesta":"Webgo optimiza todas las páginas web que crea para la velocidad. Esto incluye la minificación de los códigos, la optimización de las imágenes y la utilización de una red de entrega de contenidos (CDN) para asegurar una carga rápida del sitio web."},{"pregunta":"¿Cómo utiliza Webgo los textos persuasivos en las páginas web?","respuesta":"Webgo emplea escritores expertos que saben cómo redactar textos que atraen y persuaden a los visitantes del sitio web para que tomen medidas, ya sea hacer una compra, registrarse para recibir un boletín informativo o descargar un recurso."},{"pregunta":"¿Cómo incorpora Webgo la tecnología y los sistemas AI en sus páginas web?","respuesta":"Webgo utiliza sistemas AI para personalizar la experiencia del usuario en las páginas web que crea. Esto puede incluir la personalización del contenido que se muestra a los visitantes en función de su comportamiento anterior, la implementación de chatbots para atender las consultas de los clientes y la utilización de análisis predictivos para optimizar el rendimiento del sitio web."}]}
            />
<BookAppoinment />
<Footer />
    </main>
  );
}
    