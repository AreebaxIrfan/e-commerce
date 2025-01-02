import { NextResponse } from "next/server";
interface Feature {
  id: number;
  tag: string;
  name: string;
  price: number;
  category: string;
  color: string;
  imageUrl: string;
  description?: string;
}

const features: Feature[] = [
  {
    id: 1,
    tag: "new",
    name: "Elegant Rose Bouquet",
    price: 1200,
    category: "Flowers",
    color: "red",
    imageUrl: "/f-5.jpeg",
    description: "A stunning bouquet of fresh red roses, perfect for romantic occasions and heartfelt gestures.",
  },
  {
    id: 2,
    tag: "sale",
    name: "White Roses Bundle",
    price: 1100,
    category: "Flowers",
    color: "white",
    imageUrl: "/f-4.jpeg",
    description: "A delicate bundle of white roses symbolizing purity and elegance, ideal for special moments.",
  },
  {
    id: 3,
    tag: "popular",
    name: "Red Roses Bundle",
    price: 1500,
    category: "Flowers",
    color: "red",
    imageUrl: "/f-1.jpeg",
    description: "A classic arrangement of vibrant red roses, exuding timeless beauty and love.",
  },
  {
    id: 4,
    tag: "trending",
    name: "Soft Violet Bouquet",
    price: 1300,
    category: "Flowers",
    color: "violet",
    imageUrl: "/fl-11.jpeg",
    description: "A soothing violet bouquet that radiates calmness and grace, perfect for any thoughtful gesture.",
  },
  {
    id: 5,
    tag: "trending",
    name: "Soft Pink Bouquet",
    price: 1400,
    category: "Flowers",
    color: "pink",
    imageUrl: "/fl-4.jpeg",
    description: "A charming pink bouquet, capturing softness and warmth, ideal for celebrations and love.",
  },
  {
    id: 6,
    tag: "trending",
    name: "Bright Pink Bouquet",
    price: 1450,
    category: "Flowers",
    color: "pink",
    imageUrl: "/fl-3.jpeg",
    description: "A vibrant pink bouquet, filled with lively blooms to brighten any space or occasion.",
  },
  {
    id: 7,
    tag: "trending",
    name: "Pastel Shades Bouquet",
    price: 1350,
    category: "Flowers",
    color: "pastel",
    imageUrl: "/fl-1.jpeg",
    description: "An exquisite blend of pastel flowers, offering a serene and elegant arrangement.",
  },
  {
    id: 8,
    tag: "popular",
    name: "White Roses",
    price: 2000,
    category: "Flowers",
    color: "white",
    imageUrl: "/boq-9.jpg",
    description: "A sophisticated arrangement of pristine white roses, perfect for formal and elegant occasions.",
  },
  {
    id: 9,
    tag: "trending",
    name: "White Flower",
    price: 1250,
    category: "Flowers",
    color: "white",
    imageUrl: "/boq-10.jpg",
    description: "A graceful white flower arrangement, bringing tranquility and beauty to any setting.",
  },
  {
    id: 10,
    tag: "trending",
    name: "Red Roses Bouquet",
    price: 1550,
    category: "Flowers",
    color: "red",
    imageUrl: "/fl-10.jpeg",
    description: "A luxurious bouquet of deep red roses, symbolizing passion and admiration.",
  },
  {
    id: 11,
    tag: "trending",
    name: "Radiant Roses Bouquet",
    price: 1600,
    category: "Flowers",
    color: "gold",
    imageUrl: "/fl-9.jpeg",
    description: "An enchanting bouquet of radiant roses, glowing with elegance and charm.",
  },
  {
    id: 12,
    tag: "trending",
    name: "Tulip Bouquet",
    price: 1500,
    category: "Flowers",
    color: "mixed",
    imageUrl: "/fl-8.jpeg",
    description: "A delightful bouquet of mixed tulips, perfect for adding color and joy to any occasion.",
  },
  {
    id: 13,
    tag: "trending",
    name: "Elegant White Flower Vase",
    price: 1750,
    category: "Flowers",
    color: "white",
    imageUrl: "/fl-7.jpeg",
    description: "An elegant white flower vase, designed to bring a touch of sophistication and peace to any space.",
  },
  {
    id: 14,
    tag: "trending",
    name: "Sunshine Peach Bouquet",
    price: 1800,
    category: "Flowers",
    color: "peach",
    imageUrl: "/fl-6.jpeg",
    description: "A peachy bouquet radiating warmth and sunshine, perfect for brightening someone's day.",
  },
  {
    id: 15,
    tag: "trending",
    name: "Sunburst Sunflower Vase",
    price: 1900,
    category: "Flowers",
    color: "yellow",
    imageUrl: "/fl-5.jpeg",
    description: "A vibrant sunflower vase bursting with joy and positivity, ideal for any cheerful occasion.",
  },
  {
    id: 16,
    tag: "trending",
    name: "Sunburst Sunflower Vase",
    price: 1900,
    category: "Flowers",
    color: "yellow",
    imageUrl: "/fl-11.jpeg",
    description: "A vibrant sunflower vase bursting with joy and positivity, ideal for any cheerful occasion.",
  },
  {
    id: 17,
    tag: "trending",
    name: "Sunburst Sunflower Vase",
    price: 1900,
    category: "Flowers",
    color: "yellow",
    imageUrl: "/f-12.jpeg",
    description: "A vibrant sunflower vase bursting with joy and positivity, ideal for any cheerful occasion.",
  },
  {
    id: 18,
    tag: "trending",
    name: "Sunburst Sunflower Vase",
    price: 1900,
    category: "Flowers",
    color: "yellow",
    imageUrl: "/fl-12.jpeg",
    description: "A vibrant sunflower vase bursting with joy and positivity, ideal for any cheerful occasion.",
  },
  {
    id: 19,
    tag: "trending",
    name: "Sunburst Sunflower Vase",
    price: 1900,
    category: "Flowers",
    color: "yellow",
    imageUrl: "/f-13.jpeg",
    description: "A vibrant sunflower vase bursting with joy and positivity, ideal for any cheerful occasion.",
  },
  {
    id: 20,
    tag: "trending",
    name: "Sunburst Sunflower Vase",
    price: 1900,
    category: "Flowers",
    color: "yellow",
    imageUrl: "/f-14.jpeg",
    description: "A vibrant sunflower vase bursting with joy and positivity, ideal for any cheerful occasion.",
  },
  {
    id: 21,
    tag: "trending",
    name: "Sunburst Sunflower Vase",
    price: 1900,
    category: "Flowers",
    color: "yellow",
    imageUrl: "/f-15.jpeg",
    description: "A vibrant sunflower vase bursting with joy and positivity, ideal for any cheerful occasion.",
  },
  {
    id: 22,
    tag: "new",
    name: "Elegant Rose Bouquet",
    price: 1200,
    category: "Flowers",
    color: "red",
    imageUrl: "/boq-7.jpeg",
    description: "A stunning bouquet of fresh red roses, perfect for romantic occasions and heartfelt gestures.",
  },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (id) {
    const featureId = parseInt(id, 10);

    if (isNaN(featureId)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    const feature = features.find((f) => f.id === featureId);
    if (feature) {
      return NextResponse.json(feature, { status: 200 });
    } else {
      return NextResponse.json({ error: "Feature not found" }, { status: 404 });
    }
  }

  return NextResponse.json(features, { status: 200 });
}
