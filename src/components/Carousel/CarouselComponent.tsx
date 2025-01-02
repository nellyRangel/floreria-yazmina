'use client';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

type CarouselProps = {
  imagesList: StaticImageData[] | string[];
};

export default function CarouselComponent({ imagesList = [] }: CarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-[1200px] h-[600px] flex flex-col items-center justify-center">
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-y-2">
        <Carousel className="w-full h-full" setApi={setApi}>
          <CarouselContent className="h-full">
            {imagesList.map((data, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="p-1 text-center h-full">
                  <Image
                    src={data}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex gap-x-3 items-center justify-center">
          {imagesList.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (api) {
                  api.scrollTo(index);
                }
              }}
              className={`p-1.5 rounded-full ${
                current === index + 1 ? 'bg-dotPurple' : 'bg-gray-600/50'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
