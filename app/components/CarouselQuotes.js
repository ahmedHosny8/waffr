import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import example2 from '../assets/images/subcategory-2.jpeg';
import feedback1 from '../assets/images/q-1.jpeg';
import feedback2 from '../assets/images/q-2.jpeg';
import feedback3 from '../assets/images/q-3.jpeg';
import feedback4 from '../assets/images/q-4.jpeg';
import quote1 from '../assets/svg/quote-1.svg';
import quote2 from '../assets/svg/quote-2.svg';

function CarouselQuotes() {
  return (
    <div className="carouselQuotes relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[80%] w-full">
            <div className="flex items-center justify-center">
              <div className="relative h-[240px] w-[375px]">
                <Image
                  src={feedback1}
                  alt="Feedback1"
                  width={144}
                  height={144}
                  className="absolute left-32 top-0 h-16 w-16 rounded-full border border-gray-900 object-cover object-center"
                />
                <Image
                  src={feedback2}
                  alt="Feedback1"
                  width={144}
                  height={144}
                  className="absolute left-10 top-16 h-16 w-16 rounded-full border border-gray-900 object-cover object-center"
                />
                <Image
                  src={feedback3}
                  alt="Feedback1"
                  width={144}
                  height={144}
                  className="absolute left-32 top-24 h-32 w-32 rounded-full border border-gray-900 object-cover object-center"
                />
                <Image
                  src={feedback4}
                  alt="Feedback1"
                  width={144}
                  height={144}
                  className="absolute left-[270px] top-16 h-16 w-16 rounded-full border border-gray-900 object-cover object-center"
                />
              </div>
            </div>
            <div className="p-4 text-center text-xl font-bold md:text-3xl">
              John Carter ,
              <span className="text-brand-1 ">UI / UX Designer</span>
            </div>
            <div className="mx-auto max-w-3xl">
              <Image src={quote1} alt="Quote" width={32} />
              <p className="text-lg">
                It was a very special experience for me and it helped me a lot
                in my business and I achieved many successes through this
                service and It was a very special experience for me a
              </p>
              <Image src={quote2} alt="Quote" width={32} className="ml-auto" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[80%] w-full">
            <Image
              src={example2}
              alt="Example"
              priority
              className="block h-full w-full object-cover object-center"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselQuotes;
