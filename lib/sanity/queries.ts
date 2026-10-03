import { sanityClient } from "./client";
import {
  PRODUCTS,
  MENU_ITEMS,
  EXPERIENCES,
  Product,
  MenuItem,
  Experience,
} from "@/lib/data/mock-data";

export async function getProducts(): Promise<Product[]> {
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const data = await sanityClient.fetch(`*[_type == "product"]{
        "id": _id,
        "slug": slug.current,
        title,
        subtitle,
        tag,
        refCode,
        category,
        basePrice,
        sizes,
        description,
        olfactoryNotes,
        "heroImage": heroImage.asset->url,
        specimens
      }`);
      if (data && data.length > 0) return data;
    }
  } catch (error) {
    console.warn("Sanity fetch note (using mock dataset):", error);
  }
  return PRODUCTS;
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  const products = await getProducts();
  return (
    products.find((p) => p.slug === slug) ||
    PRODUCTS.find((p) => p.slug === slug)
  );
}

export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const data = await sanityClient.fetch(`*[_type == "menuItem"]{
        "id": _id,
        name,
        category,
        description,
        priceZMW,
        priceEUR,
        dietary,
        isPopular
      }`);
      if (data && data.length > 0) return data;
    }
  } catch (error) {
    console.warn("Sanity menu fetch note (using mock dataset):", error);
  }
  return MENU_ITEMS;
}

export async function getExperiences(): Promise<Experience[]> {
  return EXPERIENCES;
}
