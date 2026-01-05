//                <stop stopColor="#eb6e2bff" />
//               <stop offset={1} stopColor="#f08f3fff" />
import React from 'react';
import Image from 'next/image';

// Importar las imágenes
import pampam1 from './menu/pampam1.png';
import pampam2 from './menu/pampam2.png';
import pampam3 from './menu/pampam3.png';
import pampam4 from './menu/pampam4.png';
import pampam5 from './menu/pampam5.png';
import pampam6 from './menu/pampam6.png';

const menu = [
  {
    name: 'Menu 1',
    image: pampam1, 
  },
  {
    name: 'Menu 2',
    image: pampam2, 
  },

    {
    name: 'Menu 3',
    image: pampam3, 
  },
  {
    name: 'Menu 4',
    image: pampam4, 
  },
  
    {
    name: 'Menu 5',
    image: pampam5, 
  },
  {
    name: 'Menu 6',
    image: pampam6,
  },
];

export default function Example() {
  return (
  <div className="bg-gradient-to-l from-[#f08f3fff] to-[#eb6e2bff] py-4 sm:py-6 md:py-8 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10 
                     grid grid-cols-1 gap-10 sm:gap-12 md:gap-14 lg:gap-x-12 lg:gap-y-14
                     sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {menu.map((item) => (
            <li key={item.name} className="flex justify-center">
              <div className="w-full max-w-[320px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-none">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={641}
                  height={1025}
                  className="w-full h-auto rounded-md object-cover outline outline-1 -outline-offset-1 
                           outline-black/5 dark:outline-white/10
                           shadow-sm"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

