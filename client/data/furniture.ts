export interface UserComment {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface FurnitureItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  hasEMI: boolean;
  emiMonths?: number;
  emiPrice?: number;
  category: string;
  description: string;
  warranty: string;
  guarantee: string;
  comments: UserComment[];
}

export const furnitureItems: FurnitureItem[] = [
  {
    id: "1",
    name: "Shreedevy Pressure Cooker 5 Litres - Your Kitchen Queen",
    price: 2499,
    originalPrice: 4299,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Faa1a51dca85b4e688d5a6010e50fdd76?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Faa1a51dca85b4e688d5a6010e50fdd76?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fffcbe71894db47baafa74f65670b696e?format=webp&width=800&height=1200"
    ],
    rating: 4.8,
    reviews: 245,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 420,
    category: "Kitchen",
    description: "Premium Shreedevy Pressure Cooker 5 Litres - Your Kitchen Queen. ISO 9001:2008 Certified. Triple Safe Pressure Cooker with Gasket Release System, Superior Quality Weight Valve & Metallic Safety Valve, Double Locking System. Made with latest ultramodern factory technology using best raw materials. Specially designed heavy base to prevent bulging. Easy to handle, saves labour, time and fuel.",
    warranty: "5 Years Warranty",
    guarantee: "100% Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Priya Sharma", rating: 5, date: "2024-02-20", comment: "Excellent quality pressure cooker! Triple safety system is very reassuring. Works perfectly for my family.", verified: true },
      { id: "c2", userName: "Rajesh Patel", rating: 5, date: "2024-02-18", comment: "Best purchase! The gasket release system is fantastic. Very durable and efficient.", verified: true },
      { id: "c3", userName: "Meera Singh", rating: 4, date: "2024-02-15", comment: "Great product. Easy to use and maintain. Highly recommended for every kitchen.", verified: true },
      { id: "c4", userName: "Amit Kumar", rating: 5, date: "2024-02-10", comment: "Top quality cooker. Heavy base prevents any issues. Worth every penny!", verified: true }
    ]
  },
  {
    id: "2",
    name: "Shreedevy Pressure Cooker 3.5 Litres - Your Kitchen Queen",
    price: 1899,
    originalPrice: 3299,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F09cd47db3107456ca01292de2b92b3c6?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F09cd47db3107456ca01292de2b92b3c6?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F054315aab07247578235043bc77c88a2?format=webp&width=800&height=1200"
    ],
    rating: 4.7,
    reviews: 198,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 320,
    category: "Kitchen",
    description: "Premium Shreedevy Pressure Cooker 3.5 Litres - Your Kitchen Queen. ISO 9001:2008 Certified. Triple Safe Pressure Cooker with Gasket Release System, Superior Quality Weight Valve & Metallic Safety Valve, Double Locking System. Perfect for small to medium families. Made with latest ultramodern factory technology using best raw materials. Specially designed heavy base to prevent bulging. Easy to handle, saves labour, time and fuel.",
    warranty: "5 Years Warranty",
    guarantee: "100% Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Kavya Desai", rating: 5, date: "2024-02-19", comment: "Perfect size for my small family! Quality is outstanding and cooks food evenly. Highly satisfied!", verified: true },
      { id: "c2", userName: "Rohan Gupta", rating: 5, date: "2024-02-17", comment: "Excellent value for money. Very safe and durable. Gasket release system works perfectly.", verified: true },
      { id: "c3", userName: "Anjali Reddy", rating: 4, date: "2024-02-14", comment: "Good quality cooker. Easy to maintain and clean. Recommended for everyone.", verified: true },
      { id: "c4", userName: "Vikram Singh", rating: 5, date: "2024-02-08", comment: "Amazing product! Heavy base ensures even heating. Best pressure cooker in this price range!", verified: true }
    ]
  },
  {
    id: "3",
    name: "Big Sun Ultra Slim Electric Press Iron - Innovate for Future",
    price: 1299,
    originalPrice: 2299,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F179ea522e3344e8684cfb6a24d6263a7?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F179ea522e3344e8684cfb6a24d6263a7?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Ffa5e8414ea024fc59c7b32d48c78f183?format=webp&width=800&height=1200"
    ],
    rating: 4.6,
    reviews: 156,
    hasEMI: true,
    emiMonths: 3,
    emiPrice: 433,
    category: "Kitchen",
    description: "Big Sun Ultra Slim Electric Press Iron - 750 Watt heavy weight iron for better ironing. Features overheat safety shutoff, high quality heritage coating on soleplate, and weighs 2kg for perfect pressing. Perfect for heavy duty ironing with safety features. Manufactured by RG Marketing India. Warranty card included.",
    warranty: "1 Year Warranty",
    guarantee: "Money Back Guarantee within 15 days",
    comments: [
      { id: "c1", userName: "Sunita Verma", rating: 5, date: "2024-02-19", comment: "Excellent heavy weight iron! Very effective for heavy fabrics. Safety shutoff is great feature.", verified: true },
      { id: "c2", userName: "Deepak Nair", rating: 4, date: "2024-02-16", comment: "Good quality iron. Heavy weight works well. Heats up quickly and evenly.", verified: true },
      { id: "c3", userName: "Preeti Sharma", rating: 5, date: "2024-02-12", comment: "Best value for money! Ultra slim design and very efficient. Highly recommend.", verified: true },
      { id: "c4", userName: "Ravi Patel", rating: 4, date: "2024-02-05", comment: "Solid iron with good performance. Weight is perfect for pressing.", verified: true }
    ]
  },
  {
    id: "4",
    name: "Mercury Non-Stick Cookware Flat Tawa 285mm - Induction Base",
    price: 599,
    originalPrice: 999,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F371eb3c4697647c5a8ca551d3c550a7d?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F371eb3c4697647c5a8ca551d3c550a7d?format=webp&width=800&height=1200"
    ],
    rating: 4.5,
    reviews: 127,
    hasEMI: false,
    category: "Kitchen",
    description: "Mercury Non-Stick Cookware Flat Tawa 285mm diameter. Premium non-stick coating with induction base for compatibility with all cookstove types. Perfect for making dosa, roti, paratha, and other flat breads. Durable and easy to maintain with excellent heat distribution.",
    warranty: "2 Years Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Anjana Reddy", rating: 5, date: "2024-02-18", comment: "Perfect flat tawa! Non-stick coating is excellent. Food doesn't stick at all.", verified: true },
      { id: "c2", userName: "Sanjay Kumar", rating: 4, date: "2024-02-14", comment: "Great quality tawa. Works on all cooktops. Easy to clean and maintain.", verified: true },
      { id: "c3", userName: "Neha Singh", rating: 5, date: "2024-02-10", comment: "Best tawa for the price! Heats evenly and the non-stick layer is very durable.", verified: true },
      { id: "c4", userName: "Mahesh Gupta", rating: 4, date: "2024-02-01", comment: "Good quality cookware. Perfect for making thin breads. Very satisfied.", verified: true }
    ]
  },
  {
    id: "5",
    name: "Crompton ACGEI-RD Automatic Dry Iron 750W - Home Appliances",
    price: 849,
    originalPrice: 1499,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Ffdcaa72e69934df2a52f63770480ffbf?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Ffdcaa72e69934df2a52f63770480ffbf?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fc6f9dc5255324e2c93e81eb23c8f1160?format=webp&width=800&height=1200"
    ],
    rating: 4.4,
    reviews: 134,
    hasEMI: true,
    emiMonths: 3,
    emiPrice: 283,
    category: "Kitchen",
    description: "Crompton ACGEI-RD Automatic Dry Iron - 750W powerful heating element for perfect ironing. Features 2 year warranty on product, automatic heat control, and high quality heritage coating. Perfect for all fabric types. Manufactured by Crompton Greaves Consumer Electricals Ltd.",
    warranty: "2 Years Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Geeta Patel", rating: 5, date: "2024-02-17", comment: "Excellent dry iron! Heats up quickly and provides consistent heat. Very reliable.", verified: true },
      { id: "c2", userName: "Suresh Kumar", rating: 4, date: "2024-02-14", comment: "Good quality iron from Crompton. Heating element is very efficient. Works great.", verified: true },
      { id: "c3", userName: "Pooja Singh", rating: 5, date: "2024-02-11", comment: "Best value for money! Automatic temperature control is excellent feature.", verified: true },
      { id: "c4", userName: "Arun Verma", rating: 4, date: "2024-02-07", comment: "Solid iron with good build quality. Heats evenly on all fabrics.", verified: true }
    ]
  },
  {
    id: "6",
    name: "Kwality Idly Vessels - High Quality Stainless Steel",
    price: 599,
    originalPrice: 999,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F4cd4be521aff46ca940f4447013c6f09?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F4cd4be521aff46ca940f4447013c6f09?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fb632df728bae4748925ede8a6cf27f1b?format=webp&width=800&height=1200"
    ],
    rating: 4.6,
    reviews: 142,
    hasEMI: false,
    category: "Kitchen",
    description: "Kwality Idly Vessels - Premium stainless steel cookware for making perfect idlies every time. Features heat resistant bakelite knob, stainless steel whistle, and heat resistant bakelite handle. High quality stainless steel construction ensures durability and even heat distribution.",
    warranty: "1 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Ramesh Reddy", rating: 5, date: "2024-02-16", comment: "Perfect idly vessel! Makes fluffy idlies every time. Stainless steel quality is excellent.", verified: true },
      { id: "c2", userName: "Lakshmi Sharma", rating: 5, date: "2024-02-13", comment: "Best idly maker! Very easy to use and clean. Highly recommend for every kitchen.", verified: true },
      { id: "c3", userName: "Rajesh Nair", rating: 4, date: "2024-02-09", comment: "Great quality cookware. Durable stainless steel. Works perfectly for making idlies.", verified: true },
      { id: "c4", userName: "Divya Menon", rating: 5, date: "2024-02-04", comment: "Excellent value! Makes soft and fluffy idlies consistently. Very satisfied.", verified: true }
    ]
  },
  {
    id: "7",
    name: "Pigeon Pride Induction Cooktop 1800W - Smart Cooking",
    price: 1999,
    originalPrice: 3499,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F1b8ee6137f1e48538a7d218ee98c838c?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F1b8ee6137f1e48538a7d218ee98c838c?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fd65dd5c5a8d64cf2956e89880c41a9a1?format=webp&width=800&height=1200"
    ],
    rating: 4.7,
    reviews: 189,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 333,
    category: "Kitchen",
    description: "Pigeon Pride Induction Cooktop 1800W - Advanced cooking with ceramic plate and smart features. Features 7 segments LED display for power and temperature, smart timer for hands-free cooking, energy saving mode, and 1 year warranty. Perfect for modern kitchens with induction cookware compatibility.",
    warranty: "1 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Neha Gupta", rating: 5, date: "2024-02-18", comment: "Amazing induction cooktop! Smart timer is very handy. Heats food very quickly and efficiently.", verified: true },
      { id: "c2", userName: "Vikram Patel", rating: 5, date: "2024-02-15", comment: "Excellent quality! LED display is clear and easy to use. Energy efficient cooking.", verified: true },
      { id: "c3", userName: "Anjali Desai", rating: 5, date: "2024-02-12", comment: "Best induction cooktop in this price range! Cooks food perfectly with smart features.", verified: true },
      { id: "c4", userName: "Sanjay Singh", rating: 4, date: "2024-02-03", comment: "Great product! Very fast heating and reliable. Smart timer makes cooking easier.", verified: true }
    ]
  },
  {
    id: "8",
    name: "Royal Rajputana Pan Support - All Types Perfect Pan Support",
    price: 299,
    originalPrice: 499,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F4480ca4f8a944868ac89098e23f11d3d?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F4480ca4f8a944868ac89098e23f11d3d?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F36c015a8cb7747e59f4fab576bfd49fd?format=webp&width=800&height=1200"
    ],
    rating: 4.3,
    reviews: 87,
    hasEMI: false,
    category: "Kitchen",
    description: "Royal Rajputana Pan Support - Exclusive design for all types of perfect pan support. Features improved quality genuine product with universal compatibility. Supports cookware of all sizes and shapes on any cooktop for safe and stable cooking.",
    warranty: "1 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Meena Sharma", rating: 5, date: "2024-02-17", comment: "Perfect pan support! Works with all my cookware. Very stable and durable.", verified: true },
      { id: "c2", userName: "Arjun Nair", rating: 4, date: "2024-02-14", comment: "Good quality pan support. Fits all pan sizes perfectly. Very useful product.", verified: true },
      { id: "c3", userName: "Priya Desai", rating: 4, date: "2024-02-11", comment: "Excellent value for money. Universal fit works great with all my cooking vessels.", verified: true },
      { id: "c4", userName: "Rajesh Iyer", rating: 5, date: "2024-02-06", comment: "Best pan support! Very stable and prevents pans from moving while cooking.", verified: true }
    ]
  },
  {
    id: "9",
    name: "Suba Lakshmi Non-Stick Kadai 280mm - 12 Year Warranty",
    price: 749,
    originalPrice: 1299,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F1b36f7edc05b490589692b6b2eddd431?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F1b36f7edc05b490589692b6b2eddd431?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F0f5301a621c647af9f3ea788dd868616?format=webp&width=800&height=1200"
    ],
    rating: 4.6,
    reviews: 176,
    hasEMI: true,
    emiMonths: 3,
    emiPrice: 250,
    category: "Kitchen",
    description: "Suba Lakshmi Non-Stick Kadai 280mm - Premium 3mm thickness with ISO 9001:2015 certification. Features 12 year warranty, non-stick coating with 3mm thickness, glass lid included, and heat resistant handles. Perfect for everyday cooking with healthy kitchen experience in every kitchen.",
    warranty: "12 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Sunita Verma", rating: 5, date: "2024-02-19", comment: "Excellent non-stick kadai! 12 year warranty gives great confidence. Very durable.", verified: true },
      { id: "c2", userName: "Deepak Reddy", rating: 5, date: "2024-02-16", comment: "Best quality kadai! Non-stick coating is very effective. Glass lid is perfect feature.", verified: true },
      { id: "c3", userName: "Kavya Patel", rating: 4, date: "2024-02-12", comment: "Great quality cookware. 12 year warranty is amazing. Heats evenly and non-stick works great.", verified: true },
      { id: "c4", userName: "Vikram Sharma", rating: 5, date: "2024-02-05", comment: "Perfect kadai for everyday cooking! Very efficient with glass lid. Highly recommend.", verified: true }
    ]
  },
  {
    id: "10",
    name: "Mercury Non-Stick Cookware Induction Base Tawa - 12 Month Warranty",
    price: 449,
    originalPrice: 799,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fc29291b0a204415fb086d351d5fa1344?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fc29291b0a204415fb086d351d5fa1344?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F5212ab0cf17a44e78589c20a35734545?format=webp&width=800&height=1200"
    ],
    rating: 4.5,
    reviews: 154,
    hasEMI: false,
    category: "Kitchen",
    description: "Mercury Non-Stick Cookware Induction Base Tawa - Premium non-stick coating with induction base for compatibility with all cooktop types. 12 month warranty provides complete peace of mind. Perfect for making thin breads, dosa, and pancakes with even heat distribution.",
    warranty: "12 Month Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Anjali Kumar", rating: 5, date: "2024-02-18", comment: "Perfect tawa! Non-stick coating is excellent. Works on all cooktops including induction.", verified: true },
      { id: "c2", userName: "Sanjay Nair", rating: 4, date: "2024-02-15", comment: "Great quality tawa. Induction base works perfectly. Very easy to clean and maintain.", verified: true },
      { id: "c3", userName: "Neha Singh", rating: 5, date: "2024-02-11", comment: "Best value for money! Non-stick works great for all cooking. Very satisfied with quality.", verified: true },
      { id: "c4", userName: "Ramesh Gupta", rating: 4, date: "2024-02-02", comment: "Excellent cookware. Makes thin breads perfectly. Induction base is very practical.", verified: true }
    ]
  },
  {
    id: "11",
    name: "Chef Insulated Hot Pot - Ram Lakshmi 3500ml",
    price: 1099,
    originalPrice: 1899,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fa3bda1680063442dbad2b1e3732ae86c?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fa3bda1680063442dbad2b1e3732ae86c?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F6905a3c7cd264f7382618bed1b4bd5c0?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F9e3fd2b104444a04b511163a17cf3903?format=webp&width=800&height=1200"
    ],
    rating: 4.4,
    reviews: 128,
    hasEMI: true,
    emiMonths: 3,
    emiPrice: 367,
    category: "Kitchen",
    description: "Chef Insulated Hot Pot - Ram Lakshmi 3500ml capacity. Features solid insulation with top quality polyurethane foam to keep food contents hot for longest period. Mirror finish stainless steel inner, virgin food grade plastic outer body with sturdy performance. Perfect for serving hot food and tea with excellent heat retention.",
    warranty: "1 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Sunita Desai", rating: 5, date: "2024-02-17", comment: "Excellent insulated hot pot! Keeps food hot for very long. Great build quality with mirror finish.", verified: true },
      { id: "c2", userName: "Arun Sharma", rating: 4, date: "2024-02-14", comment: "Good quality hot pot. Insulation is very effective. Perfect for family use and travel.", verified: true },
      { id: "c3", userName: "Preeti Nair", rating: 5, date: "2024-02-11", comment: "Best insulated hot pot! Keeps food steamy hot for hours. Very durable material.", verified: true },
      { id: "c4", userName: "Rajesh Verma", rating: 4, date: "2024-02-05", comment: "Great product for serving hot food. Large capacity and good insulation. Highly recommended.", verified: true }
    ]
  },
  {
    id: "12",
    name: "Lakshmi Thermosteel Flask 1000ml - Intelligent Homeware",
    price: 599,
    originalPrice: 999,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F93793cb2ab4847858d116b7f713ef666?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F93793cb2ab4847858d116b7f713ef666?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F407653433ab84a479b8ce37d7f26ce41?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Ff8625865104541de97306e5bf5ef897e?format=webp&width=800&height=1200"
    ],
    rating: 4.6,
    reviews: 167,
    hasEMI: false,
    category: "Kitchen",
    description: "Lakshmi Thermosteel Flask 1000ml - Keep beverages hot for 24 hours or cold for 24 hours. Features double wall vacuum insulation with stainless steel inner and outer wall for durability. Screw type stopper for leak-proof protection. Perfect for office, travel, and outdoor activities.",
    warranty: "2 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Geeta Patel", rating: 5, date: "2024-02-18", comment: "Perfect thermos flask! Keeps hot water hot for 24 hours. Excellent insulation and build quality.", verified: true },
      { id: "c2", userName: "Vikram Nair", rating: 5, date: "2024-02-15", comment: "Best thermos for the price! Leak-proof and very durable. Great for office and travel.", verified: true },
      { id: "c3", userName: "Anjali Singh", rating: 4, date: "2024-02-12", comment: "Great quality flask. Keeps drinks at perfect temperature. Very satisfied with purchase.", verified: true },
      { id: "c4", userName: "Sanjay Reddy", rating: 5, date: "2024-02-04", comment: "Excellent thermos! Works perfectly for both hot and cold beverages. Highly recommend.", verified: true }
    ]
  },
  {
    id: "13",
    name: "G-MAX Immersion Water Heater Dual Hot 1000W - Switch On Happiness",
    price: 399,
    originalPrice: 699,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F200fcd1e65eb4807b026ea0f7370078e?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F200fcd1e65eb4807b026ea0f7370078e?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F6ee0c744d04c4e19b18e7e248910a920?format=webp&width=800&height=1200"
    ],
    rating: 4.3,
    reviews: 98,
    hasEMI: false,
    category: "Kitchen",
    description: "G-MAX Immersion Water Heater Dual Hot 1000W - ISO 9001:2015 certified. Instant water heating for bathing and drinking water. Manufactured by Nandi Home Appliances and marketed by G-Max Power Systems. Waterproof design with safety switch. Perfect for quick water heating in winters.",
    warranty: "1 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Meena Verma", rating: 5, date: "2024-02-16", comment: "Great immersion heater! Heats water quickly and efficiently. Very reliable product.", verified: true },
      { id: "c2", userName: "Deepak Patel", rating: 4, date: "2024-02-13", comment: "Good quality water heater. Waterproof design is very safe. Value for money.", verified: true },
      { id: "c3", userName: "Priya Sharma", rating: 4, date: "2024-02-09", comment: "Works perfectly! Heats water in minutes. Very easy to use and maintain.", verified: true },
      { id: "c4", userName: "Ravi Kumar", rating: 5, date: "2024-02-01", comment: "Best immersion heater! Safe and efficient. Perfect for winter months. Highly recommend.", verified: true }
    ]
  },
  {
    id: "14",
    name: "Lakshmi Power Saving Table Fan 16 inch - High Speed 2000 RPM",
    price: 1299,
    originalPrice: 1999,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fcb71c394dcd944a78d16e831a5833848?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fcb71c394dcd944a78d16e831a5833848?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F60fac57018404526b0f96df0cc59d9f0?format=webp&width=800&height=1200"
    ],
    rating: 4.5,
    reviews: 143,
    hasEMI: true,
    emiMonths: 3,
    emiPrice: 433,
    category: "Kitchen",
    description: "Lakshmi Power Saving Table Fan 16 inch - High speed 2000 RPM with nature friendly design. RS Star brand power saving technology. Features 400mm sweep and energy efficient motor. Perfect for summer cooling with minimal electricity consumption. 1 year warranty for peace of mind.",
    warranty: "1 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Sunita Kumar", rating: 5, date: "2024-02-17", comment: "Excellent table fan! Powerful air circulation and very energy efficient. Love the high speed.", verified: true },
      { id: "c2", userName: "Arjun Singh", rating: 5, date: "2024-02-14", comment: "Best power saving fan! Cools the room quickly and uses less electricity. Very satisfied.", verified: true },
      { id: "c3", userName: "Kavya Desai", rating: 4, date: "2024-02-11", comment: "Great quality fan. High speed gives good air flow. Power saving feature is excellent.", verified: true },
      { id: "c4", userName: "Ramesh Nair", rating: 4, date: "2024-02-03", comment: "Good fan for summer. Efficient cooling with low power consumption. Worth buying.", verified: true }
    ]
  },
  {
    id: "15",
    name: "Metal Single Bed Frame - Simple Design",
    price: 3499,
    originalPrice: 5999,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Ff737702e5f634dd58ec00197471a95be?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Ff737702e5f634dd58ec00197471a95be?format=webp&width=800&height=1200"
    ],
    rating: 4.4,
    reviews: 165,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 583,
    category: "Furniture",
    description: "Metal Single Bed Frame with simple and elegant design. Strong metal construction provides excellent durability and support. Perfect for bedrooms with modern aesthetic. Easy assembly and maintenance. Supports standard single mattresses.",
    warranty: "3 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Rajesh Kumar", rating: 5, date: "2024-02-16", comment: "Excellent metal bed! Very sturdy and durable. Perfect for small rooms.", verified: true },
      { id: "c2", userName: "Priya Sharma", rating: 4, date: "2024-02-13", comment: "Good quality bed frame. Easy to assemble. Great value for money.", verified: true },
      { id: "c3", userName: "Deepak Nair", rating: 5, date: "2024-02-10", comment: "Best metal bed! Strong construction and stable. Highly recommend.", verified: true },
      { id: "c4", userName: "Meera Singh", rating: 4, date: "2024-02-02", comment: "Very good bed frame. Durable and affordable. Perfect for home.", verified: true }
    ]
  },
  {
    id: "16",
    name: "Metal Bed Frame with Curved Headboard - Elegant Design",
    price: 4299,
    originalPrice: 7499,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F6b7bb07f45a54d409f4c64b0970310f7?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F6b7bb07f45a54d409f4c64b0970310f7?format=webp&width=800&height=1200"
    ],
    rating: 4.6,
    reviews: 189,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 717,
    category: "Furniture",
    description: "Metal Bed Frame with elegant curved headboard design. Premium metal construction with decorative curved details. Perfect for modern and traditional bedroom interiors. Provides excellent back support with stylish appearance. Supports queen-size mattress.",
    warranty: "5 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Sunita Verma", rating: 5, date: "2024-02-18", comment: "Beautiful bed frame! Elegant curved headboard looks amazing. Very sturdy.", verified: true },
      { id: "c2", userName: "Arun Patel", rating: 5, date: "2024-02-15", comment: "Excellent quality! The design is very attractive. Perfect for bedroom.", verified: true },
      { id: "c3", userName: "Kavya Reddy", rating: 4, date: "2024-02-12", comment: "Great bed frame with nice design. Very comfortable and durable.", verified: true },
      { id: "c4", userName: "Vikram Singh", rating: 5, date: "2024-02-04", comment: "Best bed! Elegant style and strong construction. Highly satisfied.", verified: true }
    ]
  },
  {
    id: "17",
    name: "Metal Bunk Bed - Dual Mattress Support",
    price: 5999,
    originalPrice: 9999,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F48d40bec1ebb4cdbb07dbf91b1caa4e0?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F48d40bec1ebb4cdbb07dbf91b1caa4e0?format=webp&width=800&height=1200"
    ],
    rating: 4.5,
    reviews: 156,
    hasEMI: true,
    emiMonths: 9,
    emiPrice: 667,
    category: "Furniture",
    description: "Metal Bunk Bed with dual mattress support for efficient space utilization. Strong metal frame supports two people simultaneously. Perfect for hostels, dorms, or shared bedrooms. Includes safety railings and sturdy ladder. Easy assembly.",
    warranty: "5 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Anjali Kumar", rating: 5, date: "2024-02-17", comment: "Perfect bunk bed! Great for saving space. Very sturdy and safe.", verified: true },
      { id: "c2", userName: "Sanjay Nair", rating: 4, date: "2024-02-14", comment: "Good quality bunk bed. Strong construction and reliable. Great value.", verified: true },
      { id: "c3", userName: "Neha Desai", rating: 5, date: "2024-02-11", comment: "Excellent bunk bed! Safe design with good space efficiency. Highly recommend.", verified: true },
      { id: "c4", userName: "Ramesh Gupta", rating: 4, date: "2024-02-05", comment: "Very good bunk bed. Perfect for dorms. Strong and durable.", verified: true }
    ]
  },
  {
    id: "18",
    name: "Premium Brown Mattress with Bedding Set",
    price: 2999,
    originalPrice: 4999,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F636e06944dc2430a8eb2633b49856cdb?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F636e06944dc2430a8eb2633b49856cdb?format=webp&width=800&height=1200"
    ],
    rating: 4.7,
    reviews: 198,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 500,
    category: "Furniture",
    description: "Premium Brown Mattress with complete bedding set. High-density foam provides excellent comfort and support. Includes coordinated bedsheet and pillows. Machine washable covers. Perfect for restful sleep and comfort. Hypoallergenic materials.",
    warranty: "2 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Geeta Sharma", rating: 5, date: "2024-02-19", comment: "Excellent mattress! Very comfortable and supportive. Great bedding set.", verified: true },
      { id: "c2", userName: "Vikram Kumar", rating: 5, date: "2024-02-16", comment: "Best mattress! Perfect comfort for sleep. High-quality materials.", verified: true },
      { id: "c3", userName: "Priya Nair", rating: 4, date: "2024-02-13", comment: "Great value! Comfortable mattress with nice bedding. Very satisfied.", verified: true },
      { id: "c4", userName: "Arun Singh", rating: 5, date: "2024-02-06", comment: "Perfect mattress set! Delivers great sleep quality. Highly recommend.", verified: true }
    ]
  },
  {
    id: "19",
    name: "Efficient Table Fan 400mm - High Speed Cooling",
    price: 899,
    originalPrice: 1599,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F6dd350beac0c46999b504fe5d972242a?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F6dd350beac0c46999b504fe5d972242a?format=webp&width=800&height=1200"
    ],
    rating: 4.3,
    reviews: 112,
    hasEMI: false,
    category: "Appliances",
    description: "Efficient Table Fan 400mm with high-speed cooling performance. Powerful motor provides strong air circulation. Energy-efficient design reduces electricity consumption. Perfect for summer cooling. Compact size fits any space.",
    warranty: "1 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Sunita Desai", rating: 5, date: "2024-02-17", comment: "Great table fan! Powerful cooling and efficient. Very quiet operation.", verified: true },
      { id: "c2", userName: "Deepak Patel", rating: 4, date: "2024-02-14", comment: "Good quality fan. Strong airflow and energy efficient. Value for money.", verified: true },
      { id: "c3", userName: "Kavya Singh", rating: 4, date: "2024-02-11", comment: "Nice fan! Works perfectly for summer cooling. Compact size.", verified: true },
      { id: "c4", userName: "Rajesh Nair", rating: 5, date: "2024-02-02", comment: "Best table fan! Excellent cooling performance. Highly satisfied.", verified: true }
    ]
  },
  {
    id: "20",
    name: "Black Plastic Chair - Modern Design",
    price: 799,
    originalPrice: 1299,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F54ff4ffc948a471986fbcbb07e6ea8c0?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F54ff4ffc948a471986fbcbb07e6ea8c0?format=webp&width=800&height=1200"
    ],
    rating: 4.2,
    reviews: 94,
    hasEMI: false,
    category: "Furniture",
    description: "Modern Black Plastic Chair with ergonomic design. Lightweight and durable plastic construction. Comfortable seating for dining, office, or outdoor use. Easy to clean and maintain. Stackable design for space-saving storage.",
    warranty: "1 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Anjali Sharma", rating: 5, date: "2024-02-18", comment: "Great plastic chair! Modern design and very comfortable. Easy to clean.", verified: true },
      { id: "c2", userName: "Sanjay Verma", rating: 4, date: "2024-02-15", comment: "Good quality chair. Durable and lightweight. Perfect for dining.", verified: true },
      { id: "c3", userName: "Meera Patel", rating: 4, date: "2024-02-12", comment: "Nice chair! Stackable design is convenient. Good value.", verified: true },
      { id: "c4", userName: "Vikram Reddy", rating: 5, date: "2024-02-05", comment: "Excellent chair! Modern look and comfortable. Highly recommend.", verified: true }
    ]
  },
  {
    id: "21",
    name: "Wooden Carved Chair - Antique Style",
    price: 2499,
    originalPrice: 4299,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fac8f9d53d419480ba8552b19a818ec12?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fac8f9d53d419480ba8552b19a818ec12?format=webp&width=800&height=1200"
    ],
    rating: 4.6,
    reviews: 134,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 417,
    category: "Furniture",
    description: "Wooden Carved Chair with beautiful antique style design. Handcrafted from premium wood with intricate carved patterns. Traditional and elegant look perfect for living rooms and dining areas. Sturdy construction ensures durability and comfort.",
    warranty: "5 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Neha Kumar", rating: 5, date: "2024-02-19", comment: "Beautiful carved chair! Excellent craftsmanship and design. Very comfortable.", verified: true },
      { id: "c2", userName: "Arun Singh", rating: 5, date: "2024-02-16", comment: "Perfect antique chair! Great quality wood and carvings. Very elegant.", verified: true },
      { id: "c3", userName: "Priya Desai", rating: 4, date: "2024-02-13", comment: "Lovely wooden chair! Perfect for traditional homes. Well-made.", verified: true },
      { id: "c4", userName: "Ramesh Nair", rating: 5, date: "2024-02-06", comment: "Excellent carved chair! Beautiful design and solid construction. Highly satisfied.", verified: true }
    ]
  },
  {
    id: "22",
    name: "Green Plastic Chair - Durable Design",
    price: 749,
    originalPrice: 1199,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F63f8b27ff31b4fbfb2cef0e6fc1ed1c8?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F63f8b27ff31b4fbfb2cef0e6fc1ed1c8?format=webp&width=800&height=1200"
    ],
    rating: 4.4,
    reviews: 118,
    hasEMI: false,
    category: "Furniture",
    description: "Durable Green Plastic Chair with sturdy construction. Lightweight plastic material for easy portability. Comfortable seating with armrests for support. Perfect for gardens, patios, or indoor use. Weather-resistant and easy to maintain.",
    warranty: "2 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Sunita Patel", rating: 5, date: "2024-02-18", comment: "Great green chair! Very durable and comfortable. Perfect for outdoor.", verified: true },
      { id: "c2", userName: "Deepak Kumar", rating: 4, date: "2024-02-15", comment: "Good quality chair. Lightweight and weather-resistant. Great value.", verified: true },
      { id: "c3", userName: "Kavya Singh", rating: 5, date: "2024-02-12", comment: "Excellent chair! Perfect for garden. Strong and comfortable.", verified: true },
      { id: "c4", userName: "Vikram Sharma", rating: 4, date: "2024-02-04", comment: "Nice green chair! Durable design and good for outdoor use.", verified: true }
    ]
  },
  {
    id: "23",
    name: "Ergonomic Office Chair - Teal Design",
    price: 1899,
    originalPrice: 3299,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F35fe598b027049fb945c48b2fbcde9b7?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F35fe598b027049fb945c48b2fbcde9b7?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F6773c4f943bb450e86408382d9d4021f?format=webp&width=800&height=1200"
    ],
    rating: 4.7,
    reviews: 167,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 317,
    category: "Furniture",
    description: "Premium Ergonomic Office Chair with teal color design. Features high-back support with armrests for maximum comfort during long working hours. Breathable mesh back for excellent ventilation. Adjustable height and recline function. Perfect for home and office use.",
    warranty: "3 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Rajesh Patel", rating: 5, date: "2024-02-19", comment: "Excellent office chair! Very comfortable for long hours. Great back support.", verified: true },
      { id: "c2", userName: "Anjali Sharma", rating: 5, date: "2024-02-16", comment: "Best ergonomic chair! Perfect for home office. Adjustable and supportive.", verified: true },
      { id: "c3", userName: "Vikram Nair", rating: 4, date: "2024-02-13", comment: "Great quality chair! Breathable mesh and good lumbar support. Very satisfied.", verified: true },
      { id: "c4", userName: "Priya Singh", rating: 5, date: "2024-02-08", comment: "Perfect office chair! Ergonomic design and comfortable. Highly recommend.", verified: true }
    ]
  },
  {
    id: "24",
    name: "V-Guard Voltage Stabilizer Neo Crystal - Smart Protection",
    price: 2199,
    originalPrice: 3799,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fa0408b0b3a734e06a971ad4dbcc52da8?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fa0408b0b3a734e06a971ad4dbcc52da8?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fe1ec2e65d441496f9c39cf4b61581cf5?format=webp&width=800&height=1200"
    ],
    rating: 4.6,
    reviews: 176,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 367,
    category: "Appliances",
    description: "V-Guard Voltage Stabilizer Neo Crystal - Electronic voltage stabilizer for protecting home appliances from power fluctuations. Features smart auto-switch-off system, electronic overload protection, and energy efficient design. Perfect for modern households with multiple electronic devices. ISO 9001:2015 certified.",
    warranty: "3 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Deepak Verma", rating: 5, date: "2024-02-18", comment: "Excellent voltage stabilizer! Protects all my appliances from power surges. Very reliable.", verified: true },
      { id: "c2", userName: "Sunita Kumar", rating: 5, date: "2024-02-15", comment: "Best protection device! Works perfectly and very quiet. Highly satisfied.", verified: true },
      { id: "c3", userName: "Arun Reddy", rating: 4, date: "2024-02-12", comment: "Great quality stabilizer. Smart features and good protection. Very worth it.", verified: true },
      { id: "c4", userName: "Kavya Patel", rating: 5, date: "2024-02-05", comment: "Perfect stabilizer! My appliances are now safe from power fluctuations. Excellent.", verified: true }
    ]
  },
  {
    id: "25",
    name: "V-Guard VTP 400 Voltage Stabilizer - Heavy Duty Power Protection",
    price: 1599,
    originalPrice: 2799,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fb4bc14dc7a7b4e9fa5aa284e75f044d1?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fb4bc14dc7a7b4e9fa5aa284e75f044d1?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F2cde233672cb4309b6ab5506d0baa014?format=webp&width=800&height=1200"
    ],
    rating: 4.5,
    reviews: 142,
    hasEMI: true,
    emiMonths: 3,
    emiPrice: 533,
    category: "Appliances",
    description: "V-Guard VTP 400 Heavy Duty Voltage Stabilizer - Advanced protection for home appliances against voltage fluctuations. Features electronic voltage regulation, overload protection, and auto cut-off safety system. Handles heavy electrical loads efficiently. Perfect for entire household protection.",
    warranty: "3 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Rajesh Singh", rating: 5, date: "2024-02-17", comment: "Outstanding stabilizer! Heavy duty and very reliable. Protects all my appliances.", verified: true },
      { id: "c2", userName: "Meera Nair", rating: 4, date: "2024-02-14", comment: "Great quality! Handles power fluctuations perfectly. Very sturdy build.", verified: true },
      { id: "c3", userName: "Vikram Sharma", rating: 5, date: "2024-02-11", comment: "Best heavy duty stabilizer! Works perfectly for our household. Highly satisfied.", verified: true },
      { id: "c4", userName: "Priya Kumar", rating: 4, date: "2024-02-03", comment: "Good stabilizer! Heavy duty protection and reliable. Worth the investment.", verified: true }
    ]
  },
  {
    id: "26",
    name: "Premium Red Pressure Cooker - High Capacity Cooking",
    price: 1799,
    originalPrice: 2999,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F79d6c9bea3c544b3ad923576f4a68e18?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F79d6c9bea3c544b3ad923576f4a68e18?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F3443f0df20ec4cdf8ed01b78eec36271?format=webp&width=800&height=1200"
    ],
    rating: 4.7,
    reviews: 203,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 300,
    category: "Kitchen",
    description: "Premium Red Pressure Cooker with high capacity design. Features triple safety system with pressure release valve, safety lock, and heat-resistant handles. Heavy bottom base for even heat distribution. Perfect for large families and bulk cooking. Advanced sealing system prevents steam leakage.",
    warranty: "5 Year Warranty",
    guarantee: "100% Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Sunita Desai", rating: 5, date: "2024-02-19", comment: "Excellent pressure cooker! Perfect capacity and very safe. Triple safety system is reassuring.", verified: true },
      { id: "c2", userName: "Arun Patel", rating: 5, date: "2024-02-16", comment: "Best quality cooker! Heavy base ensures even cooking. Very durable.", verified: true },
      { id: "c3", userName: "Kavya Reddy", rating: 5, date: "2024-02-13", comment: "Perfect for large family! Great build quality and handles pressure well.", verified: true },
      { id: "c4", userName: "Ramesh Singh", rating: 4, date: "2024-02-06", comment: "Good cooker with reliable safety features. Very satisfied with quality.", verified: true }
    ]
  },
  {
    id: "27",
    name: "Wooden Relaxing Chair - Premium Comfort",
    price: 2799,
    originalPrice: 4699,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F90ad07c57ca34d5c946532b0c0c5d9d0?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F90ad07c57ca34d5c946532b0c0c5d9d0?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fa6638de3eb354f448506f6479b98f3ea?format=webp&width=800&height=1200"
    ],
    rating: 4.6,
    reviews: 189,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 467,
    category: "Furniture",
    description: "Premium Wooden Relaxing Chair with ergonomic design for maximum comfort. Handcrafted from premium quality wood with smooth finish. Features wide armrests and deep seat for ultimate relaxation. Perfect for living rooms, reading corners, and outdoor spaces. Solid construction ensures long-lasting durability.",
    warranty: "5 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Geeta Sharma", rating: 5, date: "2024-02-18", comment: "Beautiful relaxing chair! Very comfortable for long hours. Premium wood quality.", verified: true },
      { id: "c2", userName: "Vikram Kumar", rating: 5, date: "2024-02-15", comment: "Perfect chair for relaxation! Great craftsmanship and very sturdy.", verified: true },
      { id: "c3", userName: "Anjali Nair", rating: 4, date: "2024-02-12", comment: "Excellent wooden chair! Comfortable design and beautiful finish. Highly satisfied.", verified: true },
      { id: "c4", userName: "Deepak Singh", rating: 5, date: "2024-02-05", comment: "Best relaxing chair! Premium quality and perfect comfort. Highly recommend.", verified: true }
    ]
  },
  {
    id: "28",
    name: "Traditional Wooden Lounge Chair - Classic Design",
    price: 2599,
    originalPrice: 4399,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fda86518c9a0c4670856448285a73533f?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fda86518c9a0c4670856448285a73533f?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fc74e2e082935408286c8e49f35df7181?format=webp&width=800&height=1200"
    ],
    rating: 4.5,
    reviews: 154,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 433,
    category: "Furniture",
    description: "Traditional Wooden Lounge Chair with classic timeless design. Handcrafted from premium quality wood with traditional carving details. Features high back support and comfortable seat for extended use. Perfect for living rooms, libraries, and traditional interiors. Elegant and durable construction.",
    warranty: "5 Year Warranty",
    guarantee: "Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Sunita Verma", rating: 5, date: "2024-02-17", comment: "Beautiful traditional chair! Classic design and very comfortable. Excellent quality.", verified: true },
      { id: "c2", userName: "Rajesh Nair", rating: 4, date: "2024-02-14", comment: "Great lounge chair! Traditional style and sturdy build. Very satisfied.", verified: true },
      { id: "c3", userName: "Preeti Patel", rating: 5, date: "2024-02-11", comment: "Perfect for home! Classic wooden chair with premium craftsmanship.", verified: true },
      { id: "c4", userName: "Arun Reddy", rating: 4, date: "2024-02-04", comment: "Good quality lounge chair! Traditional design and comfortable. Highly recommend.", verified: true }
    ]
  },
  {
    id: "29",
    name: "Preethi Mixer Grinder - 5 Year Warranty",
    price: 2999,
    originalPrice: 4999,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F13b9ae72949d4a48b56a2e374d9e4d19?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F13b9ae72949d4a48b56a2e374d9e4d19?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Feb2310f91e964e289523afed8efad618?format=webp&width=800&height=1200"
    ],
    rating: 4.7,
    reviews: 234,
    hasEMI: true,
    emiMonths: 6,
    emiPrice: 500,
    category: "Kitchen",
    description: "Preethi Premium Mixer Grinder with 5 year warranty. Features powerful 750W motor for efficient grinding and mixing. Includes 3 jars - wet, dry, and chutney jar for versatile kitchen operations. Durable stainless steel assembly with high-quality grinding stones. Perfect for all types of grinding tasks from wet curries to dry spices.",
    warranty: "5 Year Warranty",
    guarantee: "100% Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Priya Sharma", rating: 5, date: "2024-02-19", comment: "Excellent mixer! Powerful motor and very efficient. Perfect for daily grinding. Highly satisfied.", verified: true },
      { id: "c2", userName: "Rajesh Kumar", rating: 5, date: "2024-02-16", comment: "Best mixer grinder! Works perfectly for wet and dry grinding. Quality is outstanding.", verified: true },
      { id: "c3", userName: "Anjali Patel", rating: 4, date: "2024-02-13", comment: "Great quality mixer! 5 year warranty gives great peace of mind. Very reliable.", verified: true },
      { id: "c4", userName: "Vikram Singh", rating: 5, date: "2024-02-08", comment: "Perfect kitchen companion! Grinds everything smoothly. Highly recommend.", verified: true }
    ]
  },
  {
    id: "30",
    name: "Vega Food Processor Mixer - Premium Grinding Machine",
    price: 3499,
    originalPrice: 5999,
    image: "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fc2d4e061d6e44a5b86c9b47ad39fa54b?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2Fc2d4e061d6e44a5b86c9b47ad39fa54b?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2F0cf6d4d1b54e4d70875db4e1b7484562%2F410be36e3c49429ba065332d876aa0aa?format=webp&width=800&height=1200"
    ],
    rating: 4.8,
    reviews: 267,
    hasEMI: true,
    emiMonths: 9,
    emiPrice: 389,
    category: "Kitchen",
    description: "Vega Premium Food Processor Mixer with advanced grinding technology. Features 750W powerful motor with multiple accessories for complete kitchen solutions. Includes wet and dry grinding jars, food processor container, and specialized juicer attachment. Multi-purpose appliance for grinding, mixing, chopping, and juicing. Superior stainless steel components for durability.",
    warranty: "5 Year Warranty",
    guarantee: "100% Money Back Guarantee within 30 days",
    comments: [
      { id: "c1", userName: "Sunita Desai", rating: 5, date: "2024-02-18", comment: "Outstanding food processor! Multiple accessories and very powerful. Best kitchen investment.", verified: true },
      { id: "c2", userName: "Arun Reddy", rating: 5, date: "2024-02-15", comment: "Excellent mixer grinder! Does grinding, mixing, and processing perfectly. Highly efficient.", verified: true },
      { id: "c3", userName: "Kavya Patel", rating: 5, date: "2024-02-12", comment: "Perfect for modern kitchen! Premium quality and reliable performance. Highly satisfied.", verified: true },
      { id: "c4", userName: "Deepak Nair", rating: 4, date: "2024-02-05", comment: "Great food processor! Powerful and versatile. Worth every penny. Recommend.", verified: true }
    ]
  }
];
