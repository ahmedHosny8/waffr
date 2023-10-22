'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CarouselQuotes from './components/CarouselQuotes';
import CarouselPopularServices from './components/CarouselPopularServices';
import Accordion from './components/Accordion';
import heroImage from './assets/images/hero.png';
import search from './assets/svg/search.svg';
import health from './assets/images/health.jpg';
import family from './assets/images/family.jpg';
import work from './assets/images/work.jpg';
import wealth from './assets/images/wealth.jpg';
import leisure from './assets/images/leisure.jpg';
import community from './assets/images/community.jpg';
import subcategory1 from './assets/images/subcategory-1.jpeg';
import subcategory2 from './assets/images/subcategory-2.jpeg';
import subcategory3 from './assets/images/subcategory-3.jpeg';
import subcategory4 from './assets/images/subcategory-4.jpeg';
import subcategory5 from './assets/images/subcategory-5.jpeg';
import subcategory6 from './assets/images/subcategory-6.jpeg';
import subcategory7 from './assets/images/subcategory-7.jpeg';
import subcategory8 from './assets/images/subcategory-8.jpeg';
import subcategory9 from './assets/images/subcategory-9.jpeg';
import subcategory10 from './assets/images/subcategory-10.jpeg';
import subcategory11 from './assets/images/subcategory-11.jpeg';
import subcategory12 from './assets/images/subcategory-12.jpeg';

