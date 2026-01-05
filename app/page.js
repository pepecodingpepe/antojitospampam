//                <stop stopColor="#eb6e2bff" />
//               <stop offset={1} stopColor="#f08f3fff" />
import React from 'react';
import Image from 'next/image';

// Importar las imágenes
import pirrin from './menu/pirrin.png';

import logotipo from './menu/logotipo.png';

import pampam1 from './menu/pampam1.png';
import pampam2 from './menu/pampam2.png';
import pampam3 from './menu/pampam3.png';
import pampam4 from './menu/pampam4.png';
import pampam5 from './menu/pampam5.png';
import pampam6 from './menu/pampam6.png';

import pampam7 from './menu/pampam7.png';
import pampam8 from './menu/pampam8.png';
import pampam9 from './menu/pampam9.png';
import pampam10 from './menu/pampam10.png';
import pampam11 from './menu/pampam11.png';
import pampam12 from './menu/pampam12.png';

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
    {
    name: 'Menu 7',
    image: pampam7, 
  },
  {
    name: 'Menu 8',
    image: pampam8, 
  },

    {
    name: 'Menu 9',
    image: pampam9, 
  },
  {
    name: 'Menu 10',
    image: pampam10, 
  },
  
    {
    name: 'Menu 11',
    image: pampam11, 
  },
  {
    name: 'Menu 12',
    image: pampam12, 
  },
  
];

const foto = [
  {
    name: 'foto',
    image: pirrin, 
  }
];

const logo = [
  {
    name: 'logo',
    image: logotipo, 
  }
];

export default function Example() {
  return (

<div>

   <div className="relative bg-gray-800 py-16">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-800 lg:block" />
      <div className="mx-auto max-w-7xl bg-[#eb6e2bff]  lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div aria-hidden="true" className="absolute inset-x-0 h-1/2 bg-gray-800 lg:hidden" />
            <div className="mx-auto max-w-md px-6 sm:max-w-3xl  lg:p-0">
              
                                          {logo.map((item) => (
                    <div key={item.name} >

                      <Image
                          src={item.image}
                          alt="logo"
                          width={953}
                          height={952}
                          className="relative aspect-[10/6] w-full rounded-3xl object-cover shadow-2xl sm:aspect-[2/1] lg:aspect-square"
                        
                        />
                        </div>
                        ))}
              
              
            </div>
          </div>

          <div className="relative bg-gradient-to-l from-[#f08f3fff] to-[#eb6e2bff] lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div aria-hidden="true" className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block">
              <svg
                fill="none"
                width={404}
                height={384}
                viewBox="0 0 404 384"
                aria-hidden="true"
                className="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-50" />
                  </pattern>
                </defs>
                <rect fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" width={404} height={384} />
              </svg>
              <svg
                fill="none"
                width={404}
                height={384}
                viewBox="0 0 404 384"
                aria-hidden="true"
                className="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-50" />
                  </pattern>
                </defs>
                <rect fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" width={404} height={384} />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-3 lg:max-w-none lg:p-0 ">
              <h2 id="join-heading" className="text-4xl font-bold tracking-tight text-white">
                Antojitos Pam-Pam
              </h2>
              <div>
              <p className="text-lg text-white">
                ¡Bienvenidos a nuestro menú digital!   
               <br className="hidden md:block"/> 
               Llámanos para realizar un pedido 
              </p>
              </div>
              <a
                href="tel:+526144105147"
                className="block w-full rounded-md border border-transparent bg-white px-5 py-3 
                text-center text-xl font-bold text-slate-900 shadow-md hover:bg-gray-50 
                sm:inline-block sm:w-auto"
              >
                ¡Llámanos ahora!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>



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



      <div className="bg-gradient-to-b from-[#f08f3fff] to-[#eb6e2bff] pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32 dark:bg-gray-900">
            <div className="bg-gray-800 pb-20 sm:pb-24 xl:pb-0 dark:bg-gray-800 dark:outline dark:outline-1 dark:outline-white/5">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-[400px] xl:-mb-8 xl:w-96 xl:flex-none max-h-[400px] lg:max-h-[300px]">
                  <div className="relative aspect-[1.5/1] h-[full] after:absolute after:inset-0 after:rounded-2xl 
                  after:ring-1 after:ring-inset after:ring-white/15 md:-mx-8 xl:mx-0 ">
                   
                            {foto.map((item) => (
                    <div key={item.name} >

                      <Image
                          src={item.image}
                          alt="Pirrín Méndez"
                          width={1904}
                          height={1269}
                          className="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover 
                           shadow-2xl dark:bg-gray-700 dark:shadow-none"
                        
                        />
                        </div>
                        ))}

                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      fill="none"
                      viewBox="0 0 162 128"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                      />
                      <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
                    </svg>
                    <blockquote className="text-xl/6 font-regular  text-white sm:text-2xl/9 dark:text-gray-100">
                      <p>
                        Desde 1975, Antojitos <span className="text-[#f08f3fff] font-semibold">PAM-PAM</span> ha sido guiado 
                        por la visión y el sazón de <span className=" font-bold">Pirrín Méndez</span>, quien 
                        continúa inspirando cada platillo que servimos. 
                        <br />
                          <br />

                        Todo nació con la ilusión de compartir antojitos 
                        auténticos en un espacio familiar, y hoy esa 
                        pasión sigue viva día a día.
                        <br />
                          <br />

                        Aquí cocinamos como lo hemos hecho siempre: 
                        con dedicación, tradición y el orgullo de formar 
                        parte de la memoria gastronómica de Chihuahua. 
                      </p>
                    </blockquote>
                    <figcaption className="mt-8 ">
                      <div className="font-semibold text-white dark:text-gray-100 text-2xl">
                        <span className="text-[#f08f3fff] font-bold">PAM-PAM</span> no es solo un lugar para comer, es un lugar 
                           para sentirte en casa</div>
                      <div className="mt-1 text-gray-400 text-base">Gracias por sentarte a nuestra mesa y ser parte de esta 
                       historia que sigue escribiéndose con cada visita</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
      </div>



</div>


  );
}

