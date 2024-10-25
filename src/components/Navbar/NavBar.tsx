'use client';
import { usePathname, useRouter } from 'next/navigation';
import Button from '../Button/Button';

export default function NavBar() {
  const route = useRouter();
  const pathname = usePathname();
  console.log(pathname.includes('SobreNosotros'));
  function goTo(path: string) {
    route.push(path);
  }
  return (
    <div className="w-full sticky top-0 z-20 flex justify-between bg-grisNavBar p-8 items-center">
      <div>Logo</div>
      <div className="flex gap-x-10">
        <p
          className={`text-2xl text-purple-800 hover:font-semibold cursor-pointer select-none ${pathname == '/' && 'font-semibold'}`}
          onClick={() => goTo('/')}
        >
          Home
        </p>
        <p
          className={`text-2xl text-purple-800 hover:font-semibold cursor-pointer select-none ${pathname.includes('SobreNosotros') && 'font-semibold'}`}
          onClick={() => goTo('/SobreNosotros')}
        >
          Acerca de Nosotros
        </p>
        <p
          className={`text-2xl text-purple-800 hover:font-semibold cursor-pointer select-none ${pathname.includes('Servicios') && 'font-semibold'}`}
          onClick={() => goTo('/Servicios')}
        >
          Servicios
        </p>
      </div>
      <Button
        text="Contacto"
        className="bg-moradoPrincipal rounded-full text-white px-10 py-3"
        click={() => {}}
      ></Button>
    </div>
  );
}
