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