import { useRef, useState } from "react";
import { NavBar } from "./components/NavBar";
import Header from "./components/Header";
import { ServiceCard } from "./components/ServiceCard";
import { Ventana } from "./components/Ventana";
import { RedesSociales } from "./components/RedesSociales";
import { Separador } from "./components/Separador";
import { SobreNosotros } from "./components/SobreNosotros";
import { Whatsapp } from "./components/Whatsapp";
import Footer from "./components/Footer";
import CasoExito from "./components/CasoExito";
import { Flecha } from "./components/Flecha";

export default function App() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const redesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const casosRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [navbarAbierto, setNavbarAbierto] = useState(false);
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #000000ff 80%, #820ba7ff)",
      }}
    >
      <Whatsapp />
      <Flecha />

      <NavBar
        onGoServices={() =>
          scrollToSection(servicesRef as React.RefObject<HTMLDivElement>)
        }
        onGoAbout={() =>
          scrollToSection(aboutRef as React.RefObject<HTMLDivElement>)
        }
        onGoRedes={() =>
          scrollToSection(redesRef as React.RefObject<HTMLDivElement>)
        }
        onGoContact={() =>
          scrollToSection(contactRef as React.RefObject<HTMLDivElement>)
        }
        onGoCasos={() =>
          scrollToSection(casosRef as React.RefObject<HTMLDivElement>)
        }
        onToggleNavbar={setNavbarAbierto}
      />
      <Ventana
        onFinishInstall={() => scrollToSection(servicesRef)}
        desplazado={navbarAbierto}
      />
      <Header />

      <div ref={servicesRef}>
        <Separador id="servicios" title="Nuestras Soluciones" />
        <div className="container d-flex flex-wrap justify-content-center gap-4 my-5">
          <ServiceCard
            title="Páginas WEB"
            description={
              <>
                <p>
                  Hoy en día, una página web es la puerta de entrada al mundo
                  digital para cualquier negocio o emprendimiento. No se trata
                  solo de tener presencia en internet, sino de proyectar una
                  imagen profesional que genere confianza y credibilidad en los
                  clientes. Una web moderna permite mostrar productos, servicios
                  e información de manera clara, optimizada y accesible desde
                  cualquier dispositivo. Además, se convierte en un canal de
                  comunicación disponible las 24 horas, capaz de atraer nuevos
                  clientes mediante estrategias de posicionamiento en buscadores
                  (SEO) y de integrarse con herramientas de marketing digital.
                  La clave está en el diseño funcional, la velocidad de carga,
                  la seguridad y la experiencia del usuario.
                </p>
                <p>
                  Más allá de la estética, un sitio web debe estar orientado a
                  resultados concretos. Una página bien desarrollada facilita
                  procesos como la generación de leads, la interacción con
                  clientes y la venta de productos o servicios. La integración
                  de chats en línea, formularios de contacto, pasarelas de pago
                  y catálogos digitales amplía las oportunidades comerciales.
                  Además, contar con un sitio adaptable y escalable asegura que
                  el negocio pueda crecer y actualizarse sin complicaciones. En
                  un mercado cada vez más competitivo, invertir en una página
                  web no es un gasto, es una estrategia que marca la diferencia
                  entre destacar o quedar atrás.
                </p>
              </>
            }
            img="/card-icon-1.png"
          />

          <ServiceCard
            title="Aplicaciones Móviles"
            description={
              <>
                <p>
                  Las aplicaciones móviles se han convertido en una herramienta
                  clave para empresas que buscan cercanía y fidelización con sus
                  clientes. A través de una app, las marcas ofrecen una
                  experiencia personalizada, directa y ágil, con beneficios como
                  notificaciones instantáneas, acceso sin conexión y funciones
                  exclusivas que mejoran la interacción. Con el crecimiento del
                  uso de smartphones, una aplicación no solo amplía la presencia
                  digital de una empresa, sino que también la posiciona como
                  innovadora y enfocada en las necesidades del usuario.
                </p>
                <p>
                  El desarrollo de aplicaciones móviles no es exclusivo de
                  grandes corporaciones: las pequeñas y medianas empresas
                  también aprovechan este recurso para optimizar procesos y
                  abrir nuevos canales de venta. Una app bien diseñada es
                  intuitiva, segura y escalable, lo que permite integrar
                  sistemas de pago, reservas, seguimiento de pedidos y análisis
                  de datos del cliente. De esta forma, la empresa obtiene
                  información valiosa para mejorar su oferta y anticipar
                  necesidades. En un mundo donde la inmediatez define la
                  preferencia del consumidor, una aplicación móvil se convierte
                  en una inversión estratégica que garantiza cercanía,
                  diferenciación y crecimiento sostenido.
                </p>
              </>
            }
            img="/card-icon-2.png"
          />

          <ServiceCard
            title="Ciberseguridad"
            description={
              <>
                <p>
                  La ciberseguridad es indispensable en un entorno digital cada
                  vez más vulnerable a ataques informáticos. Malware, phishing,
                  robo de datos y vulnerabilidades en sistemas pueden afectar la
                  operación, la confianza y la reputación de cualquier empresa.
                  Implementar medidas de seguridad, como firewalls, encriptación
                  de datos y autenticación multifactor, es fundamental para
                  proteger la información sensible y asegurar la continuidad del
                  negocio. La prevención y detección temprana de amenazas evita
                  pérdidas económicas y daños legales, a la vez que fortalece la
                  confianza de los clientes.
                </p>
                <p>
                  Sin embargo, la ciberseguridad no depende únicamente de
                  herramientas tecnológicas: la capacitación del personal y la
                  adopción de buenas prácticas digitales son igual de
                  importantes. Un solo error humano puede comprometer toda la
                  infraestructura. Por ello, auditorías periódicas, simulaciones
                  de ataques y programas de concienciación son clave para
                  minimizar riesgos. Invertir en seguridad informática no es un
                  gasto, sino una estrategia de protección que permite a las
                  organizaciones crecer de manera confiable en un mundo digital.
                </p>
              </>
            }
            img="/card-icon-3.png"
          />

          <ServiceCard
            title="Consultorías"
            description={
              <>
                <p>
                  Las consultorías tecnológicas son el aliado ideal para
                  empresas que desean innovar y optimizar sus procesos en un
                  entorno de transformación digital. Un consultor analiza las
                  necesidades del negocio y propone soluciones adaptadas, desde
                  la implementación de software y migraciones a la nube, hasta
                  estrategias de ciberseguridad o comercio electrónico. El valor
                  está en contar con una visión externa, objetiva y
                  especializada que guía a la empresa hacia la eficiencia y la
                  competitividad.
                </p>
                <p>
                  Además, una consultoría ayuda a evitar inversiones
                  innecesarias o el uso de herramientas poco efectivas. Gracias
                  a un diagnóstico preciso, las organizaciones pueden planificar
                  mejor sus proyectos, reducir costos y tomar decisiones
                  informadas. Ya sea para actualizar su infraestructura
                  tecnológica, mejorar la gestión de datos o integrar nuevas
                  plataformas, el acompañamiento de expertos asegura resultados
                  concretos y alineados con los objetivos de la empresa. La
                  consultoría se convierte así en una inversión estratégica que
                  impulsa la innovación y el crecimiento sostenible.
                </p>
              </>
            }
            img="/card-icon-4.png"
          />

          <ServiceCard
            title="E-Commerce"
            description={
              <>
                <p>
                  El comercio electrónico es hoy uno de los principales motores
                  de crecimiento empresarial. Tener una tienda en línea permite
                  vender productos o servicios sin límites de tiempo ni
                  geografía, ofreciendo a los clientes comodidad, rapidez y
                  seguridad. Un e-commerce bien diseñado garantiza una
                  experiencia de compra fluida, con catálogos atractivos,
                  procesos de pago confiables y envíos automatizados. Para las
                  empresas, significa abrir un canal de ventas adicional que
                  puede superar incluso al físico, y que se complementa con
                  estrategias de marketing digital como promociones y campañas
                  personalizadas.
                </p>
                <p>
                  Lo más valioso del e-commerce es su capacidad de adaptarse a
                  negocios de cualquier tamaño. Desde emprendedores que inician
                  con pocos productos hasta grandes empresas con miles de
                  referencias, todos pueden beneficiarse de este modelo. La
                  integración con redes sociales, pasarelas de pago y sistemas
                  de gestión de inventario permite escalar el negocio y
                  optimizar resultados. En un mercado competitivo, no estar en
                  el comercio electrónico es perder oportunidades; invertir en
                  él es asegurar un crecimiento sostenible y mayor cercanía con
                  los clientes.
                </p>
              </>
            }
            img="/card-icon-5.png"
          />

          <ServiceCard
            title="Digitalización"
            description={
              <>
                <p>
                  La digitalización consiste en transformar procesos
                  tradicionales en soluciones apoyadas por la tecnología, con el
                  objetivo de mejorar la eficiencia y reducir costos.
                  Automatizar tareas, implementar sistemas en la nube y
                  gestionar datos en tiempo real permite a las empresas ser más
                  ágiles y competitivas. Este cambio no solo optimiza la
                  operación interna, sino que también ofrece una mejor
                  experiencia al cliente, que recibe respuestas más rápidas y
                  servicios adaptados a sus necesidades.
                </p>
                <p>
                  No se trata únicamente de grandes corporaciones; las pequeñas
                  y medianas empresas también obtienen enormes beneficios al
                  digitalizarse. Mejor comunicación interna, reducción de
                  errores humanos y mayor control de recursos son solo algunas
                  de las ventajas. Además, la digitalización abre la puerta a
                  tecnologías avanzadas como inteligencia artificial y análisis
                  predictivo. En un mercado en constante cambio, apostar por la
                  digitalización no es una opción, es la clave para mantenerse
                  vigente y crecer con solidez.
                </p>
              </>
            }
            img="/card-icon-6.png"
          />
        </div>
      </div>

      <div ref={aboutRef}>
        <Separador title="Sobre Nosotros" />
        <SobreNosotros />
      </div>

      <div ref={casosRef}>
        <Separador title="Casos de Éxito" />
        {/* Aquí tus casos */}
        <CasoExito />
      </div>

      <div ref={redesRef}>
        <Separador title="Redes Sociales" />
        <RedesSociales />
      </div>

      <Footer ref={contactRef} />
    </div>
  );
}
