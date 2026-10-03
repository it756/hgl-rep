export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  refCode: string;
  category:
    | "unisex"
    | "woody-amber"
    | "floral-pure"
    | "raw-resinoids"
    | "oriental"
    | "aquatic"
    | "smoky-oud";
  categoryLabel: string;
  basePrice: number;
  sizes: { size: number; price: number; formattedPrice: string }[];
  description: string;
  fullDescription?: string;
  olfactoryNotes: {
    top: string;
    heart: string;
    base: string;
  };
  specimens: {
    name: string;
    image: string;
    alt: string;
  }[];
  heroImage: string;
  imageAlt: string;
  thumbnails: string[];
  rating: number;
  reviewCount: number;
  reviews: {
    id: string;
    author: string;
    location?: string;
    timeAgo: string;
    content: string;
  }[];
  similarProducts?: {
    slug: string;
    title: string;
    price: number;
    notes: string;
    image: string;
    overlap: number;
    overlapKey: string;
  }[];
  chemicalMatrix?: {
    head: string;
    heart: string;
    base: string;
    matchPercent: number;
    matchLabel: string;
    dominantResonance: string;
  };
}

export interface MenuItem {
  id: string;
  name: string;
  category: "beers-wine" | "cocktails" | "kitchen" | "grills";
  description: string;
  priceZMW: number;
  priceEUR: number;
  image?: string;
  dietary?: string[];
  isPopular?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  dateOrSchedule: string;
  description: string;
  image: string;
  tag: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-cosmic-intense",
    slug: "cosmic-intense",
    title: "Cosmic Intense",
    subtitle: "Eau de Parfum Spray",
    tag: "[Extract • 01]",
    refCode: "CJ-90412-EXT",
    category: "woody-amber",
    categoryLabel: "[Woody / Amber]",
    basePrice: 61.6,
    sizes: [
      { size: 30, price: 48.0, formattedPrice: "ZMK 48.00" },
      { size: 50, price: 61.6, formattedPrice: "ZMK 61.60" },
      { size: 100, price: 88.0, formattedPrice: "ZMK 88.00" },
    ],
    description:
      "Creamy, warm vanilla fragrance praised for unique, sexy gourmand character, smooth amber-vanilla longevity and chic tactile bottle; patrons call it 'yummy', 'lush', 'perfect for evening gatherings'.",
    fullDescription:
      "Cosmic Intense captures an intoxicating solar warmth through an exquisite distillation of Spanish star jasmine, ruby blood orange, and raw resinous benzoin over aged Madagascar Bourbon vanilla pods. Blended and matured in limited glass demijohns.",
    olfactoryNotes: {
      top: "Star jasmine, blood orange",
      heart: "Golden amber accord, benzoin",
      base: "Vanilla, musk accords",
    },
    specimens: [
      {
        name: "White Star Jasmine",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBfOEbGqQcGXIUlciV1ie2SS3lHlz8ezK8Rsv_9Ut5xqDpf67Zlayj49TTFQsMkiO42X9tMZ5enVG9pzA6fQ8Qx7LP8l_CzZUz46mfI2fs-8TcnhzS9C90rjnryu-Vvtb5vjXxwpFJWFxEMzjdkgcdVhf86v8LYyVopOeo5lEqXDGnws_XkzlziX3N7cZhuOdWTgR9b1GXS_9oaolNv0n1qm1cPEBDnxRRs-77ph1qabN8FsIjsD2RH",
        alt: "Delicate white star jasmine flower blossom",
      },
      {
        name: "Ruby Blood Orange",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfg4CI4n5ZCuFANWnu1bifbOMLSfsY9OoFkACFJmlgpQls0mqVdyUnEMGrSKq3cFqayvDQTnIeJ6Zaiw8rRZOhaUdtRIMMQ7OkB9n1x7tjkIhsvtQr7xpj1OVZEEDNvx4_xJ8VnoxwekrtS5jmznozqEwQyovDYTgZ61GkA7_UBQ3gecpO2rMwbaHF-JoWMFuCYMUtPQ1gKMHH44RA0lExpnycSwuLaNekHVegLbIRnuWHmGnhJaZ",
        alt: "Ripe crimson blood orange half cutout",
      },
      {
        name: "Bourbon Vanilla Pods",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAEsiDFuRTnhvoz0hhEXxH9fg78ZD7XkiKVUGxK0ehnZM2CZEy9x9S2eHMwo6oHT0RiegQDH1BgHuE2xa6hNKoOGMmkNUeyWf2PLkK0_Z07zWSFLGMXjPUwZYCpG5S7TWkl-NjGDRxG98cY7u5_ngNLIguxfa-Wn2J-581c1nL-5ziX8B5yd6IbQ8wx7k7N9uH-AybZJnXMlXy9HQJRwXFA1yPbDTkcj0Wyi-AqDYTZ1KdF93fvFfrH",
        alt: "Madagascar bourbon vanilla beans botanical cutout",
      },
      {
        name: "Amber Resin Core",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC4EluOGKMkeobLvMzzT_hcemGGGksZOp4UfALd1p1xrWKOvo1B3-S71-oBIlCa5XpnTq4fnNwWiauiPWuQFQF6AUa4rOQus2VXaWXygirSwrzg8e-mvDKSLtUfeG8KGzzky_6wKxf24rDi_Z5y7u3qxmI6ilb3whItY6vLmMUcEwY7anEL0IfXkwtZSs1gorcaR7fr_aOz-f4SX84xSIXPeH4uAbMxLsx88TyTQ8mMkjN2gFC7_agc",
        alt: "Translucent raw amber resin mineral chunk",
      },
      {
        name: "Sumatra Benzoin",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD62LfxBFGrTka3oGjFjSNHlzjbGm8mwKcxPyHmUITh8TsIrBAITKFPpbWoSlAahbe9TmlYrz1qkWrbOiD2k2hSVDxPyQ-M0wc6ORnZKIs1uw_NyGBVX7QhfFc_g3I0EapDnj68w7GRGbUo_7lKa2uO-yKdzBOiE8lfOdffmvKLHL1MPrSLtL3OUqH0m5YsOF5zxKAcLUKrniXYya5SM9-KqyhIiWw3FCzsfjoNZrs1u28nLRnvcWGQ",
        alt: "Natural raw Sumatra benzoin resin tears",
      },
      {
        name: "Ethereal Musks",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDK3puiDVVovcY31a1qgrbgHXykvEOe9nKBu8ummtbQJoxO8Kb02z7ICMauNBK7CZiHc6ifB7N00qEnNM5ybfX9l6Q5JojFbLfLv2QkbsS5CRy19rp8Wc9ziFt43Qp7kt8EOZNUZ9hlk8T2iwi1WWPmCS7gn3xYKjCn1ab6B5_3ZyJb8_P40d0c-ruqu5Xh_7Z3D5u1L4mlMGNEq4j8oMknELtrgi5_741XW0DpbbVnldL843dvPkGc",
        alt: "Crystalline translucent natural white musk",
      },
    ],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8WA2WMzNk12ttG7mWsBoCZ2riqICEiOx7BPl8IfwQ98C7qjx8mE27dt1bnF2_wkrYjPrDFLc9KoUbQYGXqGwwJWyznWe-5clGdYhoJRnk4dmsPUox3nLIaKmRAoH9AlEO4LWPonwhn5aZoseHxz9Ty0WX9hKdMVPIkw9I7nbl5YvAek27LlhIdkHk2XEOcLaGq4cytEg09O3n4kiaTkL5MJisGlYO-WedOoshT25yvDeS98KoyBzO",
    imageAlt:
      "Cosmic Intense perfume flacon still life with raw vanilla, blood orange and amber",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBADMkiCsf_qslZzgXAjDQGIgsx1GVsq5kH95nijLHevCFvb1Eydba-Fftbsh4jF4lOxzyRMkHC1YO-KMGrvYO6SeG3kJi52z74VRmZiun81EBlCMGLSZE5s2pSVf0hL6rZNUNLzg7HkbtMr1SvCZRss6jDLALGeRIc7C99pnR2AoRWBr_LR21qLtuiSKvREhKeALOvYMREUX6vrS_4n9Ze2K230GDhP4unHbKskjf7jN7qvFVxW8gh",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6UkLCCwNn1vxtLt89Md39qXL3EGiDRb5pRppx2GPR99VuNsm3QyW1TL-ZEeamatreRvFCNy0SUqN1C5wvX-KrQ_M9AnZFShjelxudCQCs4OyMa520zpTW4lzlHsZlthnsTdoAD6wkF4WWDLDQ8XNUN6YsNHqwV_AwbiZoMSmkXhN1ob0B4XLPGS1Rg89vl-TaCPALI8ypHr61bDHV_Ryi4V8hxYhfodzPp-dPezAhoQtBhQGmBvAK",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLNwJKfx0-1cTzhZeIYHSk-bNbhUOZqeSR6wdOVX1-oSs9aKBxktQaL6HsrragEIB9OEu8ojlvKkw-ptj3gH1CIxTmFr04_y8H3ogVfzG4vQU3Gq3-mLG8Aud_hW-V5jchTKJ688BpFa01elXJgEzGSVnVuxvkRPik3tQnebVlhzuAQh55N6LvGqMDMxAf2ZWiGz_e3dZLX21GpVZ2V7Nzkz5raK32rYIrrDqSR_9hX94fVeQUF57I",
    ],
    rating: 4.8,
    reviewCount: 142,
    reviews: [
      {
        id: "rev-1",
        author: "sarahk1243",
        timeAgo: "3 months ago",
        content:
          "Cosmic Intense Eau De parfum is a warm, cozy fragrance that leans into creamy vanilla and soft amber with a subtle floral touch. The longevity is decent, lasting several hours making it a perfect wear for spring and summers. The bottle and packaging feel sleek and minimal looks chic on the vanity.",
      },
      {
        id: "rev-2",
        author: "zimuki",
        timeAgo: "2 months ago",
        content:
          "Such a pretty scent. It's not very long lasting on the skin but stayed on my sweater for days. Kind of reminds me of the juice bar vanilla musk from the 90s.",
      },
      {
        id: "rev-3",
        author: "vanillea1",
        timeAgo: "2 months ago",
        content:
          "This cosmic is 100x better than the original DNA. It's sweeter, creamier, more vanilla. It's so good! It lasts about 4-6hrs on me. But I still love it. Is a great fragrance overall. I do love it. Already have a backup bottle. It's so yummy. Perfect for any occasion. Day or night.",
      },
    ],
    similarProducts: [
      {
        slug: "scandal-absolu",
        title: "Scandal Le Parfum",
        price: 78.0,
        notes: "Salted caramel • Jasmine • Vanilla",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDfrGY_njhP3C-94IUwrt6zgRa9XJV9eOztvXWANL95hobgcF_XRjV47kSSRvqjSf6DSVccDjLv4obseuVc8V33_SrgVYp3YO--gnluFw-sDrZAgZCq7j8XXMhRq4acxYnDACZEsi8rSqqUaRySQG6Yb1_aPnDObw238xqFQt9SuaLvRIbUz9tnifzDqUhkvlHEEXlYOsz7A8FncUSefGvKKQF4lm3HXrKEPBErgotiWgI5gia8EYjd",
        overlap: 94,
        overlapKey: "Salted Caramel",
      },
      {
        slug: "vanilla-rouge",
        title: "Vanilla Rouge",
        price: 92.0,
        notes: "Madagascar vanilla • Musk accord",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuApIVSRdqcouDaQXvLvBAaeiTWcMgU4WhIZcEii6nx_cjpKeiAcaBG9O--Os6SnkF22c8xhGDEw6NC9mEM-SuvNmEDOtKRj90NVXesROxO0DA58vX1MUtv1v2Ck-XHUloXV8jrvinc61xykJa96KinRMZnoyL55PHOTqy7aNWsrYjTGmA7H7ISi-KcM8JVAjSMoc8OD-oCTXS8aO9uL06jdc0U6BXPC6XB40gsrEerx6XzcU1hGaZKn",
        overlap: 89,
        overlapKey: "Bitter Almond",
      },
      {
        slug: "ambre-solaire",
        title: "Ambre Solaire",
        price: 105.0,
        notes: "Blood orange • Benzoin • Cedar",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCzFb5zuQQ_zN-m1uxzlUUr32S1Zt7PVpb44DX4ViN453diyFAkyl0eECdwf28WaWXxvjsXy3uIXxGER0mqzfUyqVS7FGOI7nMDBPjkHvYjU4Xuua48oKFp9Ls2xwh-97nTRGOCEin9CLQ-SWdRh6_sYP1ZHzbgMGdX_UuCfl8-zXUOXDtgLiYMIZNAM5fyAreuPG_1evRjc56AcOnpKxUGDctHvEXm2KAaZrigClnrdQQGgyxPDuNv",
        overlap: 85,
        overlapKey: "Solar Resin",
      },
      {
        slug: "etheree-blanche",
        title: "Éthérée Blanche",
        price: 84.0,
        notes: "White musk • Star jasmine • Cashmere",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCa6uvtt_0aaBI1QSjI53kvrzEpMxktmoT2kr9ktAGQ0iRhNaFMwu2vHQvzWvjuSvqy3kDNL3Qxg--T22LX2uiZXkRYSlQzffoPX5kbsoyyfKQ9pJnj4zcoLU4gbuaUEJ5WPeMCOWyox7qdKLViPkUjQVWdEPx2qY8IOLbjs6bxRnpsSTN7XYvoLqZk-cl2Xiirrllz30JJ33mYr1H_jxKAOg_DoQfKzkZgWEMVtKk98CmITSWEFG84",
        overlap: 82,
        overlapKey: "Star Jasmine",
      },
    ],
  },
  {
    id: "prod-scandal-absolu",
    slug: "scandal-absolu",
    title: "Scandal Absolu",
    subtitle: "Extrait de Parfum",
    tag: "[Extract • 01]",
    refCode: "SC-8012-EXT",
    category: "unisex",
    categoryLabel: "[Unisex]",
    basePrice: 270.0,
    sizes: [
      { size: 50, price: 270.0, formattedPrice: "ZMK 270.00" },
      { size: 100, price: 340.0, formattedPrice: "ZMK 340.00" },
    ],
    description: "Tuberose, black fig, velvety sandalwood base.",
    olfactoryNotes: {
      top: "Salty Mandarin, Red Peach Nectar",
      heart: "Jasmine Sambac Absolute, Salted Butter Caramel",
      base: "Madagascan Bourbon Vanilla Pod, White Sandalwood",
    },
    specimens: [],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApUoE8vKAG80A6wQyCbiD1aD7ucMW1iVN26-CumrSLKfSG_PvniWVqJQY1WHALuaAyAkX8fatq_syNDR4D-D4AfJ2snZL4AADAz5s4qs6KV9ElZRznJNYL_7pnjk6VbI6G2spTrOe4mcEez9K0oSsmlHROEgCVNOJ0zZiPeiuqFd1bqXFTcMngnR7QfE0uvL3AwrAVB1NuUsbTzQly2yOrfJoVQww3epX3FVHdIU7xlrjHibHvFZFg",
    imageAlt: "Scandal Absolu black monolith perfume bottle",
    thumbnails: [],
    rating: 4.9,
    reviewCount: 98,
    reviews: [],
  },
  {
    id: "prod-bal-dafrique",
    slug: "bal-dafrique-pure",
    title: "Bal d'Afrique Pure",
    subtitle: "Pure Extraction Monograph",
    tag: "[Extract • 02]",
    refCode: "BA-9011-EXT",
    category: "oriental",
    categoryLabel: "[Oriental / Warm]",
    basePrice: 295.0,
    sizes: [{ size: 100, price: 295.0, formattedPrice: "ZMK 295.00" }],
    description: "African marigold, bergamot, Moroccan cedarwood.",
    olfactoryNotes: {
      top: "African Marigold, Italian Bergamot, Bucchu",
      heart: "Cyclamen, Violet Petals",
      base: "Black Amber, Moroccan Cedarwood, Vetiver",
    },
    specimens: [],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCZ9tmht6HvR1JWxd2s1IE-CnG3CCSbAHrJXt-nSiAJtynBifFMo2ys7hUFHLlMEwmQ-N-DLZTZq1HrI1d8In16JB5xDJjDmU0HRrsXbEal8fVdUCY3S8cEVhgS4x2VkCw6R-MWoAUX5VuFiCQcFNzd5SsrU3byHyWsZcYxfQ2gHfF4qt5QW7xKGMJisqg3HaZ0iT74i2nNuzpdnoFixEj4b6vpzfxKdsn2bAXiJl0XOYs5XwdAMpO",
    imageAlt: "Bal d’Afrique Pure heavy crystal bottle",
    thumbnails: [],
    rating: 4.8,
    reviewCount: 65,
    reviews: [],
  },
  {
    id: "prod-vert-minerale",
    slug: "vert-minerale",
    title: "Vert Minérale",
    subtitle: "Aquatic Botanical Formulation",
    tag: "[Extract • 03]",
    refCode: "VM-3041-AQU",
    category: "aquatic",
    categoryLabel: "[Aquatic / Fresh]",
    basePrice: 220.0,
    sizes: [
      { size: 75, price: 220.0, formattedPrice: "ZMK 220.00" },
      { size: 150, price: 310.0, formattedPrice: "ZMK 310.00" },
    ],
    description: "Galbanum, crushed mint leaf, oceanic salt spray.",
    olfactoryNotes: {
      top: "Crisp Galbanum, Crushed Spearmint, Ozone",
      heart: "Marine Sea Salt, Clary Sage",
      base: "White Ambergris, Cedar Driftwood",
    },
    specimens: [],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdwjiFdvHGCgcqbM_J9RnBrGY08RCSfltauYBEzBdwHoYizpawG1j86yGH1o69b4TqoOu0vK3iwTAtb078SPh7cQgK49vthhkI2NxTybMtEFtxagFq1r2hH5d7z4-MV24QuJ55-t8sp9NfvV8FtnLk_d8fXd1h-VTlLNxny9DdpGDfQ4JumCb_RCIX1fFl8cM-fUqiRdPZc9Q_2Uztn_trtrY_4OiXTWmo_NRULs-WkdmV5J1mnAQI",
    imageAlt: "Vert Minerale angular luminescent green glass flacon",
    thumbnails: [],
    rating: 4.7,
    reviewCount: 42,
    reviews: [],
  },
  {
    id: "prod-cuir-fumee",
    slug: "cuir-fumee",
    title: "Cuir Fumée",
    subtitle: "Smoky Raw Leather Extract",
    tag: "[Extract • 04]",
    refCode: "CF-1109-OUD",
    category: "smoky-oud",
    categoryLabel: "[Smoky Oud / Leather]",
    basePrice: 320.0,
    sizes: [
      { size: 50, price: 320.0, formattedPrice: "ZMK 320.00" },
      { size: 100, price: 440.0, formattedPrice: "ZMK 440.00" },
    ],
    description: "Birch tar, smoked cade wood, rare saffron absolute.",
    olfactoryNotes: {
      top: "Kashmiri Saffron, Smoked Thyme",
      heart: "Cade Wood, Birch Tar, Raspberry Ink",
      base: "Dark Leather, Roasted Tonka, Agarwood Oud",
    },
    specimens: [],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3pdVfwGay4NqhVhpBLRd-VxCJom1xJkznTf88_-nGFGkTkHinFvJ2KuW0fVQangKrS5gHNzg927WXQs5euRlXMktNen1IVzPvJS43vqK7xyzH4cSZlTG6-5qw5aPP1L8OP932TStYyT_uZ6t8a2tJB_4I7cviHiRrVLCCyeta60UZPrchHQkbFzYkS8D9c62rPUOCvVRvtyoAGrRMUEvYSh9uk7HpHa68osVM6aMfptULrwH6y2kq",
    imageAlt: "Cuir Fumée tinted heavy crystal cylinder bottle",
    thumbnails: [],
    rating: 5.0,
    reviewCount: 88,
    reviews: [],
  },
  {
    id: "prod-aura-rouge",
    slug: "aura-rouge",
    title: "Aura Rouge",
    subtitle: "Pure Distillation",
    tag: "[Series 2025.04]",
    refCode: "AR-2025",
    category: "woody-amber",
    categoryLabel: "[Woody / Amber]",
    basePrice: 240.0,
    sizes: [{ size: 50, price: 240.0, formattedPrice: "ZMK 240.00" }],
    description:
      "Minimalist avant-garde sculptural glossy red organic glass perfume.",
    olfactoryNotes: {
      top: "Blood Mandarin, Red Pepper",
      heart: "Rose Absolute, Labdanum",
      base: "Smoked Vanilla, Amber Crystals",
    },
    specimens: [],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0ozphBeJlr-miiNfN5KNJx4Y-xjEN5RfA_SMSPkuYUUy8LF8ERcdwwkEhjUYR_JicpSBWO1dGKHHrCWhFYQwNOBJ8I-SsDkniVaOxfBE1eOmx-gWKiqx-iiV1D5QHLdOfDXudKrVjgSDDBrC_YcMIHvffGF3KUPDHtZQMOTJZ-f-G351mE9QkGjRIrgN7lj4DDMgmguZRP9KJcIqmqM_s0uqMyy7kKUy7_AM2OGv1M-OmUq17p6Ul",
    imageAlt: "Aura Rouge sculptural bottle",
    thumbnails: [],
    rating: 4.9,
    reviewCount: 31,
    reviews: [],
  },
  {
    id: "prod-granada-nuit",
    slug: "granada-nuit",
    title: "Granada Nuit",
    subtitle: "Night Harvest Extract",
    tag: "[Series 2025.04]",
    refCode: "GN-2025",
    category: "floral-pure",
    categoryLabel: "[Floral / Pure]",
    basePrice: 310.0,
    sizes: [{ size: 50, price: 310.0, formattedPrice: "ZMK 310.00" }],
    description:
      "Deep crimson burgundy flacon with delicate metallic atomizer charm.",
    olfactoryNotes: {
      top: "Pomegranate Nectar, Night Plum",
      heart: "Dark Damask Rose, Bitter Cacao",
      base: "Benzoin, Patchouli, Spanish Moss",
    },
    specimens: [],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyXh9XlsIC9gDWZQjbMP6Hk6Jw8ZGw_7gTURFhm2_42GrvfdDLrqZasu6kOC8K1JL1DCFzRcBTI2nrIDKRbWQ9cnN2xfR8v0W66xKm7opvivMsij3Y4H1Bovmc4mwwBES3Yho38LXPhhAFYJcI5uhgwZcbe30iCkKJ1Im0Mfn1jb9tGFMwPnhXPmA9KzJyeLLPpeETMBm4kz4zU3xOsJOictAkxKaxKk4CN6fFl5caQ4_EO5grcHQE",
    imageAlt: "Granada Nuit flacon",
    thumbnails: [],
    rating: 5.0,
    reviewCount: 77,
    reviews: [],
  },
  {
    id: "prod-flora-absolu",
    slug: "flora-absolu",
    title: "Flora Absolu",
    subtitle: "Pale Blossom Monograph",
    tag: "[Series 2025.04]",
    refCode: "FA-2025",
    category: "floral-pure",
    categoryLabel: "[Floral / Pure]",
    basePrice: 195.0,
    sizes: [{ size: 75, price: 195.0, formattedPrice: "ZMK 195.00" }],
    description:
      "Rectangular fluted glass flacon with pale pink tincture and black grosgrain bow.",
    olfactoryNotes: {
      top: "White Peony, Pear Essence",
      heart: "Rose Centifolia, Magnolia",
      base: "Soft White Cedar, Cashmeran",
    },
    specimens: [],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATJ-3ox2Lm1q-U72YmcJ2q2WdP2PVaxCukx45ivhLnAxdhRcfvHN3baClisPN90Cmh5n7vBVnECpvDNtC6Wv9zUUjX63dFLxViGmmiacj5ID_kNjKjvcRjVBr1ikqXP9IjM1YUdbVb5I9QeSGa8x0VVH6CyTmWaM-tmN0GCxY2s_aVPPqHWete73V9g3bwK7LPa-gZPImmRNOlRqIL8PTjMOmmSv3e10boDDq1UmxCQreoIpgQ9H8G",
    imageAlt: "Flora Absolu flacon",
    thumbnails: [],
    rating: 4.6,
    reviewCount: 29,
    reviews: [],
  },
  {
    id: "prod-hesperides-sun",
    slug: "hesperides-sun",
    title: "Hesperides Sun",
    subtitle: "Solar Citrus Infusion",
    tag: "[Series 2025.04]",
    refCode: "HS-2025",
    category: "raw-resinoids",
    categoryLabel: "[Raw Resinoids]",
    basePrice: 180.0,
    sizes: [{ size: 50, price: 180.0, formattedPrice: "ZMK 180.00" }],
    description:
      "Warm golden amber perfume with sculptural oversized white botanical flower cap.",
    olfactoryNotes: {
      top: "Calabrian Bergamot, Neroli Blossom",
      heart: "Solar Ylang-Ylang, Orange Blossom",
      base: "Golden Frankincense, Sandalwood",
    },
    specimens: [],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHcyGIFWdwhMVCoyk3TOZ1GWkQOlNK6ldBYEtitvP8fbZoz1YFrfTbxtxvrQx93VbDQTdevVPdRNIcmYyLuMbQNnjW2P4HNLfJiEIGEwthBFmJ26S83JSbMGikgWf_pEo3lXg9v7u3FTCSz02_j40Rfp6UOjIg8sf3zN324lgmRTZQW8txl4drSk53MVeDkLKgsT4q9u2pelleYMy8Ueg0axjn9e4TdOsPPD8IN2yX2epQn5KyDaw2",
    imageAlt: "Hesperides Sun golden bottle",
    thumbnails: [],
    rating: 4.8,
    reviewCount: 38,
    reviews: [],
  },
  {
    id: "prod-noir-mineral",
    slug: "noir-mineral",
    title: "Noir Minéral",
    subtitle: "Brutalist Men Flacon",
    tag: "[Series 2025.04]",
    refCode: "NM-2025",
    category: "smoky-oud",
    categoryLabel: "[Smoky Oud / Mineral]",
    basePrice: 290.0,
    sizes: [{ size: 100, price: 290.0, formattedPrice: "ZMK 290.00" }],
    description:
      "Monolithic obsidian black ribbed glass flacon with brushed gunmetal typography.",
    olfactoryNotes: {
      top: "Black Pepper, Wet Slate, Ozone",
      heart: "Smoked Cypress, Mineral Iron",
      base: "Dark Patchouli, Vetiver, Obsidian Accord",
    },
    specimens: [],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNMRvezuoW4HkRORAMyvDw0n-OTour9YsejS21mCDTlOObUF6RcrrsCSRiaT4fJprSkW8ul6hfW5a6JtwegJSUgRxE-OorcCExrEdDi1ciiw8XV_zSmiI9d8xtRjwCIP27dQpYgze5lck5OCK0v8l24YtzKJ03uGWW4eFWkOGHLM-A9X4afc_MPFf2Hz4qb6rmT7uAnqmRGNH419xfXShz8oj5ZPN3M8nxocZhwDuuPOGYRZlKzyf1",
    imageAlt: "Noir Mineral ribbed obsidian flacon",
    thumbnails: [],
    rating: 4.9,
    reviewCount: 54,
    reviews: [],
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Beer & Wine
  {
    id: "beer-1",
    name: "Riley’s House IPA Beer",
    category: "beers-wine",
    description:
      "Crisp aromatic craft IPA with zesty citrus hops and a smooth malt finish.",
    priceZMW: 65.0,
    priceEUR: 9.99,
    dietary: ["Craft Brew", "5.4% ABV"],
    isPopular: true,
  },
  {
    id: "beer-2",
    name: "Leroy Lager Beer",
    category: "beers-wine",
    description:
      "Classic chilled golden lager, refreshing and crisp for warm Lusaka afternoons.",
    priceZMW: 55.0,
    priceEUR: 9.99,
    dietary: ["Draft Tap", "4.8% ABV"],
    isPopular: true,
  },
  {
    id: "wine-1",
    name: "Merlot Reserve Red Wine",
    category: "beers-wine",
    description:
      "Velvety dark cherry and plum notes with subtle French oak vanilla undertones.",
    priceZMW: 120.0,
    priceEUR: 12.5,
    dietary: ["Vintage", "Glass / Bottle"],
  },
  {
    id: "wine-2",
    name: "Pinot Grigio White Wine",
    category: "beers-wine",
    description:
      "Crisp green apple and floral elderflower with mineral acidity and clean finish.",
    priceZMW: 110.0,
    priceEUR: 11.5,
    dietary: ["Chilled", "Glass / Bottle"],
  },

  // Cocktails
  {
    id: "cocktail-1",
    name: "Riley’s Classic Dry Martini",
    category: "cocktails",
    description:
      "London dry gin, dry vermouth rinse, hand-stuffed Spanish olives, lemon twist.",
    priceZMW: 95.0,
    priceEUR: 10.5,
    dietary: ["Classic", "Served Ice Cold"],
    isPopular: true,
  },
  {
    id: "cocktail-2",
    name: "Smoked Classic Mojito",
    category: "cocktails",
    description:
      "Crushed garden mint, freshly squeezed lime juice, white rum, smoked sugar syrup.",
    priceZMW: 85.0,
    priceEUR: 9.99,
    dietary: ["Signature Fresh"],
    isPopular: true,
  },
  {
    id: "cocktail-3",
    name: "Smoky Chipotle Bloody Mary",
    category: "cocktails",
    description:
      "Infused premium vodka, spiced tomato nectar, celery salt, fresh lemon, rim spice.",
    priceZMW: 90.0,
    priceEUR: 9.99,
    dietary: ["House Spiced"],
  },
  {
    id: "cocktail-4",
    name: "Lusaka Sunset Margarita",
    category: "cocktails",
    description:
      "100% blue agave tequila, Cointreau, fresh blood orange & lime, black salt rim.",
    priceZMW: 95.0,
    priceEUR: 10.5,
    dietary: ["Signature"],
    isPopular: true,
  },

  // Kitchen & Grills
  {
    id: "kitchen-1",
    name: "Riley’s Artisan House Burger",
    category: "kitchen",
    description:
      "Prime beef patty, smoked cheddar, house relish, crispy onions, brioche bun with fries.",
    priceZMW: 140.0,
    priceEUR: 14.5,
    dietary: ["Chef Special"],
    isPopular: true,
  },
  {
    id: "kitchen-2",
    name: "Crispy Beer-Battered Fish & Chips",
    category: "kitchen",
    description:
      "Fresh local tilapia fillet in house IPA batter, hand-cut russet fries, crushed tartare sauce.",
    priceZMW: 150.0,
    priceEUR: 15.0,
    dietary: ["House Specialty"],
    isPopular: true,
  },
  {
    id: "kitchen-3",
    name: "Loaded Nachos & Guacamole",
    category: "kitchen",
    description:
      "Stone ground tortilla chips, melted monterey jack, jalapeños, pico de gallo, fresh guac.",
    priceZMW: 110.0,
    priceEUR: 11.0,
    dietary: ["Vegetarian Option"],
  },
  {
    id: "kitchen-4",
    name: "Truffle & Rosemary House Fries",
    category: "kitchen",
    description:
      "Double-cooked crispy skin-on fries tossed in white truffle oil, sea salt, fresh rosemary.",
    priceZMW: 65.0,
    priceEUR: 7.5,
    dietary: ["Side / Appetizer"],
  },
  {
    id: "grill-1",
    name: "Char-Grilled T-Bone Steak (400g)",
    category: "grills",
    description:
      "Aged Zambian beef cut seared over open hardwood flame, roasted garlic herb butter, grilled corn.",
    priceZMW: 260.0,
    priceEUR: 22.0,
    dietary: ["Open Flame Grill"],
    isPopular: true,
  },
  {
    id: "grill-2",
    name: "Flame-Kissed Peri-Peri Half Chicken",
    category: "grills",
    description:
      "Marinated for 24h in bird’s eye chili, garlic and citrus, flame charred with smoky crust.",
    priceZMW: 180.0,
    priceEUR: 16.5,
    dietary: ["Spicy Grill"],
    isPopular: true,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    title: "Friday Sunset Live Sessions",
    subtitle: "Acoustic Soul & Afro Jazz",
    dateOrSchedule: "Every Friday • 18:00 — 22:00",
    description:
      "Unwind with live melodic performances from Lusaka’s finest acoustic performers, paired with our craft IPA drafts and artisan grill platters on the open-air deck.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    tag: "[Weekly Ritual]",
  },
  {
    id: "exp-2",
    title: "Master Botanical Cocktail Lab",
    subtitle: "Aromatic & Mixology Workshop",
    dateOrSchedule: "Bi-Weekly Saturdays • 16:00",
    description:
      "An intimate masterclass exploring the botanical infusion principles of craft cocktail mixology, smoke infusions, and artisanal spirit pairings. Includes 4 curated cocktail tastings.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    tag: "[Limited Masterclass]",
  },
  {
    id: "exp-3",
    title: "Sunday Smokehouse Roast & Family Day",
    subtitle: "Slow Smoked Prime Brisket & Ribs",
    dateOrSchedule: "Every Sunday • 12:00 — 18:00",
    description:
      "Low and slow applewood-smoked ribs, tender brisket, loaded baked potatoes and craft craft brews in a warm, relaxed hospitality environment.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    tag: "[Family Feast]",
  },
];
