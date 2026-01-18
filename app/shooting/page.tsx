// app/shooting/page.tsx (or wherever this page lives)

import fs from "fs";
import path from "path";
import { MasonryPhotos } from "@/components/masonry-photos";

export const metadata = {
  title: "Dan Kibiwott | Gallery",
};

function filenameToAlt(filename: string) {
  return filename
    .replace(/\.[^/.]+$/, "") // remove extension
    .replace(/[-_]+/g, " ")   // - and _ to spaces
    .trim();
}

export default function ShootingPage() {
  const dir = path.join(process.cwd(), "public/shooting");

  const items = fs
    .readdirSync(dir)
    .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
    .map((file) => ({
      src: `/shooting/${file}`,
      alt: filenameToAlt(file),
    }));

  return (
    <div>
      <h1 className="mb-4 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        Shooting
      </h1>

      <p className="mb-4 leading-7 lg:mb-6">
        This is my personal gallery featuring my favourite photos that I have
        taken. I currently shoot with a Canon EOS250D paired with a prime 50mm
        f1.8 lens. I also have an 18-55mm and a 55-250mm zoom lens but most of
        these photos were taken with my iPhone.
      </p>

      <MasonryPhotos items={items} />
    </div>
  );
}
