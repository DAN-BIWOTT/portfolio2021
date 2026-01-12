"use client";

import { Masonry } from "react-plock";

import { galleryPagePhotoUrls } from "@/lib/constants";

export const MasonryPhotos = () => {
  return (
    <div className="mx-auto w-fit pt-4">
      <Masonry
        items={galleryPagePhotoUrls}
        config={{
          columns: [1, 2, 3],
          gap: [24, 12, 6],
          media: [640, 768, 1024],
        }}
        render={(item, idx) => (
          <img
            key={idx}
            src={item}
            loading="lazy"
            alt={item}
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
