import { Mail, MapPin, Phone } from "lucide-react";

// Header
export const HeaderData = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why Us", href: "/#why-us" },
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

export const GalleryImagesData = [
  {
    src: "https://plus.unsplash.com/premium_photo-1724255863045-2ad716767715?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
    name: "Fresh Mango Pulp (250g)",
    price: 150,
  },
  {
    src: "https://images.unsplash.com/photo-1574664027784-64648e89cf5a?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
    name: "Strawberry Concentrate (200ml)",
    price: 180,
  },
  {
    src: "https://images.unsplash.com/photo-1692954333872-6da89c08cd57?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
    name: "Fresh Banana Pulp (300g)",
    price: 120,
  },
  {
    src: "https://images.unsplash.com/photo-1689345320731-3fcfb8af355a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
    name: "Mixed Berry Pack (150g)",
    price: 200,
  },
];

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
    section: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Why Us", href: "/#why-us" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    section: "Products",
    links: [
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
];
export const heroSlides = [
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
    id: 1,
    title: "Pure Honey",
    description:
      "Pure, natural honey sourced from trusted beekeepers for export markets.",
    imgSrc: "/images/Fruits/honey.png",
    link: "/products/honey",
  },
  {
    id: 2,
    title: "Premium Rice",
    description:
      "Basmati and long-grain rice varieties perfect for retail and food service industries.",
    imgSrc: "/images/Fruits/rice.png",
    link: "/products/rice",
  },
  {
    id: 3,
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
    category: "rice",
    id: 1,
    name: "1401 Raw Basmati Rice",
    image: "/images/rice/1401-raw-basmati.png",
    shortdescription:
      "Premium long-grain basmati rice with natural aroma and superior elongation.",
  },
  {
    category: "rice",
    id: 2,
    name: "PR11 Golden Sella Non Basmati Rice",
    image: "/images/rice/pr11-golden-sella-non-basmati.png",
    shortdescription:
      "High-quality parboiled rice offering consistency and excellent cooking results.",
  },
  {
    category: "rice",
    id: 3,
    name: "1211 Golden Sella Basmati Rice",
    image: "/images/rice/1211-golden-sella-basmati.png",
    shortdescription:
      "Aromatic basmati rice with golden sella processing for enhanced durability.",
  },
  {
    category: "rice",
    id: 4,
    name: "1121 Steam Basmati Rice",
    image: "/images/rice/1121-steam-basmati.png",
    shortdescription:
      "Extra-long grain basmati rice processed with steam for purity and softness.",
  },
  {
    category: "rice",
    id: 5,
    name: "PR11 White Sella Non Basmati Rice",
    image: "/images/rice/pr11-white-sella-non-basmati.png",
    shortdescription:
      "Clean white sella rice suitable for bulk and large-scale consumption.",
  },
  {
    category: "rice",
    id: 6,
    name: "1121 White Sella Basmati Rice",
    image: "/images/rice/1121-white-sella-basmati.png",
    shortdescription:
      "Premium white sella basmati rice known for its elegant appearance and taste.",
  },
  {
    category: "rice",
    id: 7,
    name: "Sharbati Basmati Rice",
    image: "/images/rice/sharbati-basmati.png",
    shortdescription:
      "Soft-textured basmati rice with rich taste ideal for daily meals.",
  },
  {
    category: "rice",
    id: 8,
    name: "PR11 Steam Non Basmati Rice",
    image: "/images/rice/pr11-steam-non-basmati.png",
    shortdescription:
      "Steam-processed non-basmati rice with uniform grains and reliable quality.",
  },
  {
    category: "rice",
    id: 9,
    name: "1509 Golden Sella Basmati Rice",
    image: "/images/rice/1509-golden-sella-basmati.png",
    shortdescription:
      "Long-grain basmati rice with golden sella finish and excellent elongation.",
  },
  {
    category: "rice",
    id: 10,
    name: "1509 Steam Basmati Rice",
    image: "/images/rice/1509-steam-basmati.png",
    shortdescription:
      "Steam-processed basmati rice offering natural flavor and fine texture.",
  },
  {
    category: "rice",
    id: 11,
    name: "Indian Basmati Lemon Sella Creamy Rice",
    image: "/images/rice/lemon-sella-creamy.png",
    shortdescription:
      "Creamy lemon sella basmati rice with attractive color and premium quality.",
  },
  {
    category: "rice",
    id: 12,
    name: "1509 Golden Sella Rice",
    image: "/images/rice/1509-golden-sella.png",
    shortdescription:
      "Golden sella rice with uniform grains and export-grade consistency.",
  },
  {
    category: "rice",
    id: 13,
    name: "MRM Sun Rice (1121 Extra Long Grain Golden Sella)",
    image: "/images/rice/mrm-sun-rice.png",
    shortdescription:
      "Branded extra-long grain basmati rice with superior golden sella finish.",
  },
  {
    category: "rice",
    id: 14,
    name: "1509 Lemon Sella Rice",
    image: "/images/rice/1509-lemon-sella.png",
    shortdescription:
      "Lemon sella processed rice with creamy texture and excellent cooking yield.",
  },
  {
    category: "rice",
    id: 15,
    name: "MRM Moon Rice (1121 Extra Long Grain Lemon Sella)",
    image: "/images/rice/mrm-moon-rice.png",
    shortdescription:
      "Premium branded basmati rice with extra-long grains and refined lemon sella processing.",
  },
];
export const PulpProducts = [
  {
    category: "pulp",
    id: 1,
    name: "Alphonso Mango",
    image: "/images/pulp/alphonso-mango.png",
  },
  {
    category: "pulp",
    id: 2,
    name: "Totapuri Mango",
    image: "/images/pulp/totapuri-mango.jpg",
  },
  {
    category: "pulp",
    id: 3,
    name: "Raspuri Mango",
    image: "/images/pulp/raspuri-mango.png",
  },
  {
    category: "pulp",
    id: 4,
    name: "Neelam Mango",
    image: "/images/pulp/neelam-mango.png",
  },
  {
    category: "pulp",
    id: 5,
    name: "White Guava",
    image: "/images/pulp/white-guava.png",
  },
  {
    category: "pulp",
    id: 6,
    name: "Pink Guava",
    image: "/images/pulp/pink_guava.png",
  },
  {
    category: "pulp",
    id: 7,
    name: "Yellow Papaya",
    image: "/images/pulp/y_papaya.png",
  },
  {
    category: "pulp",
    id: 8,
    name: "Red Papaya",
    image: "/images/pulp/r_papaya.png",
  },
  // {
  //   category: "pulp",
  //   id: 8,
  //   name: "Banana",
  //   image: "/images/pulp/banana.png",
  // },
];
export const FlourProducts = [
  {
    category: "flour",
    id: 1,
    name: "Amyra Atta – Premium Quality",
    image: "/images/flour/amyra-atta-premium.png",
    shortdescription:
      "Finely milled wheat flour delivering superior softness and nutritional value.",
  },
  {
    category: "flour",
    id: 2,
    name: "Amyra Maida – All Purpose",
    image: "/images/flour/amyra-maida-all-purpose.png",
    shortdescription:
      "Refined all-purpose flour suitable for baking, cooking, and confectionery.",
  },
  {
    category: "flour",
    id: 3,
    name: "Amyra Chakki Atta – Super Value",
    image: "/images/flour/amyra-chakki-atta-super-value.png",
    shortdescription:
      "Stone-ground wheat flour offering excellent value and everyday quality.",
  },
  {
    category: "flour",
    id: 4,
    name: "Amyra Suji – Premium Quality",
    image: "/images/flour/amyra-suji-premium.png",
    shortdescription:
      "High-quality semolina with uniform granules for perfect texture.",
  },
  {
    category: "flour",
    id: 6,
    name: "Amyra Maida – Super Value",
    image: "/images/flour/amyra-maida-super-value.png",
    shortdescription:
      "Economical refined flour designed for bulk and regular usage.",
  },
  {
    category: "flour",
    id: 7,
    name: "Amyra Chiroti Rawa – Premium Quality",
    image: "/images/flour/amyra-chiroti-rawa-premium.png",
    shortdescription:
      "Fine rawa ideal for traditional sweets and premium preparations.",
  },
  {
    category: "flour",
    id: 8,
    name: "Amyra Maida – Premium Quality",
    image: "/images/flour/amyra-maida-premium.png",
    shortdescription:
      "Premium-grade refined flour offering excellent fineness and performance.",
  },
  {
    category: "flour",
    id: 9,
    name: "Amyra Suji – Super Value",
    image: "/images/flour/amyra-suji-super-value.png",
    shortdescription:
      "Cost-effective semolina suitable for large-scale cooking needs.",
  },
  {
    category: "flour",
    id: 10,
    name: "Amyra Chakki Atta – Premium Quality",
    image: "/images/flour/amyra-chakki-atta-premium.png",
    shortdescription:
      "Premium stone-ground atta with rich taste and consistent quality.",
  },
];
export const honeyProducts = [
  {
    category: "honey",
    id: 1,
    name: "Sidr Honey",
    image: "/images/honey/sidr-honey.png",
    shortdescription:
      "Rare premium honey from Sidr tree nectar, dark amber, rich taste, prized for immunity and medicinal benefits.",
    description: {
      summary:
        "Sidr Honey is known for its distinctive taste and crystalline texture, characteristics typical of premium monofloral honeys, which is why it commands a higher value in the marketplace. It contains moderate amounts of pollen, enzymes, and amino acids, offering excellent nutritional benefits.",

      sections: [
        {
          type: "text",
          title: "",
          content:
            "Traditionally, Sidr honey is harvested from Sidr trees growing in mountainous regions, where flowering occurs for only a short period each year, resulting in limited production.",
        },
        {
          type: "text",
          title: "",
          content:
            "In India, Rajasthan has a vast expanse of Sidr (Wild Berry) trees located far from human habitation and pollution, ensuring purity and natural quality.",
        },
        {
          type: "table",
          title: "",
          data: [
            {
              label: "Origin",
              value: "Rajasthan, India (Wild Sidr/Berry Region)",
            },
            {
              label: "Quality",
              value: "100% Natural | No Added Sugar | No Additives",
            },
          ],
        },
      ],
    },
  },
  {
    category: "honey",
    id: 2,
    name: "Acacia Honey",
    image: "/images/honey/acacia-honey.png",
    shortdescription:
      "Our Acacia Honey is a premium, high-quality honey renowned for its exceptional taste and purity.",
    description: {
      summary:
        "Our Acacia Honey is a premium, high-quality honey renowned for its exceptional taste and purity. Sourced from the blossoms of the acacia tree—particularly the black locust (Robinia pseudoacacia)—this honey is distinguished by its light golden color and crystal-clear consistency.",

      sections: [
        {
          type: "text",
          title: "",
          content:
            "It offers a delicately sweet flavor profile with subtle floral notes and a gentle hint of vanilla, making it one of the most refined varieties of honey.",
        },
        {
          type: "text",
          title: "",
          content:
            "We take pride in our meticulous harvesting and extraction process, ensuring that the honey retains its natural goodness. Our Acacia Honey is free from additives and preservatives.",
        },
        {
          type: "table",
          title: "",
          data: [
            {
              label: "Origin",
              value: "Serene region of the Kashmir Valley",
            },
            {
              label: "Quality",
              value: "100% Natural | No Added Sugar | No Additives",
            },
          ],
        },
      ],
    },
  },
  {
    category: "honey",
    id: 3,
    name: "Karanj Honey",
    image: "/images/honey/karanj-honey.png",
    shortdescription:
      "Medicinal honey from Karanj tree, dark color, earthy flavor, used in Ayurveda for skin care and detoxification.",
    description: {
      summary:
        "Karanj Honey carries the natural properties of the Karanja tree and contains pollen that provides natural protein benefits. Known as an immune booster, blood purifier, and skin toner, Karanj Honey is rich in essential micronutrients such as sodium, potassium, calcium, iron, and phosphorus.",

      sections: [
        {
          type: "text",
          title: "",
          content:
            "Due to its distinct flavour and aroma, Karanj Honey is especially suitable for children and women. All parts of the Karanja tree—roots, flowers, leaves, and bark—are traditionally used for medicinal purposes.",
        },
        {
          type: "text",
          title: "",
          content:
            " Karanja is widely used in managing constipation as it improves gut motility and has mild laxative properties. It may also help in piles due to its astringent and anti-inflammatory effects.",
        },
        {
          type: "text",
          title: "",
          content:
            "Maharashtra and Karnataka are the major regions contributing to Karanj Honey production.",
        },
        {
          type: "highlight",
          content: "100% Natural | No Added Sugar | Pure & Unprocessed",
        },
      ],
    },
  },
  {
    category: "honey",
    id: 4,
    name: "Sundarban Honey",
    image: "/images/honey/sundarban-honey.png",
    shortdescription:
      "Wild forest honey from Sundarbans mangroves, dark and aromatic, rich in minerals and antioxidants for immunity.",
    description: {
      summary:
        "Sundarban Honey is highly valued as it is collected from an entirely natural environment where no chemicals or preservatives are used. Bees gather nectar from the pristine mangrove forests, resulting in pure and authentic honey.",

      sections: [
        {
          type: "text",
          title: "",
          content:
            "Rich in antioxidants, Sundarban Honey may help support fat metabolism when consumed in moderation. It possesses antibacterial and antifungal properties and is high in flavonoids that may help reduce the risk of cancer, heart disease, and asthma.",
        },
        {
          type: "text",
          title: "",
          content:
            "Traditionally, it is used as a home remedy for sore throats, coughs, and colds.",
        },
        {
          type: "text",
          title: "",
          content:
            "Sourced from the mangrove forests in the southern part of West Bengal, India.",
        },
        {
          type: "highlight",
          content: "100% Natural | No Added Sugar | Pure & Unprocessed",
        },
      ],
    },
  },
  {
    category: "honey",
    id: 5,
    name: "Multi-floral Honey",
    image: "/images/honey/multifloral-honey.png",
    shortdescription:
      "Honey from various flowering plants, rich and balanced flavor, ideal for daily nutrition and overall wellness.",
    description: {
      summary:
        "Multiflora Honey is naturally extracted from the nectar of a wide variety of flowering plants. Bees forage on different flowers across seasons, giving each harvest a distinct flavour and aroma.",
      sections: [
        {
          type: "text",
          title: "",
          content:
            "Known for its natural bactericidal properties, it is traditionally used to support anemia, seasonal allergies, heart health, digestion, and skin nourishment.",
        },
        {
          type: "text",
          title: "",
          content:
            "Our Multiflora Honey offers a smooth sweetness with subtle floral and spicy undertones, creating a rich sensory experience.",
        },
        {
          type: "text",
          title: "",
          content:
            "Harvested from the dense forests of Uttarakhand and Himachal Pradesh.",
        },
        {
          type: "highlight",
          content: "100% Natural | No Added Sugar | Pure & Unprocessed",
        },
      ],
    },
  },
];
