'use client';
import CardRazones from '@/components/CardsRazones/CardRazones';
import CarouselComponent from '@/components/Carousel/CarouselComponent';
import { RazonesProps } from '@/interfaces/types';
import Image from 'next/image';
import img1 from '/public/img/bouquet2.svg';
import imgMeeting from '/public/img/image-bg-6.svg';

const imagesListTest = [imgMeeting, img1];

export default function Home() {
  const sobreNosotros: RazonesProps[] = [
    {
      titulo: 'Flores frescas de calidad superior:',
      descripcion:
        'Trabajamos directamente con proveedores locales para ofrecerte flores frescas y duraderas.',
    },
    {
      titulo: 'Diseños personalizados:',
      descripcion:
        'Creamos arreglos únicos, adaptados a tus gustos y necesidades, para cualquier ocasión.',
    },
    {
      titulo: 'Entrega puntual y segura:',
      descripcion:
        'Nos aseguramos de que tus flores lleguen en perfectas condiciones, justo a tiempo.',
    },
    {
      titulo: 'Sostenibilidad:',
      descripcion:
        'Estamos comprometidos con el medio ambiente, utilizando empaques y prácticas ecológicas.',
    },
    {
      titulo: 'Atención al cliente cercana y amigable:',
      descripcion:
        'Nuestro equipo está siempre dispuesto a asesorarte en cada detalle.',
    },
    {
      titulo: 'Nuestra experiencia:',
      descripcion:
        'Nos avalan años perfeccionando el arte floral para superar las expectativas de nuestros clientes.',
    },
  ];

  const masdatos: RazonesProps[] = [
    {
      indice: 1,
      titulo: 'Flores Frescas y de Calidad',
      descripcion:
        'Trabajamos directamente con los mejores proveedores locales, asegurándonos de que cada flor que utilizamos esté en su punto máximo de frescura y belleza.',
    },
    {
      indice: 2,
      titulo: 'Atención al Cliente Excepcional',
      descripcion:
        'Nuestro equipo está disponible para ayudarte con cualquier duda o solicitud, brindando una atención cercana y amigable para hacer tu experiencia aún más especial.',
    },
    {
      indice: 3,
      titulo: 'Diseños Personalizados',
      descripcion:
        'Sabemos que cada ocasión es única, por eso nos especializamos en crear arreglos completamente personalizados, adaptados a tus gustos y necesidades.',
    },
    {
      indice: 4,
      titulo: 'Compromiso con la Sostenibilidad',
      descripcion:
        'Estamos comprometidos con el medio ambiente, por lo que nos esforzamos por utilizar prácticas ecológicas en todos nuestros procesos, desde el empaquetado hasta la entrega.',
    },
  ];

  return (
    <div className="w-full h-full">
      {/* Sección de Presentación */}
      <section className="relative bg-gray-50">
        <div className="w-full flex flex-col justify-center items-center bg-moradoTop">
          {/* Imagen de fondo */}
          <Image
            src="/img/bouquet.svg"
            alt="Ramo floral"
            className="w-full object-cover"
            width={1200}
            height={600}
            layout="responsive"
          />

          {/* SVG decorativo */}
          <div className="absolute top-0 left-0 z-10">
            <Image
              src="/img/vector1.svg"
              alt="Figura abstracta"
              className="w-[500px] h-auto opacity-100 md:w-[700px] lg:w-[900px]"
              width={900}
              height={900}
            />
          </div>

          {/* Texto principal */}
          <div className="absolute top-8 left-10 md:left-16 lg:left-20 z-20 text-left">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-purple-700 font-PlayfairDisplay">
              Bienvenido
            </h2>
            <p className="text-md md:text-lg lg:text-xl text-white mt-4 max-w-md">
              Transformamos momentos en recuerdos inolvidables con la belleza y
              frescura de nuestras flores. Cada arreglo que creamos está
              diseñado para expresar tus emociones de manera única y especial.
              Ya sea para celebrar, sorprender o simplemente decorar tu espacio,
              tenemos la flor perfecta para ti.
            </p>
          </div>

          {/* Recuadro de contacto */}
          <div className="absolute left-20 bg-white shadow-lg rounded-xl p-6 w-[90%] max-w-sm md:max-w-md z-20">
            <h3 className="text-2xl font-PlayfairDisplay text-purple-700 mb-4 text-center">
              Contáctanos
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-moradoLight rounded-full">
                <div className="flex items-center justify-center w-10 h-10">
                  <Image
                    src="/img/phone.svg"
                    alt="Teléfono"
                    className="w-5 h-5"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-white">(+52) 123-456-7890</span>
              </div>
              <div className="flex items-center space-x-4 bg-moradoLight rounded-full">
                <div className="flex items-center justify-center w-10 h-10">
                  <Image
                    src="/img/envelope.svg"
                    alt="Correo"
                    className="w-5 h-5"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-white">contacto@floreriaejemplo.com</span>
              </div>
              <div className="flex items-center space-x-4 bg-moradoLight rounded-full">
                <div className="flex items-center justify-center w-10 h-10">
                  <Image
                    src="/img/send.svg"
                    alt="WhatsApp"
                    className="w-5 h-5"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-white">(+52) 123-456-7890</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Acerca de Nosotros */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-5xl font-semibold text-purple-700 mb-12 font-PlayfairDisplay">
            Acerca de Nosotros
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sobreNosotros.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-purple-700 font-bold text-lg">
                    {idx + 1}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-purple-700 mb-2">
                  {item.titulo}
                </h4>
                <p className="text-gray-600 text-sm">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-semibold text-purple-700 text-center mb-12 font-PlayfairDisplay">
            Servicios
          </h3>

          <div className="w-full flex flex-col">
            <div className="relative w-full flex flex-col items-center justify-center gap-y-2">
              <CarouselComponent imagesList={imagesListTest} />
            </div>
          </div>
        </div>
      </section>

      {/* Sección "¿Por qué elegirnos?" */}
      <section className="py-16" style={{ backgroundColor: '#C8BCF6' }}>
        <div className="container mx-auto w-full flex flex-col justify-center items-center">
          <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {masdatos.map((razon, idx) => (
              <CardRazones key={idx} info={razon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
