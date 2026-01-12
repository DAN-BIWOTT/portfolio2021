import { Fragment } from "react";

import { awardItems, featuredLinks, miscLinks } from "@/lib/constants";

export const metadata = {
  title: "Dan Kibiwott | Info",
};

export default function MoreAboutMePage() {
  return (
    <div>
      <h1 className="mb-4 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        More about me
      </h1>

      {/* Education  */}
      <div className="mb-4 max-w-2xl lg:mb-6">
        <h3 className="mb-2 text-lg font-semibold sm:text-2xl">Education</h3>
        <p className="font-semibold leading-7">
          Anglia Ruskin University
        </p>
        <p className="leading-7 text-muted-foreground">
          Master's in Computer Science
        </p>
        <p className="text-sm leading-7 text-muted-foreground">
          Cambridge, United Kingdom
        </p>
        <p className="text-sm leading-7 text-muted-foreground">Dec 2025</p>
      </div>

      {/* Awards  */}
      <div className="mb-4 max-w-2xl lg:mb-6">
        <h3 className="mb-2 text-lg font-semibold sm:text-2xl">Awards</h3>
        {awardItems.map((award, index) => (
          <div className="mb-3" key={index}>
            <p className="font-semibold leading-6">{award.title}</p>
            <p className="leading-6 text-muted-foreground">{award.issuer}</p>
            <p className="text-sm leading-6 text-muted-foreground">
              {award.desc}
            </p>
            <a
              href={award.awardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-link hover:underline hover:underline-offset-4"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>

      {/* Featured  */}
      <div className="mb-4 max-w-5xl pb-4 lg:mb-6">
        <h3 className="mb-2 text-lg font-semibold sm:text-2xl">Featured</h3>
        <ul className="space-y-1.5">
          {featuredLinks.map((link, index) => (
            <Fragment key={index}>
              <li>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline hover:underline-offset-4"
                >
                  {link.desc}
                </a>
              </li>
              {index < featuredLinks.length - 1 && (
                <hr className="-mx-2 sm:hidden" />
              )}
            </Fragment>
          ))}
        </ul>
      </div>

      {/* More Links  */}
      <div className="mb-4 max-w-5xl pb-8 lg:mb-6">
        <h3 className="mb-2 text-lg font-semibold sm:text-2xl">
          Miscellaneous Links
        </h3>
        <ul className="space-y-1.5">
          {miscLinks.map((link, index) => (
            <Fragment key={index}>
              <li>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline hover:underline-offset-4"
                >
                  {link.desc}&nbsp;
                  <span className="font-mono text-sm text-muted-foreground">
                    {link.descUrl}
                  </span>
                </a>
              </li>
              {index < miscLinks.length - 1 && (
                <hr className="-mx-2 sm:hidden" />
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
