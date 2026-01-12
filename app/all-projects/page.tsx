import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { allProjectItems } from "@/lib/constants";

export const metadata = {
  title: "Dan Kibiwott | Projects",
};

export default function AllProjectsPage() {
  return (
    <div className="">
      <h1 className="mb-6 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        All Projects
      </h1>

      {allProjectItems.map((project, index) => (
        <div className="mb-12" key={index}>
          <div className="rounded-md bg-primary/20 p-2 dark:bg-primary/10 lg:flex lg:items-center lg:justify-center lg:gap-4 lg:py-8">
            <img
              src={project.ipadPhotoLink}
              alt=""
              className="mx-auto w-80 sm:h-80 sm:w-[26rem] lg:mx-0"
            />
            {project.iphonePhotoLink && (
              <img
                src={project.iphonePhotoLink}
                alt=""
                className="hidden h-72 w-[10rem] lg:inline "
              />
            )}
          </div>
          <h3 className="mt-4 text-lg font-semibold sm:text-2xl ">
            {project.title}
          </h3>
          {project.descriptionSectionsArr.map((section, index) => (
            <p className="mt-2 leading-7" key={index}>
              {section}
            </p>
          ))}
          <div className="mt-2">
            {project.techStackArr.map((tech, index) => (
              <Badge variant="secondary" key={index} className="mb-1 mr-2">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="mb-2 mr-2">
                  <span>GitHub</span>
                  <ArrowUpRightIcon className="ml-1 h-4 w-4" />
                </Button>
              </a>
            )}
            {project.liveLinkArr.map((linkInfo, index) => (
              <a
                key={index}
                href={linkInfo.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="mb-2 mr-2">
                  <span>
                    Live {linkInfo.linkDesc && `(${linkInfo.linkDesc})`}
                  </span>
                  <ArrowUpRightIcon className="ml-1 h-4 w-4" />
                </Button>
              </a>
            ))}
          </div>
        </div>
      ))}

      <hr className="-mx-4 -mt-6" />

      <div className="py-6">
        More projects coming soon.{" "}
        <span className="font-mono font-semibold">Press G</span> to see all my
        public GitHub projects.
      </div>
    </div>
  );
}