function HomePage() {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Do Something
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const items = [
    {
      id: 'wfwef',
      label: 'How can i search for any  service ?',
      content:
        'Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed. Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed.',
    },
    {
      id: 'sffew',
      label: 'How can i search for any  service ?',
      content:
        'Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed. Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed.',
    },
    {
      id: 'dfrgh',
      label: 'How can i search for any  service ?',
      content:
        'Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed. Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed.',
    },
    {
      id: 'htrht',
      label: 'How can i search for any  service ?',
      content:
        'Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed. Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed.',
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        <section className="relative h-96 bg-gradient-to-bl from-black/50 to-black/90 lg:h-[32rem]">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
          <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center gap-8 px-4 text-white lg:items-start">
            <h1 className="text-center text-2xl font-bold lg:w-2/3 lg:text-left lg:text-5xl lg:leading-snug">
              Waffr.com is the one-stop solution for a better life
            </h1>
            <form
              className="w-full text-gray-900 lg:w-2/3"
              onSubmit={handleFormSubmit}
            >
              <div className="relative w-full">
                <input
                  className="w-full rounded-full px-4 py-2 text-base"
                  type="text"
                  placeholder="Search for..."
                  value={term}
                  onChange={handleChange}
                />
                <button className="absolute right-0.5 top-1/2 translate-y-[-50%] rounded-full bg-brand-1 p-[9.5px]">
                  <Image src={search} alt="Search" height={18} />
                </button>
              </div>
            </form>
            <div className="flex items-center gap-3">
              <p className="font-bold">Popular :</p>
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="rounded-full border px-4 py-2 text-sm"
                >
                  Chat GPT
                </Link>
                <Link
                  href="#"
                  className="rounded-full border px-4 py-2 text-sm"
                >
                  UX Research
                </Link>
                <Link
                  href="#"
                  className="hidden rounded-full border px-4 py-2 text-sm lg:inline-block"
                >
                  Talking Robot
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-screen-xl px-4">
            <h2 className="mb-8 text-3xl font-bold lg:text-5xl">
              Main Categories
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5  lg:grid-cols-6">
              <Link href="#" className="flex flex-col items-center gap-4">
                <Image
                  src={health}
                  alt="Health"
                  height={200}
                  width={200}
                  className="rounded-lg"
                />
                <span className="text-lg font-bold uppercase text-brand-1">
                  Health
                </span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-4">
                <Image
                  src={family}
                  alt="Family"
                  height={200}
                  width={200}
                  className="rounded-lg"
                />
                <span className="text-lg font-bold uppercase text-brand-1">
                  Family
                </span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-4">
                <Image
                  src={work}
                  alt="Work"
                  height={200}
                  width={200}
                  className="rounded-lg"
                />
                <span className="text-lg font-bold uppercase text-brand-1">
                  Work
                </span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-4">
                <Image
                  src={wealth}
                  alt="Wealth"
                  height={200}
                  width={200}
                  className="rounded-lg"
                />
                <span className="text-lg font-bold uppercase text-brand-1">
                  Wealth
                </span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-4">
                <Image
                  src={leisure}
                  alt="leisure"
                  height={200}
                  width={200}
                  className="rounded-lg"
                />
                <span className="text-lg font-bold uppercase text-brand-1">
                  Leisure
                </span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-4">
                <Image
                  src={community}
                  alt="Community"
                  height={200}
                  width={200}
                  className="rounded-lg"
                />
                <span className="text-lg font-bold uppercase text-brand-1">
                  Community
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-screen-xl px-4">
            <h2 className="mb-8 text-3xl font-bold lg:text-5xl">
              Popular Subcategories
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-gray-100">
                <div className="flex justify-center rounded-lg bg-gray-200 py-4">
                  <span className="text-base font-bold">Health</span>
                </div>
                <div className="grid grid-cols-2 gap-2 px-4 py-6">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory1}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Invironments Intiatives</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory2}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Street Beautification</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory3}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Social Services</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory4}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Health Support</span>
                  </div>
                </div>
                <div className="flex justify-center pb-8 pt-2">
                  <Link
                    href="#"
                    className="text-lg font-bold text-brand-1 underline"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-gray-100">
                <div className="flex justify-center rounded-lg bg-gray-200 py-4">
                  <span className="text-base font-bold">Family</span>
                </div>
                <div className="grid grid-cols-2 gap-2 px-4 py-6">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory5}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Invironments Intiatives</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory6}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Street Beautification</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory7}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Social Services</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory8}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Health Support</span>
                  </div>
                </div>
                <div className="flex justify-center pb-8 pt-2">
                  <Link
                    href="#"
                    className="text-lg font-bold text-brand-1 underline"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-gray-100">
                <div className="flex justify-center rounded-lg bg-gray-200 py-4">
                  <span className="text-base font-bold">Work</span>
                </div>
                <div className="grid grid-cols-2 gap-2 px-4 py-6">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory1}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Invironments Intiatives</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory2}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Street Beautification</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory3}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Social Services</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory4}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Health Support</span>
                  </div>
                </div>
                <div className="flex justify-center pb-8 pt-2">
                  <Link
                    href="#"
                    className="text-lg font-bold text-brand-1 underline"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="hidden rounded-lg bg-gray-100 lg:inline-block">
                <div className="flex justify-center rounded-lg bg-gray-200 py-4">
                  <span className="text-base font-bold">Wealth</span>
                </div>
                <div className="grid grid-cols-2 gap-2 px-4 py-6">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory9}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Invironments Intiatives</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory10}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Street Beautification</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory11}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Social Services</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory12}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Health Support</span>
                  </div>
                </div>
                <div className="flex justify-center pb-8 pt-2">
                  <Link
                    href="#"
                    className="text-lg font-bold text-brand-1 underline"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="hidden rounded-lg bg-gray-100 lg:inline-block">
                <div className="flex justify-center rounded-lg bg-gray-200 py-4">
                  <span className="text-base font-bold">Leisure</span>
                </div>
                <div className="grid grid-cols-2 gap-2 px-4 py-6">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory5}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Invironments Intiatives</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory6}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Street Beautification</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory7}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Social Services</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory8}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Health Support</span>
                  </div>
                </div>
                <div className="flex justify-center pb-8 pt-2">
                  <Link
                    href="#"
                    className="text-lg font-bold text-brand-1 underline"
                  >
                    View more
                  </Link>
                </div>
              </div>
              <div className="hidden rounded-lg bg-gray-100 lg:inline-block">
                <div className="flex justify-center rounded-lg bg-gray-200 py-4">
                  <span className="text-base font-bold">Community</span>
                </div>
                <div className="grid grid-cols-2 gap-2 px-4 py-6">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory9}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Invironments Intiatives</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory10}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Street Beautification</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory11}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Social Services</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={subcategory12}
                      alt="Subcategory"
                      height={144}
                      width={144}
                      className="h-36 w-36 rounded-full object-cover object-center"
                    />
                    <span className="text-sm">Health Support</span>
                  </div>
                </div>
                <div className="flex justify-center pb-8 pt-2">
                  <Link
                    href="#"
                    className="text-lg font-bold text-brand-1 underline"
                  >
                    View more
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center md:hidden">
              <Link
                href="#"
                className="text-1g rounded-full border-2 border-brand-1 px-6 py-2 font-bold text-brand-1"
              >
                See all categories
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-screen-xl px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold lg:text-5xl">
                Popular Services
              </h2>
              <Link
                href="#"
                className="text-lg font-bold text-brand-1 underline"
              >
                View more
              </Link>
            </div>
            <div>
              <CarouselPopularServices />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-screen-xl px-4">
            <h2 className="mb-2 text-center text-3xl font-bold lg:text-5xl">
              Quotes & Values
            </h2>
            <CarouselQuotes />
          </div>
        </section>

        <section className="bg-gray-50 py-14">
          <div className="mx-auto max-w-screen-xl px-4">
            <h2 className="mb-8 text-center text-3xl font-bold md:hidden">
              FAQ
            </h2>
            <h2 className="mb-10 hidden text-center text-3xl font-bold md:block lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto flex w-full items-center justify-center">
              <Accordion items={items} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
