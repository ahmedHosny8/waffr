import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/svg/logo-v2.svg';
import world from '../assets/svg/world.svg';
import heart from '../assets/svg/heart.svg';
import user from '../assets/svg/user.svg';
import meunList from '../assets/svg/menu.svg';
import work from '../assets/svg/work.svg';
import family from '../assets/svg/family.svg';
import heartRed from '../assets/svg/heart-red.svg';
import wealth from '../assets/svg/wealth.svg';
import leisure from '../assets/svg/leisure.svg';
import community from '../assets/svg/community.svg';
import headset from '../assets/svg/headset.svg';

function Navbar() {
  return (
    <header>
      <div className="bg-brand-1">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2">
          <Link href="/">
            <Image
              src={logo}
              alt="Brand Logo"
              height={32}
              priority
              className="lg:h-14 lg:w-auto"
            />
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src={world} alt="World" height={20} />
              {/* Handle languages here */}
              <span className="text-sm text-white lg:text-base">English</span>
            </div>

            <Link href="#" className="flex items-center gap-2">
              <Image src={heart} alt="Heart" height={20} />
              <span className="hidden text-base text-white lg:inline-block">
                My Fvourite
              </span>
            </Link>
            <Link href="#" className="flex items-center gap-2">
              <Image src={user} alt="User" height={20} />
              <span className="hidden text-base text-white lg:inline-block">
                Login & Register
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="mx-auto flex max-w-screen-xl items-center gap-9 px-4 py-2">
          <button className="flex items-center gap-2 rounded-full lg:border lg:bg-white lg:px-4">
            <Image src={meunList} alt="Menu" height={32} />
            <span className="hidden text-base font-bold lg:inline-block">
              Our Categories
            </span>
          </button>
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2">
              <Image src={heartRed} alt="Heart" height={16} />
              <span className="text-sm lg:text-base">Health</span>
            </Link>
            <Link href="#" className="flex items-center gap-2">
              <Image src={family} alt="Family" height={16} />
              <span className="text-sm lg:text-base">Family</span>
            </Link>
            <Link href="#" className="flex items-center gap-2">
              <Image src={work} alt="Work" height={16} />
              <span className="text-sm lg:text-base">Work</span>
            </Link>

            <Link href="#" className="hidden lg:flex lg:items-center lg:gap-2">
              <Image src={wealth} alt="Wealth" height={16} />
              <span className="text-sm lg:text-base">Wealth</span>
            </Link>
            <Link href="#" className="hidden lg:flex lg:items-center lg:gap-2">
              <Image src={leisure} alt="Leisure" height={16} />
              <span className="text-sm lg:text-base">Leisure</span>
            </Link>
            <Link href="#" className="hidden lg:flex lg:items-center lg:gap-2">
              <Image src={community} alt="Community" height={16} />
              <span className="text-sm lg:text-base">Community</span>
            </Link>
          </div>
          <div className="ml-auto">
            <Link href="#" className="hidden lg:flex lg:items-center lg:gap-2">
              <Image src={headset} alt="Support" height={16} />
              <span className="text-sm lg:text-base">Support</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
