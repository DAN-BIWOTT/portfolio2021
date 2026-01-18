"use client";

import { Masonry } from "react-plock";

type ImageItem = {
  src: string;
  alt: string;
};

export const MasonryPhotos = ({ items }: { items: ImageItem[] }) => {
  return (
    <div className="mx-auto w-fit pt-4">
      <Masonry
        items={items}
        config={{
          columns: [1, 2, 3],
          gap: [24, 12, 6],
          media: [640, 768, 1024],
        }}
        render={(item, idx) => (
          <img
            key={idx}
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="hover:brightness-110"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "6px",
              height: "auto",
            }}
          />
        )}
      />
    </div>
  );
};
