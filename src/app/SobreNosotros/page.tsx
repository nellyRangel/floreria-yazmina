import CardRazones from '@/components/CardsRazones/CardRazones';
import { RazonesProps } from '@/interfaces/types';
import Image from 'next/image';

export default function Page() {
  const razones: RazonesProps[] = [
    {
      indice: 1,
      titulo: 'Flores Frescas y de Calidad',
      descripcion:
        'Trabajamos directamente con los mejores proveedores locales, asegurándonos de que cada flor que utilizamos esté en su punto máximo de frescura y belleza.',
    },
    {
      indice: 4,
      titulo: 'Atención al Cliente Excepcional',
      descripcion:
        'Nuestro equipo está disponible para ayudarte con cualquier duda o solicitud, brindando una atención cercana y amigable para hacer tu experiencia aún más especial.',
    },
    {
      indice: 2,
      titulo: 'Diseños Personalizados',
      descripcion:
        'Sabemos que cada ocasión es única, por eso nos especializamos en crear arreglos completamente personalizados, adaptados a tus gustos y necesidades.',
    },
    {
      indice: 5,
      titulo: 'Compromiso con la Sostenibilidad',
      descripcion:
        'Estamos comprometidos con el medio ambiente, por lo que nos esforzamos por utilizar prácticas ecológicas en todos nuestros procesos, desde el empaquetado hasta la entrega.',
    },
    {
      indice: 3,
      titulo: 'Entrega Puntual y Segura',
      descripcion:
        'La satisfacción de nuestros clientes es nuestra prioridad. Nos aseguramos de que cada pedido llegue a tiempo y en perfectas condiciones, garantizando una experiencia impecable.',
    },
    {
      indice: 6,
      titulo: 'Variedad de Ocasiones y Estilos',
      descripcion:
        'Desde bodas hasta aniversarios o simplemente para alegrar tu día, ofrecemos diseños florales adaptados a cualquier evento y estilo.',
    },
  ];

  const valores: RazonesProps[] = [
    {
      titulo: 'Pasión por el detalle',
      descripcion:
        'Cada flor es elegida cuidadosamente y cada diseño es creado con amor y dedicación.',
    },
    {
      titulo: 'Innovación constante',
      descripcion:
        'Siempre estamos buscando nuevas formas de sorprender a nuestros clientes con diseños frescos y modernos.',
    },
    {
      titulo: 'Compromiso con la calidad',
      descripcion:
        'No hacemos concesiones en la calidad de nuestras flores ni en el servicio que ofrecemos.',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Sección de Presentación */}
      <section className="relative bg-white">
        <div className="flex flex-col w-full justify-center items-end bg-moradoTop">
          {/* Imagen de fondo */}
          <Image
            src="/img/bouquet2.svg"
            alt="Ramo floral"
            className="w-full object-cover"
            width={1200}
            height={600}
            layout="responsive"
          />

          {/* SVG decorativo */}
          <div className="absolute bottom-0 right-0 z-10 hidden md:block">
            <Image
              src="/img/Vector2.svg"
              alt="Figura abstracta"
              className="w-[500px] h-auto opacity-100 md:w-[700px] lg:w-[900px]"
              width={900}
              height={900}
            />
          </div>

          {/* Texto principal (visible solo en pantallas medianas y grandes) */}
          <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-2 md:right-4 md:bottom-16 lg:right-8 lg:bottom-20 z-20 hidden md:flex flex-col items-end w-full max-w-md px-4 sm:px-6 md:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-700 font-PlayfairDisplay whitespace-nowrap">
              Acerca de Nosotros
            </h2>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl text-white text-end py-2 sm:py-4 md:py-8">
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
          <h2 className="text-xl font-bold text-purple-700">
            Acerca de Nosotros
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Nos apasiona el arte floral, y eso se refleja en cada uno de
            nuestros arreglos. Ya sea para una boda, un cumpleaños o simplemente
            para alegrar tu día, nuestras flores no solo embellecen, sino que
            comunican lo que las palabras a veces no pueden.
          </p>
        </div>
      </section>

      {/* Sección "¿Por qué elegirnos?" */}
      <section className="bg-white py-16">
        <div className="container mx-auto w-full flex flex-col justify-center items-center">
          <h3 className="text-5xl max-md:text-3xl font-semibold text-purple-700 mb-12 text-center font-PlayfairDisplay">
            ¿Por qué elegirnos?
          </h3>
          <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {razones.map((razon, idx) => (
              <CardRazones key={idx} info={razon} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección "Nuestros Valores" */}
      <section className="bg-fondoLila py-16 relative h-full">
        {/* <Image
          src={FloresIcono}
          alt=""
          className="absolute right-0 -top-5 h-[400px]"
        ></Image> */}
        <div className="container mx-auto px-6 max-md:px-5">
          <h3 className="text-center text-5xl max-md:text-3xl font-semibold text-white mb-8 font-PlayfairDisplay">
            Nuestros valores
          </h3>
          <div className="flex flex-col gap-y-5 w-full">
            {valores.map((valor, idx) => (
              <div
                key={idx}
                className={`text-purple-800 flex flex-col gap-y-3 ${idx % 2 == 0 ? 'items-start' : 'items-end'}`}
              >
                <h4 className={`font-bold font-PlayfairDisplay text-4xl`}>
                  {valor.titulo}
                </h4>
                <p
                  className={`text-2xl text-white w-3/5 ${idx % 2 == 0 ? 'text-start' : 'text-end'}`}
                >
                  {valor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
