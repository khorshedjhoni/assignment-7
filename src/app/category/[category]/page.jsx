
import Category from "../Category";

const CategoryPage = async ({ params }) => {
  const { category } = await params;

  let products = [];
  let currentCategory = {};

  try {
    const [productsRes, categoriesRes] = await Promise.all([
      fetch(
        `https://openapi.programming-hero.com/api/bazardor/products?category=${category}`
      ),
      fetch("https://openapi.programming-hero.com/api/bazardor/categories"),
    ]);

    if (productsRes.ok) {
      const data = await productsRes.json();
      products = Array.isArray(data) ? data : data.data || [];
    }

    if (categoriesRes.ok) {
      const data = await categoriesRes.json();
      const categories = Array.isArray(data) ? data : data.data || [];

      currentCategory = categories.find(
        (item) => item.slug === category
      ) || {};
    }
  } catch (error) {
    console.error("Failed to load category:", error);
  }

 return (
  <Category
    products={products}
    category={currentCategory}
  />
);
};

export default CategoryPage;

