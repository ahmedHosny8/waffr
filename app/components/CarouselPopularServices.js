import 'swiper/css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import popularServices1 from '../assets/images/popular-services-1.jpg';
import popularServices2 from '../assets/images/popular-services-2.jpg';
import popularServices3 from '../assets/images/popular-services-3.jpg';

function CarouselPopularServices() {
  return (
    <div>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
        className="mySwiper !overflow-visible"
      >
        <SwiperSlide className="!h-80 !w-72 md:!h-96 md:!w-80">
          <div className="relative flex h-full w-full items-end overflow-hidden rounded-lg bg-black bg-opacity-30">
            <Image
              src={popularServices1}
              alt="Populer"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-200">Category</span>
                <p className="text-lg font-bold text-white">Chat GPT Service</p>
              </div>
              <p className="text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-80 !w-72 md:!h-96 md:!w-80">
          <div className="relative flex h-full w-full items-end overflow-hidden rounded-lg bg-black bg-opacity-30">
            <Image
              src={popularServices2}
              alt="Populer"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-200">Category</span>
                <p className="text-lg font-bold text-white">Instapay app</p>
              </div>
              <p className="text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-80 !w-72 md:!h-96 md:!w-80">
          <div className="relative flex h-full w-full items-end overflow-hidden rounded-lg bg-black bg-opacity-30">
            <Image
              src={popularServices3}
              alt="Populer"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-200">Category</span>
                <p className="text-lg font-bold text-white">
                  Online Concultation
                </p>
              </div>
              <p className="text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-80 !w-72 md:!h-96 md:!w-80">
          <div className="relative flex h-full w-full items-end overflow-hidden rounded-lg bg-black bg-opacity-30">
            <Image
              src={popularServices1}
              alt="Populer"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-200">Category</span>
                <p className="text-lg font-bold text-white">Chat GPT Service</p>
              </div>
              <p className="text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-80 !w-72 md:!h-96 md:!w-80">
          <div className="relative flex h-full w-full items-end overflow-hidden rounded-lg bg-black bg-opacity-30">
            <Image
              src={popularServices2}
              alt="Populer"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-200">Category</span>
                <p className="text-lg font-bold text-white">Instapay app</p>
              </div>
              <p className="text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-80 !w-72 md:!h-96 md:!w-80">
          <div className="relative flex h-full w-full items-end overflow-hidden rounded-lg bg-black bg-opacity-30">
            <Image
              src={popularServices3}
              alt="Populer"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-200">Category</span>
                <p className="text-lg font-bold text-white">
                  Online Concultation
                </p>
              </div>
              <p className="text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-80 !w-72 md:!h-96 md:!w-80">
          <div className="relative flex h-full w-full items-end overflow-hidden rounded-lg bg-black bg-opacity-30">
            <Image
              src={popularServices1}
              alt="Populer"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-200">Category</span>
                <p className="text-lg font-bold text-white">Chat GPT Service</p>
              </div>
              <p className="text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-80 !w-72 md:!h-96 md:!w-80">
          <div className="relative flex h-full w-full items-end overflow-hidden rounded-lg bg-black bg-opacity-30">
            <Image
              src={popularServices2}
              alt="Populer"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-200">Category</span>
                <p className="text-lg font-bold text-white">Instapay app</p>
              </div>
              <p className="text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-80 !w-72 md:!h-96 md:!w-80">
          <div className="relative flex h-full w-full items-end overflow-hidden rounded-lg bg-black bg-opacity-30">
            <Image
              src={popularServices3}
              alt="Populer"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-200">Category</span>
                <p className="text-lg font-bold text-white">
                  Online Concultation
                </p>
              </div>
              <p className="text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-80 !w-72 md:!h-96 md:!w-80">
          <div className="relative flex h-full w-full items-end overflow-hidden rounded-lg bg-black bg-opacity-30">
            <Image
              src={popularServices1}
              alt="Populer"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-200">Category</span>
                <p className="text-lg font-bold text-white">Chat GPT Service</p>
              </div>
              <p className="text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-80 !w-72 md:!h-96 md:!w-80">
          <div className="relative flex h-full w-full items-end overflow-hidden rounded-lg bg-black bg-opacity-30">
            <Image
              src={popularServices2}
              alt="Populer"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-200">Category</span>
                <p className="text-lg font-bold text-white">Instapay app</p>
              </div>
              <p className="text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-80 !w-72 md:!h-96 md:!w-80">
          <div className="relative flex h-full w-full items-end overflow-hidden rounded-lg bg-black bg-opacity-30">
            <Image
              src={popularServices3}
              alt="Populer"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-200">Category</span>
                <p className="text-lg font-bold text-white">
                  Online Concultation
                </p>
              </div>
              <p className="text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselPopularServices;
