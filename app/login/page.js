'use client';
import Link from 'next/link';
import Image from 'next/image';
import LoginLogo from '../assets/images/login-logo.png';
import googleImage from '../assets/svg/login-with-google.svg';
import loginBg from '../assets/images/login-bg.jpg';

function LoginPage() {
  return (
    <main>
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="grid  lg:grid-cols-3">
          <section className="col-span-2 mx-auto max-w-3xl py-12 lg:py-14">
            <div className="flex flex-col gap-14">
              <Link href="/">
                <Image
                  src={LoginLogo}
                  alt="LoginLogo"
                  height={56}
                  quality={100}
                  priority
                  className="lg:h-24 lg:w-auto"
                />
              </Link>

              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold lg:text-5xl">
                  Login with WAFFR
                </h1>
                <p className="text-sm text-gray-500 lg:text-xl">
                  Enter your phone number and password to continue
                </p>
              </div>

              <form className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <label className="text-gray-600 lg:text-xl">
                    Email address or phone number
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="rounded-full border px-4 py-2 text-base"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-gray-600 lg:text-xl">Password</label>
                  <input
                    type="password"
                    placeholder="Type your password"
                    className="rounded-full border px-4 py-2 text-base"
                  />
                  <Link href="#" className="ml-auto">
                    <span className="text-sm font-bold text-brand-1">
                      Forgot Passowrd ?
                    </span>
                  </Link>
                </div>

                <div className="flex flex-col gap-4">
                  <button className="w-full rounded-full bg-brand-1 py-4 font-bold text-white lg:text-lg">
                    Login
                  </button>
                  <button className="relative rounded-full border py-4 font-bold lg:text-lg">
                    <Image
                      src={googleImage}
                      alt="Google"
                      className="absolute left-8	top-1/2 translate-y-[-50%]"
                    />
                    Continue With Google
                  </button>
                </div>

                <div className="tont-bold text-center lg:text-lg">
                  Don’t have an account ?
                  <Link href="#" className="font-bold text-brand-1">
                    Join Us
                  </Link>
                </div>
              </form>
            </div>
          </section>
          <section className="hidden lg:block">
            <Image
              className="h-full w-full object-cover object-center"
              src={loginBg}
              alt="Login BG"
            />
          </section>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
