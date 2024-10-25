import { RazonesProps } from '@/interfaces/types';

interface CardRazonesProps {
  info: RazonesProps;
}

export default function CardRazones({ info }: CardRazonesProps) {
  return (
    <div className="flex flex-col justify-normal gap-y-2">
      <div className="rounded-full flex items-center justify-center border border-solid border-title-purple w-6 h-6 p-3">
        <p className="text-title-purple font-extrabold text-xs">
          {info.indice}
        </p>
      </div>
      <div className="rounded-3xl shadow-xl shadow-shadowBlue/50 px-7 py-4 h-full border border-solid border-gray-400/50 gap-y-6 flex flex-col w-full">
        <p className="text-title-purple text-2xl select-none font-extrabold">
          {info.titulo}
        </p>
        <p className="select-none text-xl">{info.descripcion}</p>
      </div>
    </div>
  );
}