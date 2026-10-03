import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { productSchema, menuItemSchema } from "./lib/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Riley's Studio",
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-sanity-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: [productSchema, menuItemSchema],
  },
});
