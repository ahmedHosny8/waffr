'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../assets/svg/logo-v2.svg';
import youtube from '../assets/svg/youtube.svg';
import facebook from '../assets/svg/facebook.svg';
import twitter from '../assets/svg/twitter.svg';
import instagram from '../assets/svg/instagram.svg';
import linkedin from '../assets/svg/linkedin.svg';
import email from '../assets/svg/email.svg';
import send from '../assets/svg/send-2.svg';

function Footer() {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Do Something
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <footer className="bg-brand-1  py-6">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between lg:flex-col lg:gap-6">
            <Link href="/">
              <Image
                src={logo}
                alt="Brand Logo"
                height={32}
                priority
                className="lg:h-14 lg:w-auto"
              />
            </Link>
            <div className="flex items-center gap-2">
              <Link href="#">
                <Image
                  src={youtube}
                  alt="Youtube"
                  height={18}
                  className="lg:h-6 lg:w-auto"
                />
              </Link>
              <Link href="#">
                <Image
                  src={facebook}
                  alt="Facebook"
                  height={18}
                  className="lg:h-6 lg:w-auto"
                />
              </Link>
              <Link href="#">
                <Image
                  src={twitter}
                  alt="Twitter"
                  height={18}
                  className="lg:h-6 lg:w-auto"
                />
              </Link>
              <Link href="#">
                <Image
                  src={instagram}
                  alt="Instagram"
                  height={18}
                  className="lg:h-6 lg:w-auto"
                />
              </Link>
              <Link href="#">
                <Image
                  src={linkedin}
                  alt="Linkedin"
                  height={18}
                  className="lg:h-6 lg:w-auto"
                />
              </Link>
            </div>
          </div>

          <form className="lg:w-1/3" onSubmit={handleFormSubmit}>
            <div className="relative flex w-full items-center gap-4">
              <Image
                src={email}
                alt="Email"
                height={24}
                className="absolute left-3 top-1/2	translate-y-[-50%]"
              />
              <input
                className="w-full rounded-full px-10 py-2.5 text-base"
                type="text"
                placeholder="Enter your email"
                value={term}
                onChange={handleChange}
              />
              <button className="absolute right-0.5 top-1/2 translate-y-[-50%] rounded-full bg-brand-2 p-2 lg:hidden">
                <Image src={send} alt="send" height={24} />
              </button>
              <button className="hidden rounded-full bg-brand-2 px-4 py-2  lg:inline-block">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-3 gap-6 border-y border-gray-400 py-10 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <p className="mb-4 text-base font-bold text-white md:text-lg">
              Health
            </p>
            <ul className="flex flex-col items-start gap-2 text-sm font-normal text-white md:text-base">
              <li>
                <Link href="#">Fitness</Link>
              </li>
              <li>
                <Link href="#">Nutrition</Link>
              </li>
              <li>
                <Link href="#">Social Services</Link>
              </li>
              <li>
                <Link href="#">Education</Link>
              </li>
              <li>
                <Link href="#">Development</Link>
              </li>
              <li>
                <Link href="#">Sports League</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-base font-bold text-white md:text-lg">
              Family
            </p>
            <ul className="flex flex-col items-start gap-2 text-sm font-normal text-white md:text-base">
              <li>
                <Link href="#">Fitness</Link>
              </li>
              <li>
                <Link href="#">Nutrition</Link>
              </li>
              <li>
                <Link href="#">Social Services</Link>
              </li>
              <li>
                <Link href="#">Education</Link>
              </li>
              <li>
                <Link href="#">Development</Link>
              </li>
              <li>
                <Link href="#">Sports League</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-base font-bold text-white md:text-lg">
              Work
            </p>
            <ul className="flex flex-col items-start gap-2 text-sm font-normal text-white md:text-base">
              <li>
                <Link href="#">Fitness</Link>
              </li>
              <li>
                <Link href="#">Nutrition</Link>
              </li>
              <li>
                <Link href="#">Social Services</Link>
              </li>
              <li>
                <Link href="#">Education</Link>
              </li>
              <li>
                <Link href="#">Development</Link>
              </li>
              <li>
                <Link href="#">Sports League</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-base font-bold text-white md:text-lg">
              Wealth
            </p>
            <ul className="flex flex-col items-start gap-2 text-sm font-normal text-white md:text-base">
              <li>
                <Link href="#">Fitness</Link>
              </li>
              <li>
                <Link href="#">Nutrition</Link>
              </li>
              <li>
                <Link href="#">Social Services</Link>
              </li>
              <li>
                <Link href="#">Education</Link>
              </li>
              <li>
                <Link href="#">Development</Link>
              </li>
              <li>
                <Link href="#">Sports League</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-base font-bold text-white md:text-lg">
              Leisure
            </p>
            <ul className="flex flex-col items-start gap-2 text-sm font-normal text-white md:text-base">
              <li>
                <Link href="#">Fitness</Link>
              </li>
              <li>
                <Link href="#">Nutrition</Link>
              </li>
              <li>
                <Link href="#">Social Services</Link>
              </li>
              <li>
                <Link href="#">Education</Link>
              </li>
              <li>
                <Link href="#">Development</Link>
              </li>
              <li>
                <Link href="#">Sports League</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-base font-bold text-white md:text-lg">
              Community
            </p>
            <ul className="flex flex-col items-start gap-2 text-sm font-normal text-white md:text-base">
              <li>
                <Link href="#">Fitness</Link>
              </li>
              <li>
                <Link href="#">Nutrition</Link>
              </li>
              <li>
                <Link href="#">Social Services</Link>
              </li>
              <li>
                <Link href="#">Education</Link>
              </li>
              <li>
                <Link href="#">Development</Link>
              </li>
              <li>
                <Link href="#">Sports League</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 py-10 text-white  lg:flex-row-reverse lg:justify-between">
          <div className="flex gap-4 text-sm lg:text-base">
            <Link href="#">Contact Us</Link>
            <Link href="#">About US</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#" className="hidden lg:inline-block">
              Leave Feedback
            </Link>
          </div>
          <span className="text-xs lg:text-sm">
            CompanyName @ 202X. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
