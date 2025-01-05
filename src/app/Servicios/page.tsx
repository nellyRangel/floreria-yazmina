import CarouselComponent from '@/components/Carousel/CarouselComponent';
import Image from 'next/image';

import img1 from '/public/img/bouquet2.svg';
import imgMeeting from '/public/img/image-bg-6.svg';

interface ServicioProps {
  titulo: string;
  descripcion: string;
  imagen: string;
}

const servicios: ServicioProps[] = [
  {
    titulo: 'Arreglos Florales Personalizados',
    descripcion:
      'Creamos arreglos únicos para bodas, aniversarios, cumpleaños y cualquier evento especial. Díganos tus ideas y las haremos realidad con flores frescas y un diseño exclusivo.',
    imagen: '/img/image2.svg',
  },
  {
    titulo: 'Entrega a Domicilio',
    descripcion:
      'Sorprende a tus seres queridos en la sala de su casa. Ofrecemos entregas rápidas y seguras, asegurándonos de que tus flores lleguen en perfectas condiciones en el momento preciso.',
    imagen: '/img/image3.svg',
  },
  {
    titulo: 'Decoración de Eventos',
    descripcion:
      'Transformamos cualquier espacio en un escenario espectacular con nuestras flores. Ya sea una boda, una fiesta corporativa o un evento íntimo, nuestro equipo se encarga de cada detalle floral.',
    imagen: '/img/image4.svg',
  },
  {
    titulo: 'Asesoría para Bodas y Eventos Especiales',
    descripcion:
      'Te ayudamos a diseñar la decoración floral perfecta para tu boda o cualquier evento importante. Nuestro equipo de expertos trabaja contigo para crear una atmósfera única que refleje tu estilo y visión.',
    imagen: '/img/image5.svg',
  },
];

export default function Servicios() {
  const imagesListTest = [imgMeeting, img1];

  return (
    <div className=" bg-gray-50">
      {/* Sección de Presentación */}
      <section className="relative">
        <div className="relative w-full flex flex-col justify-center items-start bg-moradoTop">
          {/* Imagen de fondo */}
          <Image
            src="/img/image-bg-6.svg"
            alt="Ramo floral"
            className="w-full"
            width={1200}
            height={600}
            layout="responsive"
          />

          {/* SVG decorativo */}
          <div className="absolute bottom-0 left-0 z-10">
            <Image
              src="/img/Vector3.svg"
              alt="Figura abstracta"
              className="w-[500px] h-auto opacity-100 md:w-[700px] lg:w-[900px]"
              width={900}
              height={900}
            />
          </div>

          {/* Contenido de la sección Servicios */}
          <div className="absolute bottom-10 left-10 md:left-16 md:bottom-16 lg:left-20 lg:bottom-20 z-20 flex flex-col items-start w-full max-w-md px-4 md:px-0">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-purple-700 font-PlayfairDisplay">
              Servicios
            </h2>
            <p className="text-md md:text-lg lg:text-xl text-white text-start py-4 md:py-8">
              Nos apasiona el arte floral, y eso se refleja en cada uno de
              nuestros arreglos. Ya sea para una boda, un cumpleaños o
              simplemente para alegrar tu día, nuestras flores no solo
              embellecen, sino que comunican lo que las palabras a veces no
              pueden.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Bodas */}
      <section className="bg-fondoLila py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-semibold text-white text-center mb-12 font-PlayfairDisplay">
            Bodas
          </h3>

          <div className="w-full flex flex-col">
            <div className="relative w-full flex flex-col items-center justify-center gap-y-2">
              <CarouselComponent imagesList={imagesListTest} />
            </div>
          </div>

          <div className="w-full flex flex-col items-center mt-8">
            <p className="text-[25px] text-white text-center max-w-4xl leading-[1.5]">
              Haz que tu gran día sea inolvidable. Creamos decoraciones florales
              que transforman cualquier espacio en un escenario de ensueño.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Bautizos */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-semibold text-purple-700 text-center mb-12 font-PlayfairDisplay">
            Bautizos
          </h3>

          <div className="w-full flex flex-col">
            <div className="relative w-full flex flex-col items-center justify-center gap-y-2">
              <CarouselComponent imagesList={imagesListTest} />
            </div>
          </div>

          <div className="w-full flex flex-col items-center mt-8">
            <p className="text-[25px] text-gray-800 text-center max-w-4xl leading-[1.5]">
              Celebra nuevas bendiciones con arreglos delicados y llenos de
              significado. Flores perfectas para un día tan especial.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Aniversarios */}
      <section className="bg-fondoLila py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-semibold text-white text-center mb-12 font-PlayfairDisplay">
            Aniversarios
          </h3>

          <div className="w-full flex flex-col">
            <div className="relative w-full flex flex-col items-center justify-center gap-y-2">
              <CarouselComponent imagesList={imagesListTest} />
            </div>
          </div>

          <div className="w-full flex flex-col items-center mt-8">
            <p className="text-[25px] text-white text-center max-w-4xl leading-[1.5]">
              Celebra el amor con flores únicas. Diseñamos arreglos
              personalizados que cuentan tu historia de amor.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Eventos Sociales */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-semibold text-purple-700 text-center mb-12 font-PlayfairDisplay">
            Eventos Sociales
          </h3>

          <div className="w-full flex flex-col">
            <div className="relative w-full flex flex-col items-center justify-center gap-y-2">
              <CarouselComponent imagesList={imagesListTest} />
            </div>
          </div>

          <div className="w-full flex flex-col items-center mt-8">
            <p className="text-[25px] text-gray-800 text-center max-w-4xl leading-[1.5]">
              Dale vida a tus eventos. Nuestros arreglos florales añaden un
              toque especial a cualquier celebración.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
