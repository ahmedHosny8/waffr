import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutUs from '../assets/images/about-us-v2.jpg';
import companyOverview from '../assets/images/company-overview.png';
import ourMission from '../assets/images/our-mission.png';
import ourVision from '../assets/images/our-vision.png';
import ourValue from '../assets/images/our-value.png';

function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative h-[448px] py-12 lg:h-[512px]">
          <Image
            src={aboutUs}
            alt="About Us"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
          <div className="mx-auto h-full max-w-screen-xl px-4">
            <div className="mx-auto flex h-full max-w-4xl flex-col items-center justify-center gap-6">
              <h1 className="text-center text-2xl font-bold text-white lg:text-5xl">
                The best and largest site for searching about any service you
                need
              </h1>
              <p className="text-center text-base text-white lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-screen-xl px-4">
            <div className="mb-10 grid grid-cols-3 items-center">
              <div className="col-span-2">
                <h2 className="mb-2 text-lg font-bold md:text-2xl lg:text-4xl">
                  Company Overview
                </h2>
                <p className="text-base md:text-lg lg:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quis veniam quae laborum consequuntur expedita
                  obcaecati ipsa quod dicta provident?
                </p>
              </div>
              <Image src={companyOverview} alt="Company Overview Image" />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border p-2">
                <Image src={ourMission} alt="Our Mission" height={100} />
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-bold">Our Mission</h3>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                    sit phasellus mollis sit aliquam sit nullam{' '}
                  </p>
                </div>
              </div>
              <div className="rounded-lg border p-2">
                <Image src={ourVision} alt="Our Vision" height={100} />
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-bold">Our Vision</h3>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                    sit phasellus mollis sit aliquam sit nullam{' '}
                  </p>
                </div>
              </div>
              <div className="rounded-lg border p-2">
                <Image src={ourValue} alt="Our Value" height={100} />
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-bold">Our Value</h3>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                    sit phasellus mollis sit aliquam sit nullam{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
