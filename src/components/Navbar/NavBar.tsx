'use client';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import LogoFloreria from '/public/img/logo.svg';

export default function NavBar() {
  const route = useRouter();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function goTo(path: string) {
    route.push(path);
    setMobileMenuOpen(false); // Cierra el menú en móvil al navegar
  }

  return (
    <header className="bg-grisNavBar sticky top-0 z-30 p-2">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl w-full justify-between items-center"
      >
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">Florería Yazmina</span>
            <Image
              src={LogoFloreria}
              alt="Ramo floral"
              className="w-full"
              width={150}
              height={100}
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex gap-x-10">
          <button
            className={`text-sm md:text-2xl text-purple-800 hover:font-semibold select-none ${
              pathname === '/' && 'font-semibold'
            }`}
            onClick={() => goTo('/')}
          >
            Inicio
          </button>

          {/*
          <button
            className={`text-sm md:text-2xl text-purple-800 hover:font-semibold select-none ${
              pathname.includes('SobreNosotros') && 'font-semibold'
            }`}
            onClick={() => goTo('/SobreNosotros')}
          >
            Acerca de Nosotros
          </button>
           */}

          <button
            className={`text-sm md:text-2xl text-purple-800 hover:font-semibold select-none ${
              pathname.includes('Servicios') && 'font-semibold'
            }`}
            onClick={() => goTo('/Servicios')}
          >
            Servicios
          </button>
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end"> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end text-sm md:text-2xl text-purple-800 font-semibold lg:order-last lg:items-center">
          FLORES Y MÁS
        </div>
        {/* </div> */}
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <span className="sr-only">Florería Yazmina</span>
            <Image
              src={LogoFloreria}
              alt="Ramo floral"
              width={150}
              height={70}
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col gap-y-10 py-6">
                <button
                  className={`text-sm md:text-2xl text-purple-800 hover:font-semibold select-none ${
                    pathname === '/' && 'font-semibold'
                  }`}
                  onClick={() => goTo('/')}
                >
                  Inicio
                </button>
                <button
                  className={`text-sm md:text-2xl text-purple-800 hover:font-semibold select-none ${
                    pathname.includes('SobreNosotros') && 'font-semibold'
                  }`}
                  onClick={() => goTo('/SobreNosotros')}
                >
                  Acerca de Nosotros
                </button>
                <button
                  className={`text-sm md:text-2xl text-purple-800 hover:font-semibold select-none ${
                    pathname.includes('Servicios') && 'font-semibold'
                  }`}
                  onClick={() => goTo('/Servicios')}
                >
                  Servicios
                </button>
              </div>
              <div className="text-sm md:text-2xl text-purple-800 font-semibold lg:order-last lg:flex lg:items-center text-center py-4">
                FLORES Y MÁS
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
