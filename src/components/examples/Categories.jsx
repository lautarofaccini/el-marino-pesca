import { getCategories } from "@/libs/get-categorias";

async function Categories() {
  const categories = await getCategories();

  if (categories.length === 0) return null;

  return (
    <section className="">
      {categories.map((category, index) => (
        <h1 key={index}>{category.name}</h1>
      ))}
    </section>
  );
}

export default Categories;
