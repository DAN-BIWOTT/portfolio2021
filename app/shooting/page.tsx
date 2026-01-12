import { MasonryPhotos } from "@/components/masonry-photos";
import { galleryPagePhotos } from "@/lib/constants";

export const metadata = {
  title: "Dan Kibiwott | Gallery",
};

export default function ShootingPage() {
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

      <MasonryPhotos />

      {/* <div className="masonry pt-4">
          {galleryPagePhotos.map((photo) => (
            <div className="masonry-item" key={photo.imageName}>
              <img
                src={`/shooting/${photo.imageName}`}
                alt={photo.imageName}
                loading="lazy"
                className="rounded-md"
              />
            </div>
          ))}
        </div> */}
    </div>
  );
}
