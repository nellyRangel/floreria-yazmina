import CarouselComponent from '@/components/Carousel/CarouselComponent';
import Image from 'next/image';

import img1 from '/public/img/bouquet2.svg';
import imgMeeting from '/public/img/image-bg-6.svg';

//BODAS
import bodas1 from '/public/img/bodas/boda1.jpg';
import bodas10 from '/public/img/bodas/boda10.jpg';
import bodas11 from '/public/img/bodas/boda11.jpg';
import bodas12 from '/public/img/bodas/boda12.jpg';
import bodas2 from '/public/img/bodas/boda2.jpg';
import bodas3 from '/public/img/bodas/boda3.jpg';
import bodas4 from '/public/img/bodas/boda4.jpg';
import bodas5 from '/public/img/bodas/boda5.jpg';
//import bodas6 from '/public/img/bodas/boda6.jpg';
import bodas7 from '/public/img/bodas/boda7.jpg';
import bodas8 from '/public/img/bodas/boda8.jpg';
import bodas9 from '/public/img/bodas/boda9.jpg';

//IGLESIA
import iglesia1 from '/public/img/iglesia/iglesia1.jpg';
import iglesia10 from '/public/img/iglesia/iglesia10.jpg';
import iglesia2 from '/public/img/iglesia/iglesia2.jpg';
import iglesia3 from '/public/img/iglesia/iglesia3.jpg';
import iglesia4 from '/public/img/iglesia/iglesia4.jpg';
import iglesia5 from '/public/img/iglesia/iglesia5.jpg';
import iglesia6 from '/public/img/iglesia/iglesia6.jpg';
import iglesia7 from '/public/img/iglesia/iglesia7.jpg';
import iglesia8 from '/public/img/iglesia/iglesia8.jpg';
import iglesia9 from '/public/img/iglesia/iglesia9.jpg';

//RAMOS
import ramos1 from '/public/img/ramos/ramo1.jpg';
import ramos2 from '/public/img/ramos/ramo2.jpg';
import ramos3 from '/public/img/ramos/ramo3.jpg';
import ramos4 from '/public/img/ramos/ramo4.jpg';
import ramos5 from '/public/img/ramos/ramo5.jpg';
import ramos6 from '/public/img/ramos/ramo6.jpg';

//VARIOS
import varios1 from '/public/img/varios/varios1.jpg';
import varios2 from '/public/img/varios/varios2.jpg';
import varios3 from '/public/img/varios/varios3.jpg';
import varios4 from '/public/img/varios/varios4.jpg';
import varios5 from '/public/img/varios/varios5.jpg';
import varios6 from '/public/img/varios/varios6.jpg';
import varios7 from '/public/img/varios/varios7.jpg';
import varios8 from '/public/img/varios/varios8.jpg';
import varios9 from '/public/img/varios/varios9.jpg';

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
  const imageListBodas = [
    bodas1,
    bodas2,
    bodas3,
    bodas4,
    bodas5,
    bodas7,
    bodas8,
    bodas9,
    bodas10,
    bodas11,
    bodas12,
  ];

  const imageListIglesia = [
    iglesia1,
    iglesia2,
    iglesia3,
    iglesia4,
    iglesia5,
    iglesia6,
    iglesia7,
    iglesia8,
    iglesia9,
    iglesia10,
  ];

  const imageListRamos = [ramos1, ramos2, ramos3, ramos4, ramos5, ramos6];

  const imageListVarios = [
    varios1,
    varios2,
    varios3,
    varios4,
    varios5,
    varios6,
    varios7,
    varios8,
    varios9,
  ];

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

          {/* SVG decorativo (visible solo en pantallas medianas y grandes) */}
          <div className="absolute bottom-0 left-0 z-10 hidden md:block">
            <Image
              src="/img/Vector3.svg"
              alt="Figura abstracta"
              className="w-[500px] h-auto opacity-100 md:w-[700px] lg:w-[900px]"
              width={900}
              height={900}
            />
          </div>

          {/* Contenido de la sección Servicios (visible solo en pantallas medianas y grandes) */}
          <div className="absolute bottom-10 left-10 md:left-16 md:bottom-16 lg:left-20 lg:bottom-20 z-20 hidden md:flex flex-col items-start w-full max-w-md px-4 md:px-0">
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

        {/* Contenido alternativo para pantallas pequeñas */}
        <div className="block md:hidden p-6">
          <h2 className="text-xl font-bold text-purple-700">Servicios</h2>
          <p className="text-sm text-slate-500 mt-2">
            Nos apasiona el arte floral, y eso se refleja en cada uno de
            nuestros arreglos. Ya sea para una boda, un cumpleaños o simplemente
            para alegrar tu día, nuestras flores no solo embellecen, sino que
            comunican lo que las palabras a veces no pueden.
          </p>
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
              <CarouselComponent imagesList={imageListBodas} />
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
            Iglesias
          </h3>

          <div className="w-full flex flex-col">
            <div className="relative w-full flex flex-col items-center justify-center gap-y-2">
              <CarouselComponent imagesList={imageListIglesia} />
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
            Ramos
          </h3>

          <div className="w-full flex flex-col">
            <div className="relative w-full flex flex-col items-center justify-center gap-y-2">
              <CarouselComponent imagesList={imageListRamos} />
            </div>
          </div>

          <div className="w-full flex flex-col items-center mt-8">
            <p className="text-[25px] text-white text-center max-w-4xl leading-[1.5]">
              Expresa tus sentimientos con ramos florales únicos. Diseñamos cada
              arreglo con dedicación para transmitir belleza y emoción en cada
              detalle.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Eventos Sociales */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-semibold text-purple-700 text-center mb-12 font-PlayfairDisplay">
            Varios
          </h3>

          <div className="w-full flex flex-col">
            <div className="relative w-full flex flex-col items-center justify-center gap-y-2">
              <CarouselComponent imagesList={imageListVarios} />
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
