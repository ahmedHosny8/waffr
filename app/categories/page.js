import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import category from '../assets/images/category-main-1.jpeg';

const getCategories = async () => {
  const res = await fetch('http://localhost:3001/categories', {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
};

async function CategoriesPage() {
  const categories = await getCategories();
  console.log(categories);

  const renderedItems = categories.map((category) => {
    return (
      <Link
        href={`/categories/${category.id}`}
        key={category.id}
        className="flex flex-col items-center gap-2"
      >
        <Image
          src={category.image}
          alt={category.title}
          width={500}
          height={500}
          className="h-auto w-full rounded-lg object-cover object-center"
        />
        <span className="text-base font-bold lg:text-lg">{category.title}</span>
      </Link>
    );
  });

  return (
    <>
      <Navbar />
      <main>
        <section className="lg:h-[448px] lg:bg-gray-100">
          <div className="mx-auto max-w-screen-xl lg:relative">
            <Image
              src={category}
              alt="Category"
              className="h-80 w-full object-cover object-center lg:absolute lg:left-2/3	lg:top-0 lg:h-[448px] lg:w-[800px]"
            />
            <div className="px-4 py-6 lg:flex lg:h-[448px] lg:w-1/2 lg:flex-col lg:justify-center">
              <h1 className="mb-2 text-3xl font-bold lg:text-5xl">Health</h1>
              <p className="text-gray-600 lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices. Lorem
                ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-screen-xl px-4">
            <h2 className="mb-8 text-3xl font-bold lg:text-5xl">
              All Sub Category
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {renderedItems}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CategoriesPage;
