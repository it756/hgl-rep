export const productSchema = {
  name: "product",
  title: "Curated Monograph Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "e.g. Eau de Parfum Spray or Extrait de Parfum",
    },
    {
      name: "tag",
      title: "Taxonomy Tag",
      type: "string",
      description: "e.g. [Extract • 01]",
    },
    {
      name: "refCode",
      title: "Reference Code",
      type: "string",
      description: "e.g. [Ref: CJ-90412-EXT]",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "[All Formulations]", value: "all" },
          { title: "[Unisex]", value: "unisex" },
          { title: "[Woody / Amber]", value: "woody-amber" },
          { title: "[Floral / Pure]", value: "floral-pure" },
          { title: "[Raw Resinoids]", value: "raw-resinoids" },
          { title: "[Oriental / Warm]", value: "oriental" },
          { title: "[Aquatic / Fresh]", value: "aquatic" },
          { title: "[Smoky Oud / Leather]", value: "smoky-oud" },
        ],
      },
    },
    {
      name: "basePrice",
      title: "Base Price (ZMK)",
      type: "number",
    },
    {
      name: "sizes",
      title: "Available Volumes & Prices",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "size", title: "Volume (ml)", type: "number" },
            { name: "price", title: "Price (ZMK)", type: "number" },
          ],
        },
      ],
    },
    {
      name: "description",
      title: "Short Editorial Description",
      type: "text",
      rows: 3,
    },
    {
      name: "olfactoryNotes",
      title: "Olfactory / Taste Architecture",
      type: "object",
      fields: [
        { name: "top", title: "Top Notes", type: "string" },
        { name: "heart", title: "Heart Notes", type: "string" },
        { name: "base", title: "Base Notes", type: "string" },
      ],
    },
    {
      name: "heroImage",
      title: "Hero Flacon Cutout Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "specimens",
      title: "Museum Specimen Ingredients",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Specimen Name", type: "string" },
            { name: "image", title: "Cutout Image", type: "image" },
            { name: "alt", title: "Alt Description", type: "string" },
          ],
        },
      ],
    },
  ],
};

export const menuItemSchema = {
  name: "menuItem",
  title: "Pub & Grill Menu Item",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Dish / Drink Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Beer & Wine", value: "beers-wine" },
          { title: "Cocktails", value: "cocktails" },
          { title: "Kitchen & Grills", value: "kitchen" },
        ],
      },
    },
    { name: "description", title: "Description", type: "text", rows: 2 },
    { name: "priceZMW", title: "Price (ZMW / Kwacha)", type: "number" },
    { name: "priceZMK", title: "Price (ZMK)", type: "number" },
    {
      name: "dietary",
      title: "Dietary & Tap Flags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "isPopular",
      title: "Is Chef Highlight / Popular?",
      type: "boolean",
    },
  ],
};
