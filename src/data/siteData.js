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
    title: "Premium Fruit Pulps & Concentrates",
    description:
      "High-quality pulps and concentrates suitable for beverages, dairy, bakery, and food processing industries. Carefully sourced from fresh fruits grown across global regions.",
    image: "/images/hero/banner-image-3.png",
    subcontent: ["Globally Sourced", "Fresh Fruits"],
  },
  {
    title: "Fresh & IQF Frozen Natural Fruits",
    description:
      "We ensure consistent quality through careful selection of fresh fruits from trusted growing regions, delivering rich taste, natural color, and superior purity.",
    image: "/images/hero/banner-image-2.png",
    subcontent: ["100% Natural", "Fruit Ingredients"],
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

export const PulpProducts = [
  {
    category: "pulp",
    id: 1,
    name: "Alphonso Mango",
    image: "/images/pulp/alphonso-mango.png",
    shortdescription:
      "The King of Fruits – known for its full-bodied pulp, rich sweetness, and deep color. Premium variety high in beta-carotene and vitamin B complex.",
    description: {
      summary:
        "The King of Fruits – that is the Alphonso Mango. Known for its full-bodied pulp, the rich flavour of its sweetness and the deep color of the fruit, the Alphonso mango is the most premium variety of mango. It can also be found in the areas surrounding Mysore and Belgaum in South & West Karnataka, along with the coastal areas of Gujarat. Alphonso Mango is high in beta-carotene, a precursor of vitamin A, and is a rich source of the vitamin B complex.",
      sections: [
        {
          type: "text",
          title: "",
          content:
            "Known locally as the Aapoos, and as Hapoos in most of South Asia, the variety of Alphonso Mango grown in Devgad in the Konkan region of Maharashtra state in India is considered as the best. Sunrise sources the raw produce from this very belt to deliver to you the best from India.",
        },
        {
          type: "text",
          title: "",
          content:
            "The product is derived from fresh, sound, ripe, Alphonso Mango fruit (Mangifera Indica L Anacardiacae VAR Alphonso). Firm fully matured mangoes are harvested, quickly transported to fruit processing plant & inspected. Selected suitable quality of fruits goes into the atmospheric controlled ripening chambers and allowed to ripen. The matured ripened fruits are washed, deseeded, pulp extracted, thermally processed and aseptically filled by HTST process in pre-sterilized bags which are hermetically sealed, processed and cooled.",
        },
        {
          type: "table",
          title: "",
          data: [
            {
              label: "Appearance",
              value:
                "Uniform, homogeneous, smooth, free from fibers and any foreign matter",
            },
            {
              label: "Aroma and Flavor",
              value:
                "Characteristic prominent aroma of natural ripe Alphonso Mangoes, free from any fermented & off-flavor, and scorched or caramelized flavor.",
            },
            {
              label: "Taste",
              value:
                "Characteristic typical sweet acidic taste of natural ripe Alphonso Mango. Free from any off taste.",
            },
            {
              label: "Color",
              value: "Orangish yellow",
            },
            {
              label: "Physical Characteristics",
              value:
                "Brix @ 20ºC: 16 – 18º | Acidity: 0.60 to 1.20 (As % anhydrous citric acid W/W) | pH @ 20ºC: 3.8 to 3.8 | Consistency @ 20° C: 6 – 12 cm / 30 Sec (Bostwick) | Black Specks: Brown Specks: < 5 no per 10 gms.",
            },
            {
              label: "Microbiological Standards",
              value:
                "Total Plate Count: <10 CFU per gram. | Yeast and Mould Count: <10 CFU per gram | Coliform: Absent per gram | Pathogens: Absent per gram | 'Commercially sterile', free from bacillus, osomophilic yeast, coliform and any other pathogenic microorganism and fit for human consumption.",
            },
          ],
        },
      ],
    },
  },
  {
    category: "pulp",
    id: 2,
    name: "Totapuri Mango",
    image: "/images/pulp/totapuri-mango.jpg",
    shortdescription:
      "Large golden yellow mango with oblong shape and beak-like end. Rich in vitamins A, E, C & B5, excellent for skin and immunity.",
    description: {
      summary:
        "Totapuri Mango is the famous mango found primarily in Andhra Pradesh. The Totapuri Mango is also grown in the Indian States of Karnataka and Tamil Nadu. These mangoes are large in size and golden yellow in colour. It is oblong in shape and has a prominent beak-like pointed end. These mangoes vary in length but are generally about 7 inches long. The skin of the fruit is usually thick and the colour can vary from green to yellow.",
      sections: [
        {
          type: "text",
          title: "",
          content:
            "This variety of mango is known to contain nutrients, such as vitamins A, E, C & B5 and is an excellent source of Vitamin A and C. Some of these vitamins are good for adding a glow to the skin and its antioxidant enzymes provide nourishment to body while increasing resistance power.",
        },
        {
          type: "text",
          title: "",
          content:
            "The product is derived from fresh, sound ripe, Totapuri Mango fruit (Mangifera Indica L Anacardiacae VAR Totapuri). Firm Fully matured mangoes are harvested, quickly transported to fruit processing plant and inspected. Selected high quality fruits go to the controlled ripening chambers and allowed to ripen. Fully ripened mango fruits are then washed, deseeded, pulp extracted, centrifuged, thermally processed and aseptically filled by HTST process into pre-sterilized bags or OTS cans which are hermetically sealed processed and cooled.",
        },
        {
          type: "table",
          title: "",
          data: [
            {
              label: "Appearance",
              value:
                "Uniform, homogeneous, smooth, free from fibers and any foreign matter.",
            },
            {
              label: "Aroma and Flavor",
              value:
                "Characteristic prominent aroma of natural ripe Totapuri Mango, free from any fermented & off flavor and scorched or caramelized flavor.",
            },
            {
              label: "Taste",
              value:
                "Characteristic typical sweet acidic taste of natural ripe Totapuri Mango. Free from any off taste.",
            },
            {
              label: "Color",
              value: "Golden yellow – deep yellow.",
            },
            {
              label: "Physical Characteristics",
              value:
                "Brix @ 20ºC: 14 – 16º Min | Acidity: 0.6 to 0.8 (As % anhydrous citric acid W/W) | pH @ 20ºC: 3.3 to 3.8 | Consistency@ 20° C: 7 – 12 cm / 30 Sec (Bostwick) | Black Specks: < 3 no per 10 gms | Brown Specks: < 5 no per 10 Gms.",
            },
            {
              label: "Microbiological Standards",
              value:
                "Total Plate Count: <10 CFU per gram. | Yeast and Mould Count: <10 CFU per gram | Coliform: Absent per gram | Pathogens: Absent per gram",
            },
          ],
        },
      ],
    },
  },
  {
    category: "pulp",
    id: 3,
    name: "Raspuri Mango",
    image: "/images/pulp/raspuri-mango.png",
    shortdescription:
      "Juicy mango with excellent flavor, rich in carotenes. Popular in Mysore, ideal for ice creams, yogurts, and smoothies.",
    description: {
      summary:
        "Raspuri Mangoes have an excellent flavor and are juicy in texture. They are rich in carotenes which is a pre cursor of vitamin A. This mango is grown widely in the south of India, primarily Karnataka. The Raspuri Mangoes are largely grown and eaten in Mysore, where their popularity is unrivalled.",
      sections: [
        {
          type: "text",
          title: "",
          content:
            "Like the Alphonso and the Totapuri mango, the Raspuri mango is used in the making of ice creams, yogurts, smoothies, juices, jams and jellies.",
        },
        {
          type: "text",
          title: "",
          content:
            "The product is derived from fresh, sound ripe, Raspuri Mango fruit (Mangifera Indica L Anacardiacae VAR Raspuri). Fully matured mangoes are harvested, quickly transported to fruit processing plant, inspected, Selected high quality fruits go to the Atmospheric controlled ripening chambers, fully ripened mango fruits are then Selected and washed, deseeded, pulped, centrifuged, thermally processed and aseptically filled by HTST process into pre-sterilized bags or OTS cans which are hermetically sealed processed and cooled.",
        },
        {
          type: "table",
          title: "",
          data: [
            {
              label: "Appearance",
              value: "Uniform, homogeneous and Free from any foreign matter.",
            },
            {
              label: "Aroma and Flavor",
              value:
                "Characteristic prominent aroma of natural ripe Raspuri Mango and free from any fermented & offensive flavor. Particularly free from scorched or caramelized flavor.",
            },
            {
              label: "Taste",
              value:
                "Characteristic typical acidic sweet taste of natural ripe Raspuri Mango. Free from any off taste.",
            },
            {
              label: "Color",
              value: "Orange Yellow.",
            },
            {
              label: "Physical Characteristics",
              value:
                "°Brix: 14.5 Min. | Acidity: 0.6 to 0.8 (As % anhydrous citric acid W/W) | PH @ 20°C: 3.75 – 4 | Consistency@ 20° C: 10 – 15 cm / 30 Sec (Bostwick Consistometer) | Black Specks: < 5 no per 10 Gms | Brown Specks: < 5 no per 10 Gms.",
            },
            {
              label: "Microbiological Standards",
              value:
                "Total Plate Count: <10 CFU per gram. | Yeast and Mould Count: <10 CFU per gram | Coliform: Absent per gram | Pathogens: Absent per gram | 'Commercially sterile', free from bacillus, osomophilic yeast, coliform and any other pathogenic microorganism and fit for human consumption. Product is free from added sugar, dyestuff, synthetic flavor, stabilizers, pesticides & herbicidal residues and radioactive contamination.",
            },
          ],
        },
      ],
    },
  },
  {
    category: "pulp",
    id: 4,
    name: "Neelam Mango",
    image: "/images/pulp/neelam-mango.png",
    shortdescription:
      "Beautiful oblong mango with divine floral aroma. Popular choice packed with calories, protein, vitamins, and minerals.",
    description: {
      summary:
        "Neelam Mangoes are known for their beautiful shape, taste and divine floral aroma. The Neelam is a popular choice and is renowned for its availability.",
      sections: [
        {
          type: "text",
          title: "",
          content:
            "The Neelam is highly relished by mango fans across the globe. However, it is primarily grown in Andhra Pradesh, Karnataka and Tamil Nadu. This mango is large in size and oblong shaped with pointed base and golden yellow color.",
        },
        {
          type: "text",
          title: "",
          content:
            "One medium sized mango comprises of Calories, Protein, Carbohydrate, Fat, Fiber, Vitamin A, Vitamin C, Magnesium, Potassium, Calcium and Cholesterol. The product is derived from fresh, sound ripe, Neelam Mango fruit (Mangifera Indica L Anacardiacae VAR Neelam). Fully matured mangoes are harvested, quickly transported to fruit processing plant, inspected. Selected high quality fruits go to the Atmospheric controlled ripening chambers, fully ripened mango fruits are then Selected and washed, deseeded, pulped, centrifuged, thermally processed and aseptically filled by HTST process into pre-sterilized bags or OTS cans which are hermetically sealed processed and cooled.",
        },
        {
          type: "table",
          title: "",
          data: [
            {
              label: "Appearance",
              value:
                "Uniform, homogeneous smooth, free from fibers and any foreign matter.",
            },
            {
              label: "Aroma and Flavor",
              value:
                "Characteristic prominent aroma of natural ripe Neelam Mango and free from any fermented & offensive flavor. Particularly free from scorched or caramelized flavor.",
            },
            {
              label: "Taste",
              value:
                "Characteristic typical acidic sweet taste of natural ripe Neelam Mango. Free from any off taste.",
            },
            {
              label: "Color",
              value: "Golden yellow – deep yellow.",
            },
            {
              label: "Physical Characteristics",
              value:
                "Brix @ 20ºC: 16º Min | Acidity: 0.6 to 0.70 (As % anhydrous citric acid W/W) | PH @ 20°C: 3.75 – 4.20 | Consistency@ 20° C: 7 – 12 cm / 30 Sec (Bostwick) | Black Specks: < 5 no per 10 Gms | Brown Specks: < 5 no per 10 gms.",
            },
            {
              label: "Microbiological Standards",
              value:
                "Total Plate Count: <10 CFU per gram. | Yeast and Mould Count: <10 CFU per gram | Coli form: Absent per gram | Pathogens: Absent per gram | 'Commercially sterile', free from bacillus, osomophilic yeast, coliform and any other pathogenic microorganism and fit for human consumption. Product is free from added sugar, dyestuff, synthetic flavor, stabilizers, pesticides & herbicidal residues and radioactive contamination.",
            },
          ],
        },
      ],
    },
  },
  {
    category: "pulp",
    id: 5,
    name: "White Guava",
    image: "/images/pulp/white-guava.png",
    shortdescription:
      "Super-fruit with four times the Vitamin C of an orange. Produced primarily in Andhra Pradesh, Tamil Nadu, and Karnataka.",
    description: {
      summary:
        "Few would know that the Guava finds it origins in Central America and Mexico. Today of course the fruit has spread throughout the world, and right from Hawaii to India. In India, White Guava is primarily produced in Andhra Pradesh, Tamil Nadu, Karnataka, Maharashtra and Uttar Pradesh. Allahabad Variety, produced in Allahabad, Uttar Pradesh, Is generally considered the best.",
      sections: [
        {
          type: "text",
          title: "",
          content:
            "The fruit is included amongst super-fruits for health given rich base of health properties. A single guava contains four times the amount of Vitamin C as that in an orange.",
        },
        {
          type: "text",
          title: "",
          content:
            "The product is derived from fresh, sound ripe, White Guava fruit (Psidium guajava Mytraceae VAR Pink & white). Firm fully matured Guavas are harvested, quickly transported to fruit processing plant and inspected. Fully ripened Guava fruits are then washed, deseeded, pulp extracted, centrifuged (if required) thermally processed and aseptically filled by HTST process into pre-sterilized bags or in OTS cans which are hermetically sealed processed and cooled.",
        },
        {
          type: "table",
          title: "",
          data: [
            {
              label: "Appearance",
              value:
                "Uniform, gritty, smooth, free from fibers and any foreign matter.",
            },
            {
              label: "Aroma and Flavor",
              value:
                "Characteristic prominent aroma of natural ripe Guava and free from any fermented & off flavor and free from scorched or caramelized flavor.",
            },
            {
              label: "Taste",
              value:
                "Characteristic typical sweet acidic taste of natural ripe Guava fruit. Free from any off taste.",
            },
            {
              label: "Color",
              value: "Appealing Ivory white to creamish white.",
            },
            {
              label: "Physical Characteristics",
              value:
                "Brix @ 20ºC: 9° Min | Acidity: 0.45 to 0.60 (As % anhydrous citric acid W/W) | pH @ 20ºC: 3.75 to 4.20 | Consistency@ 20°C: 6 – 10 cm / 30 Sec (Bostwick) | Black Specks: < Nil | Brown Specks: < 10 no per 10 Gms.",
            },
            {
              label: "Microbiological Standards",
              value:
                "Total Plate Count: <10 CFU per gram. | Yeast and Mould Count: <10 CFU per gram | Coliform: Absent per gram | Pathogens: Absent per gram | 'Commercially sterile', free from bacillus, osomophilic yeast, coliform and any other pathogenic microorganism and fit for human consumption.",
            },
          ],
        },
      ],
    },
  },
  {
    category: "pulp",
    id: 6,
    name: "Pink Guava",
    image: "/images/pulp/pink_guava.png",
    shortdescription:
      "Rich in polyphenol, carotenoid and pro-vitamin A. Helps with blood pressure, cholesterol, and strengthens the heart.",
    description: {
      summary:
        "Guavas that are pink have more pigment content as polyphenol, carotenoid and pro-vitamin A, than the white pulped variant. Other than that everything about the Guava fruit in all colors is similar. Found across the globe, in India, the Pink Guava is primarily cultivated in Karnataka, Maharashtra and Uttar Pradesh.",
      sections: [
        {
          type: "text",
          title: "",
          content:
            "This super-fruit is a greatly recommended to deal with health issues such as high blood pressure and cholesterol, treatment of constipation, congested lungs, amongst others. It is also believed to strengthen the heart and improve blood circulation.",
        },
        {
          type: "text",
          title: "",
          content:
            "The product is derived from fresh, sound ripe, Pink Guava fruit (Psidium guajava Mytraceae VAR Pink & white). Firm fully matured Guavas are harvested, quickly transported to fruit processing plant and inspected. Fully ripened Guava fruits are then washed, deseeded, pulp extracted, centrifuged (if required) thermally processed and aseptically filled by HTST process into pre-sterilized bags or in OTS cans which are hermetically sealed processed and cooled.",
        },
        {
          type: "table",
          title: "",
          data: [
            {
              label: "Appearance",
              value:
                "Uniform, gritty, smooth, free from fibers and any foreign matter.",
            },
            {
              label: "Aroma and Flavor",
              value:
                "Characteristic prominent aroma of natural ripe Guava and free from any fermented & off flavor and free from scorched or caramelized flavor.",
            },
            {
              label: "Taste",
              value:
                "Characteristic typical sweet acidic taste of natural ripe Guava fruit. Free from any off taste.",
            },
            {
              label: "Color",
              value: "Appealing Pink.",
            },
            {
              label: "Physical Characteristics",
              value:
                "Brix @ 20ºC: 8º Min | Acidity: 0.45 to 0.60 (As % anhydrous citric acid W/W) | pH @ 20ºC: 3.75 to 4.20 | Consistency@ 20°C: 6 – 10 cm / 30 Sec (Bostwick) | Black Specks:< Nil | Brown Specks: < 10 no per 10 Gms.",
            },
            {
              label: "Microbiological Standards",
              value:
                "Total Plate Count: <10 CFU per gram. | Yeast and Mould Count: <10 CFU per gram | Coliform: Absent per gram | Pathogens: Absent per gram | 'Commercially sterile', free from bacillus, osomophilic yeast, coliform and any other pathogenic microorganism and fit for human consumption.",
            },
          ],
        },
      ],
    },
  },
  {
    category: "pulp",
    id: 7,
    name: "Yellow Papaya",
    image: "/images/pulp/y_papaya.png",
    shortdescription:
      "Hawaiian variety papaya containing natural papain enzyme. Grown abundantly in Karnataka and Andhra Pradesh.",
    description: {
      summary:
        "The Yellow Papaya, is the Hawaiian variety of the Mexican Papayas and properties are similar to the Red variety of Mexican Papayas.",
      sections: [
        {
          type: "text",
          title: "",
          content:
            "The Papaya finds it remedial origins dating back to the 16th century. Today the natural papain enzyme that the Papaya contains is made into what you commonly known as antacid tablets. A common fruit across tropical regions of the world the Yellow Papaya is abundantly grown in India in Karnataka and Andhra Pradesh. We bring the choicest selection of the fruit for you.",
        },
        {
          type: "text",
          title: "",
          content:
            "The Yellow Papaya Fruits (Carica Papaya L.) are harvested and quickly transported to fruit processing plant & inspected. Fully firm selected varieties of Papaya fruits go to the controlled ripening chambers and allowed to ripen. It is then followed by a series of processes which includes washing, peeling, blanching, inspecting, deseeding, extracting the pulp, centrifuging, thermally processing and concentrating. The concentrate is sterilized and aseptically filled in pre-sterilized bags. The process ensures that the natural flavor & aroma of the fruit is retained in final product.",
        },
        {
          type: "table",
          title: "",
          data: [
            {
              label: "Appearance",
              value:
                "Perfect homogeneous, smooth, free from fibers and any foreign matter.",
            },
            {
              label: "Aroma and Flavor",
              value:
                "Characteristic prominent aroma of natural ripe Papaya and free from any fermented & off flavor and scorched or caramelized flavor.",
            },
            {
              label: "Taste",
              value: "Characteristic typical sweet acidic taste.",
            },
            {
              label: "Color",
              value: "Bright Yellow color.",
            },
            {
              label: "Physical Characteristics",
              value:
                "Brix @ 20ºC: 9° Min | Acidity: 0.30 – 0.60 (As % anhydrous citric acid w/w) | pH @ 20ºC: 3.75 – 4.00 | Consistency@ 20°C: 8 – 15 cm / 30 Sec (Bostwick) | Black Specks: 3 per 10 gms | Brown Specks: < 5 no per 10 gms.",
            },
            {
              label: "Microbiological Standards",
              value:
                "Total Plate Count: < 50 CFU per gram. | Yeast and Mould Count: < 20 CFU per gram | Coliform: Absent per gram | Pathogens: Absent per gram | 'Commercially sterile', free from bacillus, osomophilic yeast, coliform and any other pathogenic microorganism and fit for human consumption.",
            },
          ],
        },
      ],
    },
  },
  {
    category: "pulp",
    id: 8,
    name: "Red Papaya",
    image: "/images/pulp/r_papaya.png",
    shortdescription:
      "The 'Fruit of Angels' loaded with fiber, potassium, iron, calcium, vitamin A and C. Helps protect against cancer and digestive issues.",
    description: {
      summary:
        "It is believed that Christopher Columbus called the Red Papaya the 'Fruit of Angels.' It is not known if he said this because of its luscious color and sweetness, or the nutritive values it offered. Loaded with nutrients, the fruit is believed to protect against cancer, help in digestive problems, and also the sweet fruit that diabetics can have. Further, Papayas also contain high fiber potassium, iron, calcium, plus the daily requirement of vitamin A and three days worth of vitamin C.",
      sections: [
        {
          type: "text",
          title: "",
          content:
            "The Red Papaya is grown across all tropical regions in the world with India leading the list. The fruit is very popular across the country, and we are happy to be able to source the best of the produce for you.",
        },
        {
          type: "text",
          title: "",
          content:
            "The Red Papaya Fruits (Carica Papaya L.) are harvested, quickly transported to fruit processing plant & inspected. Fully firm selected high quality fruits go to the controlled ripening chambers and are allowed to ripen. Fully ripened Papaya fruits are then washed, peeled, blanched, inspected and deseeded. The extracted pulp is then centrifuged, thermally processed and aseptically filled in pre-sterilized bags. The process ensures that the natural flavor & aroma of the fruit is retained in final product.",
        },
        {
          type: "table",
          title: "",
          data: [
            {
              label: "Appearance",
              value:
                "Perfect homogeneous, smooth, free from fibers and any foreign matter.",
            },
            {
              label: "Aroma and Flavor",
              value:
                "Characteristic prominent aroma of natural ripe Papaya, free from any fermented & off flavor and scorched or caramelized flavor.",
            },
            {
              label: "Taste",
              value: "Characteristic typical sweet acidic taste.",
            },
            {
              label: "Color",
              value: "Rich Orange Red color.",
            },
            {
              label: "Physical Characteristics",
              value:
                "Brix @ 20ºC: 9° Min | Acidity: 0.30 – 0.60 (As % anhydrous citric acid w/w) | pH @ 20ºC: 3.75 – 4.20 | Consistency @ 20°C: 8 -15 cm / 30 Sec (Bostwick) | Black Specks: 3 per 10 gms | Brown Specks: < 5 no per 10 Gms.",
            },
            {
              label: "Microbiological Standards",
              value:
                "Total Plate Count: < 50 CFU per gram. | Yeast and Mould Count: < 20 CFU per gram | Coliform: Absent per gram | Pathogens: Absent per gram | 'Commercially sterile', free from bacillus, osomophilic yeast, coliform and any other pathogenic microorganism and fit for human consumption.",
            },
          ],
        },
      ],
    },
  },
];
export const FlourProducts = [
  {
    category: "flour",
    id: 1,
    name: "Amyra Atta – Premium Quality",
    image: "/images/flour/amyra-atta-premium.png",
    shortdescription:
      "Finely milled wheat flour delivering superior softness and nutritional value.",
    description: {
      summary:
        "Amyra Premium Quality Atta is crafted from the finest quality wheat grains, carefully selected and finely milled to preserve maximum nutrition and taste. This premium whole wheat flour undergoes rigorous quality checks to ensure consistent particle size and superior baking properties. Rich in dietary fiber, protein, and essential minerals, our premium atta produces soft, fluffy rotis that stay fresh for longer. The fine milling process ensures easy kneading and rolling, making it perfect for both everyday cooking and special occasions. Ideal for making traditional Indian breads like chapatis, parathas, and puris, this atta delivers authentic taste with every meal.",
      sections: [
        {
          type: "text",
          content: "Product Features",
        },
        {
          type: "list",
          title: "",
          items: [
            { id: 1, value: "Made from 100% whole wheat grains" },
            { id: 2, value: "Finely milled for superior texture" },
            { id: 3, value: "Rich in fiber, protein, and minerals" },
            { id: 4, value: "Produces soft and fluffy rotis" },
            { id: 5, value: "Easy to knead and roll" },
            { id: 6, value: "Long-lasting freshness" },
            { id: 7, value: "No artificial additives or preservatives" },
            { id: 8, value: "Suitable for all types of Indian breads" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 1kg | 5kg | 10kg | 25kg | 50kg",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "flour",
    id: 2,
    name: "Amyra Maida – All Purpose",
    image: "/images/flour/amyra-maida-all-purpose.png",
    shortdescription:
      "Refined all-purpose flour suitable for baking, cooking, and confectionery.",
    description: {
      summary:
        "Amyra All Purpose Maida is a versatile refined flour that serves as the foundation for countless culinary creations. This finely processed wheat flour undergoes multiple stages of refinement to achieve a smooth, fine texture perfect for baking and cooking. With its neutral flavor and excellent binding properties, this maida is ideal for preparing a wide range of dishes from fluffy cakes and crispy biscuits to smooth sauces and crispy pakoras. The consistent quality ensures predictable results every time, making it a favorite among home bakers and professional chefs alike. This all-purpose flour adapts seamlessly to both Western and Indian recipes.",
      sections: [
        {
          type: "text",
          content: "Product Features",
        },
        {
          type: "list",
          title: "",
          items: [
            { id: 1, value: "Ultra-refined for smooth texture" },
            { id: 2, value: "Excellent binding and gluten properties" },
            { id: 3, value: "Perfect for baking cakes, pastries, and cookies" },
            { id: 4, value: "Ideal for making naan, kulcha, and bhaturas" },
            { id: 5, value: "Creates crispy coating for fried snacks" },
            { id: 6, value: "Neutral flavor complements all recipes" },
            { id: 7, value: "Consistent quality for reliable results" },
            { id: 8, value: "Suitable for both sweet and savory dishes" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 500g | 1kg | 5kg | 10kg | 25kg | 50kg",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "flour",
    id: 3,
    name: "Amyra Chakki Atta – Super Value",
    image: "/images/flour/amyra-chakki-atta-super-value.png",
    shortdescription:
      "Stone-ground wheat flour offering excellent value and everyday quality.",
    description: {
      summary:
        "Amyra Chakki Atta Super Value brings traditional stone-grinding methods to your kitchen at an unbeatable price point. This whole wheat flour is ground using the age-old chakki (stone mill) process, which preserves the natural nutrients and fiber of the wheat grain. The slow grinding process ensures minimal heat generation, retaining the wheat's natural oils and earthy aroma. Perfect for daily consumption, this atta produces nutritious and tasty rotis that keep your family healthy and satisfied. The super value packaging makes it an economical choice for large families and bulk cooking needs without compromising on quality or taste.",
      sections: [
        {
          type: "text",
          content: "Product Features",
        },
        {
          type: "list",
          title: "",
          items: [
            { id: 1, value: "Traditional stone-ground (chakki) process" },
            { id: 2, value: "Retains natural wheat nutrients and fiber" },
            { id: 3, value: "Preserves natural oils and aroma" },
            { id: 4, value: "Excellent value for money" },
            { id: 5, value: "Perfect for everyday cooking" },
            { id: 6, value: "Produces healthy and tasty rotis" },
            { id: 7, value: "Ideal for bulk and family consumption" },
            { id: 8, value: "No added preservatives or chemicals" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "flour",
    id: 4,
    name: "Amyra Suji – Premium Quality",
    image: "/images/flour/amyra-suji-premium.png",
    shortdescription:
      "High-quality semolina with uniform granules for perfect texture.",
    description: {
      summary:
        "Amyra Premium Quality Suji (Semolina) is crafted from the finest quality durum wheat, carefully processed to achieve uniform granule size and superior quality. This coarse wheat flour is perfect for preparing a wide variety of traditional Indian dishes, from the classic rava dosa and upma to delicious halwa and kesari. The premium processing ensures consistent texture and color, resulting in dishes with excellent mouthfeel and taste. Rich in protein and carbohydrates, this suji provides sustained energy and is easy to digest. The uniform granules cook evenly and quickly, making meal preparation efficient and enjoyable.",
      sections: [
        {
          type: "text",
          content: "Product Features",
        },
        {
          type: "list",
          title: "",
          items: [
            { id: 1, value: "Made from premium durum wheat" },
            { id: 2, value: "Uniform granule size for consistent cooking" },
            { id: 3, value: "Perfect for rava dosa, idli, and upma" },
            { id: 4, value: "Excellent for sweet preparations like halwa" },
            { id: 5, value: "Rich in protein and carbohydrates" },
            { id: 6, value: "Quick cooking and easy to digest" },
            { id: 7, value: "Natural golden color" },
            { id: 8, value: "Versatile for both sweet and savory dishes" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 500g | 1kg | 5kg | 10kg | 25kg",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "flour",
    id: 5,
    name: "Amyra Maida – Super Value",
    image: "/images/flour/amyra-maida-super-value.png",
    shortdescription:
      "Economical refined flour designed for bulk and regular usage.",
    description: {
      summary:
        "Amyra Maida Super Value is designed for high-volume users who require consistent quality at economical prices. This refined flour is ideal for commercial kitchens, bakeries, restaurants, and large families who use maida regularly. Despite its value pricing, the flour maintains good quality standards with fine texture and adequate binding properties. Perfect for everyday baking, frying, and cooking applications, this maida delivers reliable results across various culinary preparations. The bulk packaging options make it convenient for businesses and households that prioritize cost-effectiveness without significant compromise on performance.",
      sections: [
        {
          type: "text",
          content: "Product Features",
        },
        {
          type: "list",
          title: "",
          items: [
            { id: 1, value: "Economical pricing for bulk users" },
            { id: 2, value: "Consistent quality for regular use" },
            { id: 3, value: "Suitable for commercial kitchens and bakeries" },
            { id: 4, value: "Good binding and baking properties" },
            { id: 5, value: "Ideal for fried snacks and batters" },
            { id: 6, value: "Perfect for everyday cooking needs" },
            { id: 7, value: "Available in large pack sizes" },
            { id: 8, value: "Cost-effective without major quality compromise" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "flour",
    id: 6,
    name: "Amyra Chiroti Rawa – Premium Quality",
    image: "/images/flour/amyra-chiroti-rawa-premium.png",
    shortdescription:
      "Fine rawa ideal for traditional sweets and premium preparations.",
    description: {
      summary:
        "Amyra Premium Quality Chiroti Rawa is a superfine semolina specially processed for preparing traditional South Indian delicacies and premium sweets. This ultra-refined rawa is finer than regular semolina, creating a smooth, melt-in-mouth texture in finished dishes. Particularly prized for making chiroti (a layered sweet pastry), this rawa also excels in preparing premium quality rava laddoos, rava kesari, and other festive sweets. The fine granulation ensures even cooking and superior absorption of flavors, resulting in dishes with exceptional taste and texture. This premium product is the choice of professional sweet makers and discerning home cooks who demand the best results.",
      sections: [
        {
          type: "text",
          content: "Product Features",
        },
        {
          type: "list",
          title: "",
          items: [
            { id: 1, value: "Superfine granulation for premium texture" },
            { id: 2, value: "Perfect for chiroti and traditional sweets" },
            { id: 3, value: "Creates melt-in-mouth consistency" },
            { id: 4, value: "Excellent for rava laddoos and kesari" },
            { id: 5, value: "Superior flavor absorption" },
            { id: 6, value: "Cooks evenly and quickly" },
            { id: 7, value: "Preferred by professional sweet makers" },
            { id: 8, value: "Ideal for festive and special occasions" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 500g | 1kg | 5kg | 10kg",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "flour",
    id: 7,
    name: "Amyra Maida – Premium Quality",
    image: "/images/flour/amyra-maida-premium.png",
    shortdescription:
      "Premium-grade refined flour offering excellent fineness and performance.",
    description: {
      summary:
        "Amyra Premium Quality Maida represents the pinnacle of refined flour processing, offering exceptional fineness, purity, and performance. This ultra-refined flour undergoes stringent quality controls and advanced processing to achieve the perfect texture for premium baking and culinary applications. The superior gluten quality ensures excellent dough elasticity and gas retention, resulting in lighter, fluffier baked goods with perfect rise and texture. Ideal for preparing high-quality cakes, pastries, bread, and artisan pizzas, this maida is the choice of professional bakers and gourmet chefs. The pristine white color and silky texture elevate the visual and textural appeal of all preparations.",
      sections: [
        {
          type: "text",
          content: "Product Features",
        },
        {
          type: "list",
          title: "",
          items: [
            { id: 1, value: "Ultra-refined for premium quality" },
            { id: 2, value: "Superior gluten content for excellent baking" },
            { id: 3, value: "Perfect for professional baking and pastries" },
            { id: 4, value: "Exceptional dough elasticity and gas retention" },
            { id: 5, value: "Creates lighter and fluffier baked goods" },
            { id: 6, value: "Pristine white color and silky texture" },
            {
              id: 7,
              value: "Ideal for artisan bread and gourmet preparations",
            },
            { id: 8, value: "Trusted by professional chefs and bakers" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 500g | 1kg | 5kg | 10kg | 25kg",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "flour",
    id: 8,
    name: "Amyra Suji – Super Value",
    image: "/images/flour/amyra-suji-super-value.png",
    shortdescription:
      "Cost-effective semolina suitable for large-scale cooking needs.",
    description: {
      summary:
        "Amyra Suji Super Value is designed for high-volume users who need reliable quality semolina at economical prices. This product is perfect for commercial kitchens, hostels, canteens, and large families where semolina is used frequently for preparing everyday meals. While offering excellent value, this suji maintains good cooking properties and taste, making it suitable for preparing upma, rava dosa, idli, and other traditional dishes. The bulk packaging reduces per-unit costs significantly, making it an intelligent choice for budget-conscious buyers who don't want to compromise entirely on quality. Ideal for institutions and businesses that prioritize cost management.",
      sections: [
        {
          type: "text",
          content: "Product Features",
        },
        {
          type: "list",
          title: "",
          items: [
            { id: 1, value: "Economical pricing for bulk requirements" },
            { id: 2, value: "Suitable for commercial and institutional use" },
            { id: 3, value: "Good for everyday cooking preparations" },
            { id: 4, value: "Ideal for upma, dosa, and idli" },
            { id: 5, value: "Reliable cooking properties" },
            { id: 6, value: "Cost-effective for large-scale needs" },
            { id: 7, value: "Available in bulk pack sizes" },
            { id: 8, value: "Value-oriented without major quality loss" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "flour",
    id: 9,
    name: "Amyra Chakki Atta – Premium Quality",
    image: "/images/flour/amyra-chakki-atta-premium.png",
    shortdescription:
      "Premium stone-ground atta with rich taste and consistent quality.",
    description: {
      summary:
        "Amyra Premium Quality Chakki Atta represents the perfect fusion of traditional stone-grinding methods and modern quality standards. Carefully selected premium wheat grains are ground using traditional stone mills (chakki) at controlled temperatures to preserve maximum nutrition, natural oils, and authentic wheat aroma. This premium atta delivers consistently soft, flavorful rotis that stay fresh and pliable for longer periods. The slow stone-grinding process ensures the fiber remains intact while producing a fine, uniform texture that's easy to knead and roll. Rich in essential nutrients, minerals, and dietary fiber, this atta provides wholesome nutrition with every meal while delivering the authentic taste that discerning consumers appreciate.",
      sections: [
        {
          type: "text",
          content: "Product Features",
        },
        {
          type: "list",
          title: "",
          items: [
            { id: 1, value: "Premium wheat grains stone-ground traditionally" },
            { id: 2, value: "Preserves maximum nutrition and natural oils" },
            { id: 3, value: "Consistently soft and flavorful rotis" },
            { id: 4, value: "Rich authentic wheat aroma and taste" },
            { id: 5, value: "Fine uniform texture for easy kneading" },
            { id: 6, value: "High fiber content for better digestion" },
            { id: 7, value: "Stays fresh and pliable longer" },
            { id: 8, value: "Perfect for health-conscious families" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 1kg | 5kg | 10kg | 25kg",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
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
      "Premium light golden honey with crystal-clear consistency, delicate sweetness, and subtle vanilla notes from Kashmir Valley.",
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
            "Karanja is widely used in managing constipation as it improves gut motility and has mild laxative properties. It may also help in piles due to its astringent and anti-inflammatory effects.",
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

export const riceProducts = [
  {
    category: "rice",
    id: 1,
    name: "1401 Raw Basmati Rice",
    image: "/images/rice/1401-raw-basmati.png",
    shortdescription:
      "Premium long-grain basmati rice with natural aroma and superior elongation.",
    description: {
      summary:
        "1401 Raw Basmati Rice is a premium long-grain variety known for its exceptional aroma and superior cooking quality. Sourced from the finest basmati-growing regions of India, this rice features naturally long grains that elongate beautifully upon cooking. Its distinctive fragrance and fluffy texture make it the perfect choice for biryanis, pulaos, and other aromatic rice dishes. This raw (non-parboiled) variety retains its natural nutrients and delivers an authentic basmati experience.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 2,
    name: "PR11 Golden Sella Non Basmati Rice",
    image: "/images/rice/pr11-golden-sella-non-basmati.png",
    shortdescription:
      "High-quality parboiled rice offering consistency and excellent cooking results.",
    description: {
      summary:
        "PR11 Golden Sella is a premium non-basmati parboiled rice variety that undergoes a unique steam-pressure process before milling. This golden-hued rice is known for its firm texture, non-sticky grains, and excellent shelf life. The parboiling process enhances its nutritional value by driving nutrients from the bran into the grain. PR11 Golden Sella is ideal for everyday meals, fried rice preparations, and bulk cooking requirements where consistency and quality are paramount.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 3,
    name: "1211 Golden Sella Basmati Rice",
    image: "/images/rice/1211-golden-sella-basmati.png",
    shortdescription:
      "Aromatic basmati rice with golden sella processing for enhanced durability.",
    description: {
      summary:
        "1211 Golden Sella Basmati Rice combines the aromatic qualities of traditional basmati with the benefits of parboiling. This golden variety features long, slender grains with the characteristic basmati aroma. The sella process gives it a beautiful golden color while improving its cooking properties and nutritional content. These grains remain separate and fluffy after cooking, making them perfect for pilafs, biryanis, and international rice dishes. Its enhanced shelf stability makes it an excellent choice for both domestic and export markets.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 4,
    name: "1121 Steam Basmati Rice",
    image: "/images/rice/1121-steam-basmati.png",
    shortdescription:
      "Extra-long grain basmati rice processed with steam for purity and softness.",
    description: {
      summary:
        "1121 Steam Basmati Rice is the crown jewel of basmati varieties, featuring extra-long grains that can reach up to 8.4mm in length. This steam-processed rice undergoes a gentle steaming method that preserves its natural white color while enhancing its nutritional profile. Known for its exceptional elongation during cooking (up to twice its original length), this variety delivers a soft, fluffy texture with each grain remaining distinct. The subtle, natural aroma and delicate flavor make it the preferred choice for premium restaurants and discerning consumers worldwide.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 5,
    name: "PR11 White Sella Non Basmati Rice",
    image: "/images/rice/pr11-white-sella-non-basmati.png",
    shortdescription:
      "Clean white sella rice suitable for bulk and large-scale consumption.",
    description: {
      summary:
        "PR11 White Sella Non Basmati Rice is a versatile parboiled rice variety characterized by its clean white appearance and firm texture. The parboiling process involves partially boiling the rice in its husk, which drives nutrients into the grain and improves its cooking characteristics. This variety is perfect for high-volume cooking operations, institutional catering, and daily household use. The grains remain separate and non-sticky even after prolonged cooking, making them ideal for preparing various rice dishes including fried rice, plain steamed rice, and mixed rice preparations.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 6,
    name: "1121 White Sella Basmati Rice",
    image: "/images/rice/1121-white-sella-basmati.png",
    shortdescription:
      "Premium white sella basmati rice known for its elegant appearance and taste.",
    description: {
      summary:
        "1121 White Sella Basmati Rice represents the perfect marriage of traditional basmati excellence and modern parboiling technology. This premium variety features extra-long grains with a pristine white appearance, achieved through careful parboiling and processing. The sella treatment enhances the rice's firmness and nutritional value while maintaining the signature basmati aroma. These grains exhibit remarkable elongation during cooking and remain fluffy and separate. Ideal for gourmet preparations, this rice is highly sought after in international markets for its superior quality and consistent cooking performance.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 7,
    name: "Sharbati Basmati Rice",
    image: "/images/rice/sharbati-basmati.png",
    shortdescription:
      "Soft-textured basmati rice with rich taste ideal for daily meals.",
    description: {
      summary:
        "Sharbati Basmati Rice is a cherished variety known for its medium to long grain length and soft, delicate texture. Named for its resemblance to 'sherbet' in sweetness and lightness, this rice variety offers a milder aroma compared to other basmati types while delivering excellent taste. The grains are slightly shorter and plumper than 1121 varieties, making them perfect for everyday cooking. Sharbati is particularly popular in North Indian households for preparing plain rice, khichdi, and daily meals where a softer texture is preferred. Its affordability combined with authentic basmati characteristics makes it an excellent value-for-money option.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 8,
    name: "PR11 Steam Non Basmati Rice",
    image: "/images/rice/pr11-steam-non-basmati.png",
    shortdescription:
      "Steam-processed non-basmati rice with uniform grains and reliable quality.",
    description: {
      summary:
        "PR11 Steam Non Basmati Rice is a high-quality steamed rice variety that offers consistency and reliability in every grain. The steaming process enhances the rice's nutritional profile while ensuring uniform texture and cooking characteristics. This variety is characterized by its clean appearance, firm yet tender texture when cooked, and excellent grain separation. Perfect for large-scale catering, institutional cooking, and daily household consumption, PR11 Steam rice delivers dependable results every time. Its neutral flavor profile makes it versatile enough to pair with any cuisine, from traditional Indian curries to international preparations.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 9,
    name: "1509 Golden Sella Basmati Rice",
    image: "/images/rice/1509-golden-sella-basmati.png",
    shortdescription:
      "Long-grain basmati rice with golden sella finish and excellent elongation.",
    description: {
      summary:
        "1509 Golden Sella Basmati Rice is a premium variety that combines the aromatic excellence of traditional basmati with the benefits of parboiling. This rice features long, slender grains with a beautiful golden hue resulting from the sella process. The variety is known for its remarkable elongation during cooking, often doubling in length, and its ability to remain separate and fluffy. The golden color indicates a slight parboiling that enhances shelf life and nutritional retention. 1509 Golden Sella is particularly favored in Middle Eastern and Asian markets for its consistent quality, appealing appearance, and authentic basmati fragrance.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 10,
    name: "1509 Steam Basmati Rice",
    image: "/images/rice/1509-steam-basmati.png",
    shortdescription:
      "Steam-processed basmati rice offering natural flavor and fine texture.",
    description: {
      summary:
        "1509 Steam Basmati Rice is a premium variety that undergoes careful steam processing to enhance its natural qualities. This rice features long grains with the authentic basmati aroma and flavor profile that discerning consumers seek. The gentle steaming process preserves the rice's natural white color while improving its nutritional content and cooking properties. Upon cooking, the grains exhibit excellent elongation and maintain their individual character, creating a light, fluffy texture. This variety strikes an ideal balance between premium quality and value, making it suitable for both everyday meals and special occasions.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 11,
    name: "Indian Basmati Lemon Sella Creamy Rice",
    image: "/images/rice/lemon-sella-creamy.png",
    shortdescription:
      "Creamy lemon sella basmati rice with attractive color and premium quality.",
    description: {
      summary:
        "Indian Basmati Lemon Sella Creamy Rice is a unique variety distinguished by its attractive creamy-yellow color and exceptional quality. The lemon sella process creates a distinctive appearance while enhancing the rice's firmness and shelf stability. This premium basmati variety features long, slender grains that elongate beautifully during cooking. The creamy texture combined with the classic basmati aroma makes it a favorite for special occasions and gourmet preparations. The rice grains remain separate and fluffy, with a slight sheen that adds visual appeal to any dish. Particularly popular in Gulf countries and international markets, this variety represents the pinnacle of basmati processing innovation.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 12,
    name: "1509 Golden Sella Rice",
    image: "/images/rice/1509-golden-sella.png",
    shortdescription:
      "Golden sella rice with uniform grains and export-grade consistency.",
    description: {
      summary:
        "1509 Golden Sella Rice is an export-grade basmati variety that exemplifies consistency and quality in every grain. This parboiled basmati features a beautiful golden color achieved through the traditional sella process. The variety offers long grains that elongate significantly during cooking while maintaining their firm texture and distinctive separation. The parboiling process locks in nutrients and enhances the rice's durability, making it resistant to breakage during processing and cooking. This rice is particularly valued in international markets for its reliable cooking performance, attractive appearance, and authentic basmati characteristics. Perfect for commercial kitchens and bulk preparations where consistency is crucial.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 13,
    name: "MRM Sun Rice (1121 Extra Long Grain Golden Sella)",
    image: "/images/rice/mrm-sun-rice.png",
    shortdescription:
      "Branded extra-long grain basmati rice with superior golden sella finish.",
    description: {
      summary:
        "MRM Sun Rice represents the premium segment of 1121 basmati rice, featuring extra-long grains with a superior golden sella finish. This branded variety is carefully selected from the finest basmati crops and processed using advanced techniques to ensure consistent quality. The grains can reach impressive lengths after cooking, often exceeding 20mm, while maintaining perfect separation and a fluffy texture. The golden sella process enhances both the visual appeal and nutritional value of the rice. MRM Sun Rice is the choice of discerning consumers who seek the perfect combination of length, aroma, taste, and presentation. Ideal for premium restaurants, hotels, and special occasions where only the best will do.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 14,
    name: "1509 Lemon Sella Rice",
    image: "/images/rice/1509-lemon-sella.png",
    shortdescription:
      "Lemon sella processed rice with creamy texture and excellent cooking yield.",
    description: {
      summary:
        "1509 Lemon Sella Rice is a distinctive basmati variety characterized by its unique creamy-yellow appearance and superior cooking properties. The lemon sella process creates grains that are firmer and more resilient than regular basmati, making them perfect for dishes that require longer cooking times or reheating. This variety offers excellent elongation during cooking, with grains that remain separate and maintain their texture even after extended periods. The subtle creamy color adds visual appeal to any rice dish, making it particularly popular for special occasions and presentations. The rice retains the classic basmati aroma while offering enhanced nutritional benefits and improved shelf life.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
  {
    category: "rice",
    id: 15,
    name: "MRM Moon Rice (1121 Extra Long Grain Lemon Sella)",
    image: "/images/rice/mrm-moon-rice.png",
    shortdescription:
      "Premium branded basmati rice with extra-long grains and refined lemon sella processing.",
    description: {
      summary:
        "MRM Moon Rice is the flagship premium offering in the lemon sella category, featuring extra-long 1121 basmati grains with refined processing. This branded variety represents the pinnacle of basmati rice technology, combining traditional cultivation methods with modern processing techniques. The grains exhibit extraordinary length after cooking, exceptional aroma, and a creamy texture that sets it apart from standard varieties. The lemon sella process gives each grain a distinctive pearl-like appearance while ensuring superior firmness and cooking properties. MRM Moon Rice is specifically developed for high-end restaurants, luxury hotels, and consumers who demand the absolute best. Its consistent quality, impressive elongation, and premium presentation make it the ultimate choice for gourmet preparations and special celebrations.",
      sections: [
        {
          type: "text",
          content: "Specification",
        },
        {
          type: "list",
          title: "",
          items: [
            {
              id: 1,
              value: "Grain Length: Long / Extra Long (variety specific)",
            },
            { id: 2, value: "Broken: ≤ 2% – 5% (as per requirement)" },
            { id: 3, value: "Moisture: Max 12 – 14%" },
            { id: 4, value: "Purity: 95% – 100%" },
            { id: 5, value: "Color: Natural White / Golden" },
            { id: 6, value: "Chalky Grains: Minimal" },
            { id: 7, value: "Sortex Cleaned & Machine Polished" },
            { id: 8, value: "Suitable for Export & Bulk Supply" },
          ],
        },
        {
          type: "highlight",
          content: "Packing: 5kg | 10kg | 25kg | 50kg PP / Jute Bags",
        },
        {
          type: "highlight",
          content: "Origin: India",
        },
      ],
    },
  },
];
