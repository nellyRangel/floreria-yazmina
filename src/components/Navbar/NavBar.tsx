'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function NavBar() {
  const route = useRouter();
  const pathname = usePathname();
  console.log(pathname.includes('SobreNosotros'));
  function goTo(path: string) {
    route.push(path);
  }
  return (
    <div className="w-full sticky top-0 z-20 flex justify-between bg-grisNavBar p-8 items-center">
      <div>
        <Image
          src="/img/logo.svg"
          alt="Ramo floral"
          className="w-full"
          width={300}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="flex gap-x-10">
        <button
          className={`text-2xl text-purple-800 hover:font-semibold select-none ${pathname == '/' && 'font-semibold'}`}
          onClick={() => goTo('/')}
        >
          Inicio
        </button>
        <button
          className={`text-2xl text-purple-800 hover:font-semibold select-none ${pathname.includes('SobreNosotros') && 'font-semibold'}`}
          onClick={() => goTo('/SobreNosotros')}
        >
          Acerca de Nosotros
        </button>
        <button
          className={`text-2xl text-purple-800 hover:font-semibold select-none ${pathname.includes('Servicios') && 'font-semibold'}`}
          onClick={() => goTo('/Servicios')}
        >
          Servicios
        </button>
      </div>

      <div className="text-2xl text-purple-800  'font-semibold'">
        FLORES Y MÁS
      </div>
    </div>
  );
}

/*
<Button
        text="Contacto"
        className="bg-moradoPrincipal rounded-full text-white px-10 py-3"
        click={() => {}}
      ></Button>*/
