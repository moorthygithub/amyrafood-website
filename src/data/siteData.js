import { Mail, MapPin, Phone } from "lucide-react";

// Header
export const HeaderData = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "#",
    submenu: [
      {
        label: "Pulp",
        href: "/products/pulp",
      },
      {
        label: "Honey",
        href: "/products/honey",
      },
      {
        label: "Rice",
        href: "/products/rice",
      },
      {
        label: "Flour",
        href: "/products/flour",
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

// Features
export const FeaturesData = [
  {
    imgSrc: "/images/Features/featureOne.svg",
    heading: "Elegant Dining Atmosphere",
    subheading:
      "Enjoy a warm, refined space perfect for intimate dinners or small group gatherings.",
  },
  {
    imgSrc: "/images/Features/featureThree.svg",
    heading: "Signature Chef Creations",
    subheading:
      "Taste one-of-a-kind dishes crafted with passion by our top culinary team.",
  },
  {
    imgSrc: "/images/Features/featureTwo.svg",
    heading: "Fresh, Local Ingredients",
    subheading:
      "We use locally sourced goods daily for unmatched taste and quality.",
  },
  {
    imgSrc: "/images/Features/featureFour.svg",
    heading: "Hassle-Free Reservations",
    subheading:
      "Reserve online in seconds or walk in anytime — we’re ready when you are.",
  },
];

// Expert Chef
export const ExpertChiefData = [
  {
    profession: "Senior Chef",
    name: "Marco Benton",
    imgSrc: "/images/Expert/boyone.png",
  },
  {
    profession: "Junior Chef",
    name: "Elena Rivera",
    imgSrc: "/images/Expert/girl.png",
  },
  {
    profession: "Junior Chef",
    name: "John Doe",
    imgSrc: "/images/Expert/boytwo.png",
  },
  {
    profession: "Senior Chef",
    name: "Marco Benton",
    imgSrc: "/images/Expert/boyone.png",
  },
  {
    profession: "Junior Chef",
    name: "Elena Rivera",
    imgSrc: "/images/Expert/girl.png",
  },
  {
    profession: "Junior Chef",
    name: "John Doe",
    imgSrc: "/images/Expert/boytwo.png",
  },
];

// Gallery
// export const GalleryImagesData = [
//   {
//     src: "/images/Gallery/foodone.webp",
//     name: "Caesar Salad (187 Kcal)",
//     price: 35,
//   },
//   {
//     src: "/images/Gallery/foodtwo.webp",
//     name: "Christmas salad (118 Kcal)",
//     price: 17,
//   },
//   {
//     src: "/images/Gallery/foodthree.webp",
//     name: "Sauteed mushrooms with pumpkin bowl (238 kcal)",
//     price: 45,
//   },
//   {
//     src: "/images/Gallery/foodfour.webp",
//     name: "BBQ Chicken Feast Pizza (272 kcal)",
//     price: 27,
//   },
// ];
export const GalleryImagesData = [
  {
    src: "https://plus.unsplash.com/premium_photo-1724255863045-2ad716767715?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
    name: "Fresh Mango Pulp (250g)",
    price: 150, // ₹
  },
  {
    src: "https://images.unsplash.com/photo-1574664027784-64648e89cf5a?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
    name: "Strawberry Concentrate (200ml)",
    price: 180, // ₹
  },
  {
    src: "https://images.unsplash.com/photo-1692954333872-6da89c08cd57?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
    name: "Fresh Banana Pulp (300g)",
    price: 120, // ₹
  },
  {
    src: "https://images.unsplash.com/photo-1689345320731-3fcfb8af355a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
    name: "Mixed Berry Pack (150g)",
    price: 200, // ₹
  },
];

// Full Menu
export const FullMenuData = [
  {
    name: "Grilled Salmon",
    price: "$18.99",
    description: "Served with lemon butter sauce and grilled vegetables.",
  },
  {
    name: "Caesar Salad",
    price: "$9.99",
    description: "Crisp romaine with parmesan, croutons, and Caesar dressing.",
  },
  {
    name: "Margherita Pizza",
    price: "$13.49",
    description: "Classic pizza with tomato, mozzarella, and fresh basil.",
  },
  {
    name: "Tomato Basil Soup",
    price: "$6.99",
    description: "Creamy tomato soup with a hint of garlic and fresh basil.",
  },
  {
    name: "Chocolate Lava Cake",
    price: "$7.99",
    description:
      "Warm chocolate cake with a molten center served with vanilla ice cream.",
  },
  {
    name: "Spaghetti Carbonara",
    price: "$15.25",
    description:
      "Spaghetti tossed with eggs, pancetta, parmesan, and black pepper.",
  },
  {
    name: "Tiramisu",
    price: "$8.50",
    description:
      "Layered espresso-soaked ladyfingers with mascarpone and cocoa.",
  },
];

// Footer
export const FooterLinkData = [
  {
    section: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      {
        label: "Pulp",
        href: "/products/pulp",
      },
      {
        label: "Honey",
        href: "/products/honey",
      },
      {
        label: "Rice",
        href: "/products/rice",
      },
      {
        label: "Flour",
        href: "/products/flour",
      },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    section: "Support",
    links: [
      { label: "Help/FAQ", href: "/" },
      { label: "Press", href: "/" },
      { label: "Affiliates", href: "/" },
      { label: "Hotel owners", href: "/" },
      { label: "Partners", href: "/" },
    ],
  },
];
export const heroSlides = [
  // {
  //   title: "Elevated Dining at Chef’s Kitchen",
  //   description:
  //     "Indulge in an elegant culinary journey, crafted with locally sourced ingredients and world-class flavors — served fresh, every day.",
  //   image: "/images/hero/banner-image.png",
  // },
  {
    title: "Fresh Bold  Flavors",
    description:
      "Experience handcrafted dishes made with passion, quality ingredients, and global inspiration.",
    image: "/images/hero/banner-image-3.png",
  },
  {
    title: "Luxury Dining Experience",
    description:
      "Where taste meets elegance — perfect for family dinners and celebrations.",
    image: "/images/hero/banner-image-2.png",
  },
];
export const ProductInfoData = [
  {
    title: "Pure Honey",
    description:
      "Pure, natural honey sourced from trusted beekeepers for export markets.",
    imgSrc: "/images/Fruits/honey.png",
    link: "/products/honey",
  },
  {
    title: "Premium Rice",
    description:
      "Basmati and long-grain rice varieties perfect for retail and food service industries.",
    imgSrc: "/images/Fruits/rice.png",
    link: "/products/rice",
  },
  {
    title: "Quality Flour",
    description:
      "High-quality wheat and specialty flours for industrial bakery and manufacturing.",
    imgSrc: "/images/Fruits/flour.png",
    link: "/products/flour",
  },
];
export const ProductFeaturesData = [
  {
    icon: "award",
    title: "Premium Quality",
    description:
      "Handpicked fruits with the highest quality standards to ensure freshness and taste",
  },
  {
    icon: "shield",
    title: "Safe & Organic",
    description:
      "100% organic produce free from pesticides and harmful chemicals",
  },
  {
    icon: "package",
    title: "Fast Delivery",
    description: "Fresh fruits delivered to your doorstep within 24 hours",
  },
  {
    icon: "settings",
    title: "Customizable",
    description: "Build your own fruit basket with your favorite selections",
  },
];
export const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content:
      "M02-355, M Floor, Plot No. 128-248, Al Kabeesi Area, Deira - Dubai, UAE",
    color: "bg-blue-100 text-blue-600",
    delay: 0,
  },
  {
    icon: Mail,
    title: "Email",
    content: "amyraglobal786@gmail.com",
    color: "bg-green-100 text-green-600",
    delay: 100,
  },
  {
    icon: Phone,
    title: "Mobile",
    content: "+97158822 8177",
    color: "bg-orange-100 text-orange-600",
    delay: 200,
  },
];
export const Exportservices = [
  {
    title: "Global Shipping",
    description: "Reliable logistics network spanning all major trade routes",
    delay: 0,
  },
  {
    title: "Export Packaging",
    description:
      "Industry-compliant packaging ensuring safe international transit",
    delay: 100,
  },
  {
    title: "Market Access",
    description:
      "Strategic UAE hub serving Middle East and global destinations",

    delay: 200,
  },
  {
    title: "Bulk Supply",
    description: "Large-volume orders for distributors worldwide reliably",
    delay: 300,
  },
];
export const riceProducts = [
  {
    name: "1401 Raw Basmati Rice",
    image: "/images/rice/1401-raw-basmati.png",
    description:
      "Premium long-grain basmati rice with natural aroma and superior elongation.",
  },
  {
    name: "PR11 Golden Sella Non Basmati Rice",
    image: "/images/rice/pr11-golden-sella-non-basmati.png",
    description:
      "High-quality parboiled rice offering consistency and excellent cooking results.",
  },
  {
    name: "1211 Golden Sella Basmati Rice",
    image: "/images/rice/1211-golden-sella-basmati.png",
    description:
      "Aromatic basmati rice with golden sella processing for enhanced durability.",
  },
  {
    name: "1121 Steam Basmati Rice",
    image: "/images/rice/1121-steam-basmati.png",
    description:
      "Extra-long grain basmati rice processed with steam for purity and softness.",
  },
  {
    name: "PR11 White Sella Non Basmati Rice",
    image: "/images/rice/pr11-white-sella-non-basmati.png",
    description:
      "Clean white sella rice suitable for bulk and large-scale consumption.",
  },
  {
    name: "1121 White Sella Basmati Rice",
    image: "/images/rice/1121-white-sella-basmati.png",
    description:
      "Premium white sella basmati rice known for its elegant appearance and taste.",
  },
  {
    name: "Sharbati Basmati Rice",
    image: "/images/rice/sharbati-basmati.png",
    description:
      "Soft-textured basmati rice with rich taste ideal for daily meals.",
  },
  {
    name: "PR11 Steam Non Basmati Rice",
    image: "/images/rice/pr11-steam-non-basmati.png",
    description:
      "Steam-processed non-basmati rice with uniform grains and reliable quality.",
  },
  {
    name: "1509 Golden Sella Basmati Rice",
    image: "/images/rice/1509-golden-sella-basmati.png",
    description:
      "Long-grain basmati rice with golden sella finish and excellent elongation.",
  },
  {
    name: "1509 Steam Basmati Rice",
    image: "/images/rice/1509-steam-basmati.png",
    description:
      "Steam-processed basmati rice offering natural flavor and fine texture.",
  },
  {
    name: "Indian Basmati Lemon Sella Creamy Rice",
    image: "/images/rice/lemon-sella-creamy.png",
    description:
      "Creamy lemon sella basmati rice with attractive color and premium quality.",
  },
  {
    name: "1509 Golden Sella Rice",
    image: "/images/rice/1509-golden-sella.png",
    description:
      "Golden sella rice with uniform grains and export-grade consistency.",
  },
  {
    name: "MRM Sun Rice (1121 Extra Long Grain Golden Sella)",
    image: "/images/rice/mrm-sun-rice.png",
    description:
      "Branded extra-long grain basmati rice with superior golden sella finish.",
  },
  {
    name: "1509 Lemon Sella Rice",
    image: "/images/rice/1509-lemon-sella.png",
    description:
      "Lemon sella processed rice with creamy texture and excellent cooking yield.",
  },
  {
    name: "MRM Moon Rice (1121 Extra Long Grain Lemon Sella)",
    image: "/images/rice/mrm-moon-rice.png",
    description:
      "Premium branded basmati rice with extra-long grains and refined lemon sella processing.",
  },
];
export const FlourProducts = [
  {
    name: "Amyra Atta – Premium Quality",
    image: "/images/flour/amyra-atta-premium.png",
    description:
      "Finely milled wheat flour delivering superior softness and nutritional value.",
  },
  {
    name: "Amyra Maida – All Purpose",
    image: "/images/flour/amyra-maida-all-purpose.png",
    description:
      "Refined all-purpose flour suitable for baking, cooking, and confectionery.",
  },
  {
    name: "Amyra Chakki Atta – Super Value",
    image: "/images/flour/amyra-chakki-atta-super-value.png",
    description:
      "Stone-ground wheat flour offering excellent value and everyday quality.",
  },
  {
    name: "Amyra Suji – Premium Quality",
    image: "/images/flour/amyra-suji-premium.png",
    description:
      "High-quality semolina with uniform granules for perfect texture.",
  },
  {
    name: "Amyra Maida – Super Value",
    image: "/images/flour/amyra-maida-super-value.png",
    description:
      "Economical refined flour designed for bulk and regular usage.",
  },
  {
    name: "Amyra Chiroti Rawa – Premium Quality",
    image: "/images/flour/amyra-chiroti-rawa-premium.png",
    description:
      "Fine rawa ideal for traditional sweets and premium preparations.",
  },
  {
    name: "Amyra Maida – Premium Quality",
    image: "/images/flour/amyra-maida-premium.png",
    description:
      "Premium-grade refined flour offering excellent fineness and performance.",
  },
  {
    name: "Amyra Suji – Super Value",
    image: "/images/flour/amyra-suji-super-value.png",
    description:
      "Cost-effective semolina suitable for large-scale cooking needs.",
  },
  {
    name: "Amyra Chakki Atta – Premium Quality",
    image: "/images/flour/amyra-chakki-atta-premium.png",
    description:
      "Premium stone-ground atta with rich taste and consistent quality.",
  },
];
export const honeyProducts = [
  {
    name: "Sidr Honey",
    image: "/images/honey/sidr-honey.png",
    description:
      "Rare premium honey from Sidr tree nectar, dark amber, rich taste, prized for immunity and medicinal benefits.",
  },
  {
    name: "Acacia Honey",
    image: "/images/honey/acacia-honey.png",
    description:
      "Light and clear honey from Acacia blossoms, mild sweetness, stays liquid longer, great for digestion and immunity.",
  },
  {
    name: "Karanj Honey",
    image: "/images/honey/karanj-honey.png",
    description:
      "Medicinal honey from Karanj tree, dark color, earthy flavor, used in Ayurveda for skin care and detoxification.",
  },
  {
    name: "Sundarban Honey",
    image: "/images/honey/sundarban-honey.png",
    description:
      "Wild forest honey from Sundarbans mangroves, dark and aromatic, rich in minerals and antioxidants for immunity.",
  },
  {
    name: "Multi-floral Honey",
    image: "/images/honey/multifloral-honey.png",
    description:
      "Honey from various flowering plants, rich and balanced flavor, ideal for daily nutrition and overall wellness.",
  },
];
