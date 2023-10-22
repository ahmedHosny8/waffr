const getCategory = async (id) => {
  const res = await fetch(`http://localhost:3001/categories/${id}`, {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
};

async function CategoryPage({ params }) {
  const category = await getCategory(params.category);
  console.log(category);

  return <div>{params.category}</div>;
}

export default CategoryPage;
