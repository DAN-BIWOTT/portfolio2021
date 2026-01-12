export const metadata = {
  title: "Dan Kibiwott | Books",
};

import { readBooks } from "@/lib/constants";

export default function ReadingPage() {
  return (
    <div>
      <h1 className="mb-4 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        Reading
      </h1>

      <p className="mb-4 leading-7 lg:mb-6">
        In this space, I keep a collection of books I have read recently. Most of
        the stuff I read these days is technical, including revisiting text
        books from my college courses and exploring new programming books.
        However, I do dive into some fiction every now and then. So if you're
        curious about stuff that interests me, please take a look around!
      </p>

      {readBooks.map((book, index) => (
        <p key={index} className="mb-4 leading-7 lg:mb-6">
          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline hover:underline-offset-4"
          >
            {book.name}
          </a>{" "}
          by {book.authors}{" "}
          <span className="font-mono">[Finished {book.finishDate}]</span>.
        </p>
      ))}
    </div>
  );
}
