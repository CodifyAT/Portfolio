"use client";
import { useEffect, useState } from "react";
import { ParallaxScroll } from "@/app/components/Parallax";

// Function to load images dynamically
const importImages = async (numberOfImages: number): Promise<string[]> => {
  const images: string[] = []; // Explicitly define images as an array of strings
  for (let i = 1; i <=numberOfImages; i++) {
    if(i===9)continue;
    const image = await import(`@/app/images/p${i}.jpeg`); // Adjust the extension if needed
    images.push(image.default); // Use .default for default exports
  }
  return images;
};

export function ParallaxScrollDemo() {
  const [images, setImages] = useState<string[]>([]); // Explicitly define the type as string[]

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await importImages(30); // Adjust the number based on your images
      setImages(loadedImages);
    };
    
    loadImages();
  }, []);

  return <ParallaxScroll images={images} />;
}